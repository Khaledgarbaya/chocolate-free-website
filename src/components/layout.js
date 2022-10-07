import React from "react";
import * as PropTypes from "prop-types";
import "../css/style.css";
import Person from "../components/seo/person";
import { Slice } from "gatsby";

const propTypes = {
  children: PropTypes.object.isRequired,
};
const Header = () => {
  return (
    <div className="print:hidden flex flex-wrap items-center justify-between w-full px-2 py-2 mb-6">
      <Person />

      <div className="w-full px-4 py-2 mx-auto">
        <img
          className="block w-full max-w-sm mx-auto"
          src="//images.ctfassets.net/0w6gaytm0wfv/6vAc435jNusAyYWSkqQg8k/c4a0769881ac2511038ea3aa4e386340/chocolate-free-black.png"
          alt="Chocolate Free"
        />
      </div>
      <Slice alias="main-menu" />
    </div>
  );
};
class DefaultLayout extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <main className="max-w-4xl px-2 py-2 mx-auto">
          {this.props.children}
        </main>

        <footer className="w-full p-2 mt-4 border-t font-paragraph text-center print:hidden">
          Copyright © 2017-2019 Chocolate free website, proudly powered by{" "}
          <a
            href="https://www.contentful.com"
            className="px-2 text-blue-900 underline"
          >
            Contentful
          </a>{" "}
          and{" "}
          <a
            className="text-blue-900 px-2 underline"
            href="https://github.com/gatsbyjs/gatsby"
          >
            Gatsbyjs
          </a>
          .
        </footer>
      </div>
    );
  }
}

DefaultLayout.propTypes = propTypes;

export default DefaultLayout;
