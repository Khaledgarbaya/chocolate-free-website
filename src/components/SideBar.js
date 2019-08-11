import React, { Component } from "react";
import { Link } from "gatsby";
import InstaFeed from "./insta-feed";
import Search from "./search";

class SideBar extends Component {
  render() {
    return (
      <div className="flex items-center flex-col  w-full md:w-1/3">
        <div className="border-b py-2">
          <h3 className="text-xl font-heading inline-block mb-4">Looking for something?</h3>
          <Search />
        </div>
        <div className="flex flex-col border-b items-center my-6">
          <h3 className="inline-block mb-2 text-xl font-heading">Meet Amal</h3>
          <Link to="/about.html" className="inline-block">
            <img
              src="https://images.ctfassets.net/0w6gaytm0wfv/eLUCi9XuJaQgSMU2eM4gC/062ce3244d5372a78892a8990c229388/d5c74354-60cd-4c8f-af44-47ab5d2b5c05.JPG?w=230"
              width="230"
              alt="Amal Nasri"
            />
          </Link>
        </div>
        <div className="my-6 border-b flex flex-col items-center w-full">
          <h3 className="font-heading text-xl mb-2">Never miss a post!</h3>
          <div id="mc_embed_signup">
            <form
              action="https://chocolate-free.us17.list-manage.com/subscribe/post?u=a98782a9b211f2e039434108c&amp;id=a6247b2b13"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              className="validate w-full"
              target="_blank"
              noValidate
            >
              <div id="mc_embed_signup_scroll">

                <div className="mc-field-group">
                  <input
                    type="text"
                    defaultValue=""
                    placeholder="Name"
                    autoComplete="name"
                    name="FNAME"
                    className="shadow mb-2 appearance-none border rounded w-full h-12 py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline"
                    id="mce-FNAME"
                  />
                </div>
                <div className="w-full">
                  <input
                    type="email"
                    autoComplete="email"
                    defaultValue=""
                    placeholder="Email"
                    name="EMAIL"
                    className="required shadow mb-2 appearance-none border rounded w-full h-12 py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline"
                    id="mce-EMAIL"
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
      className="font-paragraph bg-black hover:bg-gray-900 text-white font-bold w-full h-12 py-2 px-4  rounded focus:outline-none focus:shadow-outline"
    />
  </div>
</div>
            </form>
      </div>
      </div>
      <div className="flex flex-col items-center">
        <h3 className="text-xl font-heading inline-block mb-2"> Instagram Feed</h3>
        <InstaFeed />
      </div>
    </div>
    );
    }
    }

export default SideBar;
