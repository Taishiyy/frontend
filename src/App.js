import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './css/App.css';
import './css/Home.css';
import React from 'react';
import Search from './component/Search';
import ColorBook from './component/colorsBook';


function App() {
  return (
    <Router>
      <h1 className='home'>本の評価を色でするサイト</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
       {/* 必要に応じて他のルートを追加 */}
      </Routes>
    </Router>
  );
}



function Home() {
  const data = [
    // 仮データ
    'Apple', 'Banana', 'Cherry', 'Dog', 'Elephant', 'Fish', 'Grape',
    'Hat', 'Ice Cream', 'Jellyfish', 'Kangaroo', 'Lion', 'Monkey',
    'Night', 'Orange', 'Penguin', 'Queen', 'Rabbit', 'Sun', 'Tiger',
    'Umbrella', 'Violin', 'Watermelon', 'Xylophone', 'Yak', 'Zebra'
  ];
  
  return(
    <>
      <h2>自分の読んだ本を虹の色のどれに近いか評価してください。<br/>虹の色は赤・橙・黄・緑・青・藍・紫です。</h2>
      <h1>本を検索する</h1>
      <Search data={data} />
      <ColorBook data={data}/>
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
