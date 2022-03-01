import React, { Component } from "react";
import * as PropTypes from "prop-types";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

class Recipe extends Component {
  print() {
    window.print();
  }
  render() {
    const {
      title,
      cookTime,
      ingredients,
      instructions,
      prepTime,
      image,
      totalTime,
    } = this.props.data;
    return (
      <section className="recipe border-dotted border text-paragraph p-8">
        <h2 className="uppercase text-heading text-2xl w-full text-center">
          {" "}
          {title}{" "}
        </h2>
        <div className="flex flex-wrap text-paragraph">
          <div className="w-full p-6 md:w-1/3 print:w-1/3 border border-dotted">
            <span className="label">PREP TIME</span>
            <span className="value">{prepTime}</span>
          </div>
          <div className="w-full p-6 md:w-1/3 print:w-1/3 border border-dotted">
            <span className="label">COOK Time</span>
            <span className="value">{cookTime}</span>
          </div>
          <div className="w-full p-6 md:w-1/3 print:w-1/3 border border-dotted">
            <span className="label">TOTAL Time</span>
            <span className="value">{totalTime}</span>
          </div>
        </div>
        <div className="mb-3">
          <h2 className="text-2xl inline-block my-5 text-heading w-full text-center">
            INGREDIENTS
          </h2>
          <div className="flex flex-wrap items-center">
            <div
              className="w-full md:w-1/2 p-4 print:w-1/2"
              dangerouslySetInnerHTML={{
                __html: ingredients.childMarkdownRemark.html,
              }}
            />

            <div className="w-full md:w-1/2 print:w-1/2">
              <GatsbyImage alt={title} image={getImage(image)} />
              <button
                className="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 mr-2 mt-2 print:hidden"
                onClick={() => {
                  this.print();
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 -ml-1 w-5 h-5"
                  aria-hidden="true"
                  focusable="false"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                  />
                </svg>
                <span>Print</span>
              </button>
            </div>
          </div>
        </div>
        <div className="border-dotted border-t mb-6">
          <h2 className="text-heading inline-block my-5 w-full text-center">
            INSTRUCTIONS
          </h2>
          <div
            className="text-paragraph"
            dangerouslySetInnerHTML={{
              __html: instructions.childMarkdownRemark.html,
            }}
          />
        </div>
      </section>
    );
  }
}

Recipe.propTypes = {
  data: PropTypes.object.isRequired,
};
export default Recipe;
