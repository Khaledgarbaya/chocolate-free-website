import React, { Component } from 'react'
import * as PropTypes from 'prop-types'

class ArticleTwoImages extends Component {
  
  render () {
    const {
      left,
      right
    } = this.props.data
    return (
    <section className='content-module two-images'>
      <div className='left'>
        <img src={`${left.file.url}?w=450`}
          alt={left.title}
          title={left.title}/>
        <p>{left.description}</p>
      </div>
      <div className='right'>
        <img src={`${right.file.url}?w=450`}
          alt={right.title}
          title={right.title}/>
        <p>{right.description}</p>
      </div>
    </section>
    )
  }
}

ArticleTwoImages.propTypes = {
  data: PropTypes.object.isRequired
}
export default ArticleTwoImages
