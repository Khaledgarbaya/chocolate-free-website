import React, { Component} from 'react';
import * as PropTypes from 'prop-types'

class Recipe extends Component {
  render() {
    console.log(this.props.data)
    const {
      title,
      cookTime,
      ingredients,
      instructions,
      prepTime,
      serves,
      image,
      totalTime
    } = this.props.data
    return (
      <section className='recipe'>
        <h2 className='title'> {title} </h2>
        <img src={image.file.url} />
        <button className='print-button' onClick={window.print}>
          Print <span className='print-icon'></span>
        </button>
        <div className='prep'>
          <div className='prep-section prep-time'>
            <span className='label'>PREP TIME</span>
            <span className='value'>{prepTime}</span>
          </div>
          <div className='prep-section cook-time'>
            <span className='label'>COOK Time</span>
            <span className='value'>{cookTime}</span>
          </div>
          <div className='prep-section total-time'>
            <span className='label'>TOTAL Time</span>
            <span className='value'>{totalTime}</span>
          </div>
        </div>
        <div className='ingredients'>
          <h2>INGREDIENTS</h2>
          <div dangerouslySetInnerHTML={{__html: ingredients.childMarkdownRemark.html}} />
        </div>
        <div className='instructions'>
          <h2>INSTRUCTIONS</h2>
          <div dangerouslySetInnerHTML={{__html: instructions.childMarkdownRemark.html}} />
        </div>
      </section>  
    )
  }
}

Recipe.propTypes = {
  data: PropTypes.object.isRequired
}
export default Recipe;
