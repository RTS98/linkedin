import React from 'react';
import './App.css';
import Header from './components/header/Header';
import SideBar from './components/sidebar/Sidebar';
import Feed from './components/feed/Feed';


function App() {
  return (
    <div className="App">
      <Header/>
      <div className='app__body'>
        <SideBar/>
        <Feed/>
      </div>
    </div>
  );
}

export default App;
