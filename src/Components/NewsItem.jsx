import React from "react";

function NewsItem({ content, image, title }) {
  return (
    <div className="item-news">
      <img src={image} alt="foto-news" className="img-news" />
      <div>{title}</div>
      <div>{content}</div>
    </div>
  );
}

export default NewsItem;
