import React from 'react'

const Author = ({author})=> {
    return (
        <div className="flex flex-wrap justify-center items-center font-paragraph mt-6 border-t p-2">
          <div className="w-full sm:w-1/4 text-center">
          { author.avatar &&
            author.avatar.resolutions.src &&
            <img
              style={{ margin: 0 }}
              className="inline-block"
              src={author.avatar.resolutions.src}
              srcSet={author.avatar.resolutions.srcSet}
            />
           }
          </div>
          <div className="w-full sm:w-3/4 text-center mt-4 sm:text-left sm:mt-0">
            <h3 className="font-heading text-xl inline-block">{ author.fullName }</h3>
            <p>{ author.bio.bio }</p>
            <div className="u-noMarginBottom" data-markup><a className="inline-block text-blue-900 px-2 underline" href={ author.website }>Website</a></div>
          </div>
        </div>
    )
  }

export default Author
