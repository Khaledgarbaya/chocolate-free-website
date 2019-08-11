import React from "react"
import {Link} from "gatsby"
import * as PropTypes from "prop-types"
import "../css/style.css"
import Person from '../components/seo/person'

const propTypes = {
  children: PropTypes.object.isRequired,
}
const Header = () => {
  return (
    <div className='w-full flex flex-wrap px-2 py-2 mb-6 items-center justify-between'>
      <Person />
      
      <div className="px-4 py-2 w-full  mx-auto">
        <img className="w-full max-w-sm block mx-auto"  src="//images.ctfassets.net/0w6gaytm0wfv/6vAc435jNusAyYWSkqQg8k/c4a0769881ac2511038ea3aa4e386340/chocolate-free-black.png" alt="Chocolate Free" />
      </div>
      <nav className="sm:flex sm:justify-center w-full px-2 py-2 mx-auto" role="navigation">
        <Link className="w-full block py-2 sm:mx-2 text-center sm:w-auto" to='/'>Home</Link>
        <Link className="w-full block py-2 sm:mx-2 text-center sm:w-auto" to='/hors-sujet.html'>Hors Sujet</Link>
        <Link className="w-full block py-2 sm:mx-2 text-center sm:w-auto" to='/portfolio.html'>Portfolio</Link>
        <Link className="w-full block py-2 sm:mx-2 text-center sm:w-auto" to='/about.html'>About</Link>
    </nav>
  </div>
  )
}
class DefaultLayout extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <main className="max-w-4xl mx-auto px-2 py-2"> 
          {this.props.children}
          <footer className="mt-4 border-t p-2 w-full font-paragraph">
            Copyright © 2017-2019 Chocolate free website, proudly powered by <a href="https://www.contentful.com" className="text-blue-900 px-2 underline">Contentful</a> and <a className="text-blue-900 px-2 underline" href="https://github.com/gatsbyjs/gatsby">Gatsbyjs</a>.
          </footer>
        </main>
      </div>
    )
  }
}

DefaultLayout.propTypes = propTypes

export default DefaultLayout
