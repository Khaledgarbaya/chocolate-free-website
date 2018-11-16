import React from 'react'
import Layout from '../components/layout'

class NotFound extends React.Component {
  render() {
    return (
      <Layout>
        <div>
          <h1>404 Not Found</h1>
          <p>Oops something went wrong</p>
        </div>
      </Layout>
    )
  }
}

export default NotFound
