
import React from 'react'
import ArticleHeader from './ArticleHeader'

const Article = ({ node, excerpt = false }) => {
  node.slug = '#'
  return (
				<div className="c-article c-card u-marginBottomLarge">
          <ArticleHeader node={node} />
          { node.featureImage &&
            node.featureImage.resolutions.src &&
            <img
              style={{ margin: 0 }}
              width={node.featureImage.resolutions.width}
              height={node.featureImage.resolutions.height}
              src={node.featureImage.resolutions.src}
              srcSet={node.featureImage.resolutions.srcSet}
            />
          }
          <div dangerouslySetInnerHTML={{ __html: node.contentModules[0].copy.childMarkdownRemark.html }}/>

				</div>
  )
}

export default Article
