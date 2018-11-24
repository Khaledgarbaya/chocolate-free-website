import React, { Component } from "react";
import { Link } from "gatsby";
import InstaFeed from "./insta-feed";
import Search from "./search";

class SideBar extends Component {
  render() {
    return (
      <div className="side-bar">
        <div className="search widget">
          <h3 className="widget-title">Looking for something?</h3>
          <Search />
        </div>
        <div className="widget widget-text">
          <h3 className="widget-title"> Meet Amal</h3>
          <Link to="/about.html">
            <img
              src="https://images.ctfassets.net/0w6gaytm0wfv/eLUCi9XuJaQgSMU2eM4gC/062ce3244d5372a78892a8990c229388/d5c74354-60cd-4c8f-af44-47ab5d2b5c05.JPG?w=230"
              width="230"
              alt="Amal Nasri"
            />
          </Link>
        </div>
        <div className="widget widget-text">
          <h3 className="widget-title">NEVER MISS A POST!</h3>
          <div id="mc_embed_signup">
            <form
              action="https://chocolate-free.us17.list-manage.com/subscribe/post?u=a98782a9b211f2e039434108c&amp;id=a6247b2b13"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              className="validate"
              target="_blank"
              noValidate
            >
              <div id="mc_embed_signup_scroll">
                <div className="mc-field-group">
                  <input
                    type="email"
                    autoComplete="email"
                    defaultValue="ENTER YOUR EMAIL"
                    name="EMAIL"
                    className="required email"
                    id="mce-EMAIL"
                  />
                </div>
                <div className="mc-field-group">
                  <input
                    type="text"
                    defaultValue="ENTER YOUR NAME"
                    autoComplete="name"
                    name="FNAME"
                    className=""
                    id="mce-FNAME"
                  />
                </div>
                <div id="mce-responses" className="clear">
                  <div
                    className="response"
                    id="mce-error-response"
                    style={{ display: "none" }}
                  />
                  <div
                    className="response"
                    id="mce-success-response"
                    style={{ display: "none" }}
                  />
                </div>
                <div
                  style={{
                    position: "absolute",
                    left: "-5000px",
                    ariaHidden: "true"
                  }}
                >
                  <input
                    type="text"
                    name="b_a98782a9b211f2e039434108c_a6247b2b13"
                    tabIndex="-1"
                    defaultValue=""
                  />
                </div>
                <div className="clear">
                  <input
                    type="submit"
                    value="Subscribe"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    className="button"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="widget widget-text">
          <h3 className="widget-title"> Instagram Feed</h3>
          <InstaFeed />
        </div>
      </div>
    );
  }
}

export default SideBar;
