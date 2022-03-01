import React, { Component } from 'react'
import * as PropTypes from 'prop-types'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
class ArticleTwoImages extends Component {
  
  render () {
    const {
      left,
      right
    } = this.props.data
    return (
    <section className='flex flex-wrap justify-center w-full  print:hidden'>
      <div className='w-full md:w-1/2 p-2'>
        <GatsbyImage
          image={getImage(left)}
          alt={left.title}
          className="m-0 w-full inline-block"
          title={left.title}/>
      </div>
      <div className='w-full md:w-1/2 p-2'>
        <GatsbyImage
          image={getImage(right)}
          alt={right.title}
          className="m-0 w-full inline-block"
          title={right.title}/>
      </div>
    </section>
    )
  }
}

ArticleTwoImages.propTypes = {
  data: PropTypes.object.isRequired
}
export default ArticleTwoImages
