import React from 'react'
import ArticleHeader from './ArticleHeader'
import Link from 'gatsby-link'

import getArticleModule from '../utils/getArticleModule'

const Article = ({ node }) => {
  const {
    featureImage,
    contentModules
  } = node
  return (
				<div className="c-article c-card u-marginBottomLarge">
          <ArticleHeader node={node} />
          { featureImage &&
            featureImage.resolutions.src &&
            <img
              style={{ margin: 0 }}
              width={featureImage.resolutions.width}
              height={featureImage.resolutions.height}
              src={featureImage.resolutions.src}
              srcSet={featureImage.resolutions.srcSet}
            />
          }
        {contentModules.map((module, i) => getArticleModule(module, i))}

					<Link rel="noopener" to={`/article/${node.slug}.html`}>Read more...</Link>
				</div>
  )
}

export default Article
