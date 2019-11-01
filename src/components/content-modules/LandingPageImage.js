import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

class LandingPageImage extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="w-full px-4 py-4">
        <Link to="/" rel="noopener">
          <img
            className="block mx-auto"
            src={data.fields.image['en-US'].file['en-US'].url}
            alt="Chocolate Free"
          />
        </Link>
      </div>
    );
  }
}

LandingPageImage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default LandingPageImage;
