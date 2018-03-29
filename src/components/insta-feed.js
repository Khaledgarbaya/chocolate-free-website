import fetch from 'unfetch'
const url  = 'https://www.instagram.com/chocolatefreeblog/?__a=1'
import React, { Component } from 'react'

class InstaFeed extends Component {
  constructor(props) {
    super(props)
    this.state = {media:[]}
  }
  componentDidMount () {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data.graphql.user.edge_owner_to_timeline_media.edges)
        this.setState({media: data.graphql.user.edge_owner_to_timeline_media.edges.filter(({node}) => node.is_video === false).slice(0, 9)})
        console.log(this.state.media)
      })
  }
  render () {
    return (
      <div className='insta-feed'>
        {this.state.media.map(({node}, i) => <img key={i} src={node.thumbnail_resources[0].src} />)}
      </div>
    )
  }
}

export default InstaFeed
