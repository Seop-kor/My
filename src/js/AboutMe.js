import React, { useEffect } from 'react';
import Progress from 'progressbar.js';

import mypicture from '../picture/mypicture.jpg';
import csspic from '../picture/css.png';
import htmlpic from '../picture/html.png';
import jspic from '../picture/javascript.png';
import jq from '../picture/jquery.png';
import reactpic from '../picture/react.png';
import mariadb from '../picture/mariadb.png';
import mongodb from '../picture/mongodb.png';
import mssql from '../picture/mssql.png';
import mysql from '../picture/mysql.png';
import spring from '../picture/spring.png';
import sass from '../picture/sass.png';
import webpack from '../picture/webpack.png';
import babel from '../picture/babel.png';

function AboutMe() {
    const delay = [1.0, 0.9, 0.7, 0.9, 0.8, 0.8, 0.65, 0.65, 1.0, 1.0, 0.7, 1.0, 1.0];
    useEffect(function () {
        const list = document.getElementsByClassName("card");
        Array.from(list).forEach((item, index) => {
            let a;
            item.addEventListener('mouseenter', () => {
                a = new Progress.Circle('#' + item.childNodes[1].id, {
                    strokeWidth: 4,
                    trailWidth: 1,
                    easing: 'easeInOut',
                    duration: 1400,
                    from: { color: '#aaa', width: 1 },
                    to: { color: '#333', width: 4 },
                    step: function(state, circle) {
                        circle.path.setAttribute('stroke', state.color);
                        circle.path.setAttribute('stroke-width', state.width);
                    
                        const value = Math.round(circle.value() * 100);
                        if (value === 0) {
                          circle.setText('');
                        } else {
                          circle.setText(value);
                        }
                    }
                });
                a.animate(delay[index]);
            });

            item.addEventListener('mouseleave', () => {
                a.destroy();
            })
        });
    }, []);
    return (
        <>
            <div className="introduce_myself">
                <div className="mypicture_wrapper">
                    <img id="mypicture" src={mypicture} alt="mypicture"></img>
                </div>
                <div className="introduce_text_wrapper">
                    <p id="introduce_text">안녕하세요 풀스택 개발자 유인섭입니다.<br></br>
                        웹개발은 대학과정에서 처음 접했고 다른 분야보다 
                        개발한 화면과 기능을 빠르게 볼 수 있다는 점에 흥미를 느껴 공부하게 되었습니다.<br></br>
                        백엔드를 먼저 공부했고 현재는 프론트엔드 또한, 공부해가며 풀스택 개발자로써 여러 프로젝트를 하고있습니다.
                    </p>
                </div>
            </div>

            <div className="skill_list">
                <div id="frontend_list">
                    <div id="frontend_list_top">
                        <span>FrontEnd</span>
                    </div>
                    <div className="skill_list_item">
                        <div className="card">
                            <div className="card-front">
                                <img src={htmlpic} alt="html"></img>
                                <h5>HTML</h5>
                            </div>
                            <div id="card-back-html" className="card-back">

                            </div>
                        </div>

                        <div className="card">
                            <div className="card-front">
                                <img src={csspic} alt="css3"></img>
                                <h5>CSS3</h5>
                            </div>
                            <div id="card-back-css" className="card-back">

                            </div>
                        </div>

                        <div className="card">
                            <div className="card-front">
                                <img src={sass} alt="Sass/Scss"></img>
                                <h5>Sass / Scss</h5>
                            </div>
                            <div id="card-back-sass" className="card-back">

                            </div>
                        </div>

                        <div className="card">
                            <div className="card-front">
                                <img src={jspic} alt="javascript"></img>
                                <h5>JavaScript</h5>
                            </div>
                            <div id="card-back-js" className="card-back">

                            </div>
                        </div>

                        <div className="card">
                            <div className="card-front">
                                <img src={jq} alt="jquery"></img>
                                <h5>Jquery</h5>
                            </div>
                            <div id="card-back-jq" className="card-back">

                            </div>
                        </div>

                        <div className="card">
                            <div className="card-front">
                                <img src={reactpic} alt="react"></img>
                                <h5>React</h5>
                            </div>
                            <div id="card-back-react" className="card-back">

                            </div>
                        </div>

                        <div className="card">
                            <div className="card-front">
                                <img src={webpack} alt="webpack"></img>
                                <h5>Webpack</h5>
                            </div>
                            <div id="card-back-webpack" className="card-back">

                            </div>
                        </div>

                        <div className="card">
                            <div className="card-front">
                                <img src={babel} alt="babel"></img>
                                <h5>Babel</h5>
                            </div>
                            <div id="card-back-babel" className="card-back">

                            </div>
                        </div>
                    </div>
                </div>
                <div id="backend_list">
                    <div id="backend_list_top">
                        <span>BackEnd</span>
                    </div>
                    <div className="skill_list_item">
                        <div className="card">
                            <div className="card-front">
                                <img src={spring} alt="spring"></img>
                                <h5>Spring</h5>
                            </div>
                            <div id="card-back-spring" className="card-back">

                            </div>
                        </div>

                        <div className="card">
                            <div className="card-front">
                                <img src={mariadb} alt="mariadb"></img>
                                <h5>MariaDB</h5>
                            </div>
                            <div id="card-back-maria" className="card-back">

                            </div>
                        </div>

                        <div className="card">
                            <div className="card-front">
                                <img src={mongodb} alt="mongodb"></img>
                                <h5>MongoDB</h5>
                            </div>
                            <div id="card-back-mongo" className="card-back">

                            </div>
                        </div>

                        <div className="card">
                            <div className="card-front">
                                <img src={mssql} alt="mssql"></img>
                                <h5>MsSQL</h5>
                            </div>
                            <div id="card-back-ms" className="card-back">

                            </div>
                        </div>

                        <div className="card">
                            <div className="card-front">
                                <img src={mysql} alt="mysql"></img>
                                <h5>MySQL</h5>
                            </div>
                            <div id="card-back-my" className="card-back">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutMe;