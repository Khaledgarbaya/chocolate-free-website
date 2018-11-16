import React from 'react'

const Author = ({author})=> {
    return (
      <div className="c-article__authorSumUp">
        <div className="c-article__author">
          <div className="c-article__authorImage c-article__authorImage--large">
          { author.avatar &&
            author.avatar.resolutions.src &&
            <img
              style={{ margin: 0 }}
              width={author.avatar.resolutions.width}
              height={author.avatar.resolutions.height}
              src={author.avatar.resolutions.src}
              srcSet={author.avatar.resolutions.srcSet}
            />
           }
          </div>
          <div>
            <span className="c-article__authorName">{ author.fullName }</span>
            <p>{ author.bio.bio }</p>
            <div className="u-noMarginBottom" data-markup><a href={ author.website }>Website</a></div>
          </div>
        </div>
      </div>
    )
  }

export default Author
