import React from 'react';
import { Route, Link } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import AboutMe from './AboutMe';
import Project from './Project';
import Contact from './Contact';

import './module/script.js';

function App() {
  return (
    <>
      <div id="left-loader"></div>
      <div id="right-loader"></div>
      <div className="container">
        <div id="checknav-wrapper">
          <div id="checknav">
              <Link to="/My/">About Me</Link>
              <Link to="/My/project">Project</Link>
              <Link to="/My/Contact">Contact</Link>
          </div>
        </div>
        <header>
          <div id="top">
            <div className="top_first_floor">
              <span>안녕하세요!</span>
            </div>
            <div className="top_second_floor">
              <span className="second_floor_first">저는&nbsp;</span>
              <ul id="textlist">
                <li className="slidetxt">사람들을 이끌 수 있</li>
                <li className="slidetxt">배우는 것을 두려워하지 않</li>
                <li className="slidetxt">의견을 수용할 줄 아</li>
              </ul>
              <span className="second_floor_third"><strong>는</strong> 유인섭입니다.</span>
            </div>
          </div>
          <Navigation id="navigation" />
        </header>
        <div className="content">
          <Route path="/My/" exact={true} component={AboutMe} />
          <Route path="/My/Project" component={Project} />
          <Route path="/My/Contact" component={Contact} />
        </div>
        <footer>
          <span>ⓒ 2021 유인섭 all rights reserved.</span>
        </footer>
      </div>
    </>
  );
}

export default App;
