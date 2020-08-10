import React from 'react';
// import logo from './logo.svg';
import './App.css';
import TopMenu from './Component/Topmenu/TopMenu.js';
import Header from './Component/Header/Header.js';
import Content from './Component/Content/Content.js';

function App() {
  return (
    <div className="App">
      <TopMenu></TopMenu>
      <Header></Header>
      <Content vitri1="order-lg-2" vitri2="order-lg-1"></Content>
    </div>
  );
}

export default App;
