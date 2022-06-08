import React from "react";
import CardComponent from "../CardComponent/CardComponent";

const SecondYear = () => {
  var titles = {
    card1: {
      img: "https://thumbs.dreamstime.com/b/golden-retriever-dog-21668976.jpg",
      title: "Web Devlopment",
      content:
        "Learn to build fully functional web applications. Course options include starting from the basics of coding and then learning web. Recommended course to do after data structures / foundation",
      link: "/engtrack/secondyear/web_dev",
    },
    card2: {
      img: "https://thumbs.dreamstime.com/b/golden-retriever-dog-21668976.jpg",
      title: "Android Devlopment",
      content: "Learn Competitive Programming.",
      link: "/engtrack/secondyear/android_dev",
    },
    card3: {
      img: "https://thumbs.dreamstime.com/b/golden-retriever-dog-21668976.jpg",
      title: "Machine Learning",
      content: "Learn data structures and algorithms.",
      link: "/engtrack/secondyear/machine_learning",
    },
  };
  return (
    <div className="main__card">
      <CardComponent data={titles.card1} />
      <CardComponent data={titles.card2} />
      <CardComponent data={titles.card3} />
    </div>
  );
};

export default SecondYear;
