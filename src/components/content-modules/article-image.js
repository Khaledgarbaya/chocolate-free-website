import React, { Component } from 'react'
import * as PropTypes from 'prop-types'
import Img from 'gatsby-image'

class ArticleImage extends Component {
  
  render () {
    const {
      image
    } = this.props.data
    // TODO: add tracer effect to the image ?
    return (
    <section className='content-module one-image'>
    <img src={`${image.file.url}?w=650`} alt={image.title} title={image.title} />
    </section>
    )
  }
}

ArticleImage.propTypes = {
  data: PropTypes.object.isRequired
}
export default ArticleImage
