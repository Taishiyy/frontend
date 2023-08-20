import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route, Link, Switch, } from 'react-router-dom';
import './css/App.css';
import './css/Home.css';
import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from './component/Search';
import ColorBook from './component/colorsBook';
import ColorSelect from './component/ColorSelect'
import ColorPages from './component/ColorPages';
import Footer from './component/Footer';

function App() {

  return (
    <Router>
      <h1 className='header wrapper'><a href='#page-top'><span className='logo'>7 colored books</span></a></h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
       {/* 必要に応じて他のルートを追加 */}
      </Routes>
    </Router>
  );
}



function Home() {
  const [array, setArray] = React.useState([]);
	const url = "https://grant_back-1-s6313601.deta.app/books";

	useEffect(() => {
    fetch(url)  // FastAPIのエンドポイントに合わせて変更してください
      .then(response => response.json())
      .then(data => {
        setArray(data);
        console.log(data);
      })
      .catch(error => console.error("Error fetching data:", error));
  }, []);
  const data = [
    // 仮データ
    'Apple', 'Banana', 'Cherry', 'Dog', 'Elephant', 'Fish', 'Grape',
    'Hat', 'Ice Cream', 'Jellyfish', 'Kangaroo', 'Lion', 'Monkey',
    'Night', 'Orange', 'Penguin', 'Queen', 'Rabbit', 'Sun', 'Tiger',
    'Umbrella', 'Violin', 'Watermelon', 'Xylophone', 'Yak', 'Zebra'
  ];
  
  return(
    <>
      <ul>
        {array.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div className='first-page' id="page-top">
        <h1 className='text title'><span className='seven'>7</span><br/>colored<br/>books</h1>
        <h2 className='text'>まだ読んだことのない本との<br/>おもいがけない出会いをあなたに...</h2>
        <h4 className='text introduction'>7 colored booksは色と読者をつなげるサービスです<br/>今日の気分を色で表現して<br/>新たな本との出会いをお楽しみください</h4>
        <h1 className='text registration'>本の色を登録する</h1> 
        <h4 className='text'>自分の読んだ本を虹の色のどれに近いか選んでください<br/>7色はRED(赤)・ORANGE(橙)・YELLOW(黄)・GREEN(緑)・BLUE(青)・INDIGO(藍)・VIOLET(紫)です</h4> 
        <Search data={data} />
        {/* <ColorBook data={data}/> */}
        <ColorSelect />
      </div>
      <ColorPages />
      <Footer />
    </>
  )
}

function About() {
  return<h2>About</h2>
}

function Contact() {
  return<h2>Contact</h2>
}

export default App;
