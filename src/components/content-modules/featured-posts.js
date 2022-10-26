import React from "react";
import PostCard from "../post-card";

const FeaturedPosts = ({ data }) => {
  return (
    <div className="featured-posts content-module">
      <section className="posts">
        {data.posts.map((post, i) => (
          <PostCard post={post} key={i} />
        ))}
      </section>
    </div>
  );
};
export default FeaturedPosts;
