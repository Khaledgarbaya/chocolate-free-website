import React, { Component} from 'react';
import * as PropTypes from 'prop-types'

class Recipe extends Component {
  print () {
    window.print()
  }
  render() {
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
      <section className='recipe border-dotted border text-paragraph p-2'>
        <h2 className='uppercase text-heading text-2xl w-full text-center'> {title} </h2>
        <div className='flex flex-wrap text-paragraph'>
          <div className='w-full p-6 md:w-1/3 border border-dotted'>
            <span className='label'>PREP TIME</span>
            <span className='value'>{prepTime}</span>
          </div>
          <div className='w-full p-6 md:w-1/3 border border-dotted'>
            <span className='label'>COOK Time</span>
            <span className='value'>{cookTime}</span>
          </div>
          <div className='w-full p-6 md:w-1/3 border border-dotted'>
            <span className='label'>TOTAL Time</span>
            <span className='value'>{totalTime}</span>
          </div>
        </div>
        <div className='mb-3'>
          <h2 className="text-2xl inline-block my-5 text-heading w-full text-center">INGREDIENTS</h2>
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-1/2 p-4" dangerouslySetInnerHTML={{__html: ingredients.childMarkdownRemark.html}} />

            <div className="w-full md:w-1/2">
              <img src={image.file.url} />
              <button className='print-button' onClick={()=>{this.print()}}>
                Print <span className='print-icon'></span>
              </button>
            </div>
          </div>
        </div>
        <div className='border-dotted border-t mb-6'>
          <h2 className="text-heading inline-block my-5 w-full text-center">INSTRUCTIONS</h2>
          <div className="text-paragraph" dangerouslySetInnerHTML={{__html: instructions.childMarkdownRemark.html}} />
        </div>
      </section>  
    )
  }
}

Recipe.propTypes = {
  data: PropTypes.object.isRequired
}
export default Recipe;
