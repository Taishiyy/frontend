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
import RecommendBook from './component/recommendBook';

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
	const fastapi = "https://grant_back-1-s6313601.deta.app/books";

	useEffect(() => {
    fetch(fastapi)  // FastAPIのエンドポイントに合わせて変更してください
      .then(response => response.json())
      .then(data => {
        setArray(data);
        console.log(data);
      })
      .catch(error => console.error("Error fetching data:", error));
    }, []);

  const sample = [
    // 仮データ
    'Apple', 'Banana', 'Cherry', 'Dog', 'Elephant', 'Fish', 'Grape',
    'Hat', 'Ice Cream', 'Jellyfish', 'Kangaroo', 'Lion', 'Monkey',
    'Night', 'Orange', 'Penguin', 'Queen', 'Rabbit', 'Sun', 'Tiger',
    'Umbrella', 'Violin', 'Watermelon', 'Xylophone', 'Yak', 'Zebra'
  ];
  
  return(
    <>
      <div className='first-page' id="page-top">
        <h1 className='text title'><span className='seven'>7</span><br/>colored<br/>books</h1>
        <h2 className='text'>まだ読んだことのない本との<br/>おもいがけない出会いをあなたに...</h2>
        <h4 className='text introduction'>7 colored booksは色と読者をつなげるサービスです<br/>今日の気分を色で表現して<br/>新たな本との出会いをお楽しみください</h4>
        <h1 className='text registration'>本の色を登録する</h1> 
        <h4 className='text'>自分の読んだ本を虹の色のどれに近いか選んでください<br/>7色は赤・橙・黄・緑・青・藍・紫です</h4> 
        <Search data={sample} />
        {/* <ColorBook data={data}/> */}
        <ColorSelect />
      </div>
      {/* <RecommendBook data={array} color="紫" />  */}
      <ColorPages/>
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
