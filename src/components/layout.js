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
      <nav className="sm:flex w-full px-2 py-2 sm:w-1/2" role="navigation">
        <Link className="w-full block py-2 sm:mx-2 text-center sm:w-auto" to='/'>Home</Link>
        <Link className="w-full block py-2 sm:mx-2 text-center sm:w-auto" to='/hors-sujet.html'>Hors Sujet</Link>
        <Link className="w-full block py-2 sm:mx-2 text-center sm:w-auto" to='/portfolio.html'>Portfolio</Link>
        <Link className="w-full block py-2 sm:mx-2 text-center sm:w-auto" to='/about.html'>About</Link>
    </nav>
    <nav className="flex w-full justify-center sm:justify-end sm:w-1/2" role="navigation">
      <a className="px-2" href='https://www.facebook.com/chocolatefreedotcom/' target="_blank" rel='noopener'>
        <img src='/icons/facebook.svg' className="w-6 h-6" alt='facebook' />
      </a>
      <a className="px-2" href='https://www.instagram.com/chocolatefreeblog' target="_blank" rel='noopener'>
        <img src='/icons/instagram.svg' className="w-6 h-6" alt='instagram' />
      </a>
      <a className="px-2" href='https://www.youtube.com/channel/UCAx4forqSrkq2smhZ-X5oSg' target="_blank" rel='noopener'> 
        <img src='/icons/youtube.svg' className="w-6 h-6" alt='youtube' />
      </a>
    </nav>
  </div>
  )
}
class DefaultLayout extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <main className="container mx-auto"> 
          {this.props.children}
          <footer className="footer">
            Copyright © 2017 Chocolate free website, proudly powered by <a href="https://www.contentful.com">Contentful</a> and <a href="https://github.com/gatsbyjs/gatsby">Gatsbyjs</a>.
          </footer>
        </main>
      </div>
    )
  }
}

DefaultLayout.propTypes = propTypes

export default DefaultLayout
