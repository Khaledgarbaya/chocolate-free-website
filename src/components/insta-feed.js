import fetch from 'unfetch'
const url  = 'https://www.instagram.com/chocolatefreeblog/'
import React, { Component } from 'react'
import cheerio from 'cheerio'

class InstaFeed extends Component {
  constructor(props) {
    super(props)
    this.state = {media:[]}
  }
  componentDidMount () {
    fetch(url)
      .then(response => response.text())
      .then(data => {
        const $ = cheerio.load(data)
        const jsonData = $(`html > body > script`)
          .get(0).children[0].data
          .replace(/window\._sharedData\s?=\s?{/, `{`)
          .replace(/;$/g, ``)
        const json = JSON.parse(jsonData).entry_data.ProfilePage[0].graphql
        this.setState({media: json.user.edge_owner_to_timeline_media.edges.filter(({node}) => node.is_video === false).slice(0, 9)})
      })
      .catch(e => console.log)
  }
  render () {
    return (
      <div className='flex flex-wrap justify-center'>
        {this.state.media.map(({node}, i) => <a
          href={`https://www.instagram.com/chocolatefreeblog/p/${node.shortcode}`}
          target='_blank'
          rel='noreferrer noopener'
          key={i}
          className="inline-block w-1/3 p-1"
          title={node.edge_media_to_caption.edges[0].node.text}
        >
          <img className="mb-0" key={i} src={node.thumbnail_resources[0].src} />
        </a>)}
      </div>
    )
  }
}

export default InstaFeed
