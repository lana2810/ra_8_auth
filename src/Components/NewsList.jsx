import React, { useState } from "react";
import API from "../api";
import NewsItem from "./NewsItem";

function NewsList() {
  const [items, setItems] = useState([]);
  const userToken = localStorage.getItem("userToken");
  API.getNews(userToken).then((response) => setItems(response));
  return (
    <div className="newsList">
      {items && items.map((item) => <NewsItem key={item.id} {...item} />)}
    </div>
  );
}

export default NewsList;
