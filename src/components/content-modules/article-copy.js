import React, { Component } from 'react'
import * as PropTypes from 'prop-types'

class ArticleCopy extends Component {
  
  render () {
    const {
      html,
      excerpt
    } = this.props.data.copy.childMarkdownRemark
    return (
    <section 
    dangerouslySetInnerHTML={{__html: html}} 
    className='content-module' />
  )
  }
}

ArticleCopy.propTypes = {
  data: PropTypes.object.isRequired
}
export default ArticleCopy
