import React, { Component } from 'react'
import * as PropTypes from 'prop-types'

class ArticleTwoImages extends Component {
  
  render () {
    const {
      left,
      right
    } = this.props.data
    return (
    <section className='flex flex-wrap justify-center w-full'>
      <div className='w-full md:w-1/2 p-2'>
        <img src={`${left.file.url}?w=450`}
          alt={left.title}
          className="m-0 w-full inline-block"
          title={left.title}/>
      </div>
      <div className='w-full md:w-1/2 p-2'>
        <img src={`${right.file.url}?w=450`}
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
