import React from 'react';

import oneintro from '../picture/oneintro.png';


function OneProjectMD(){
    return (
        <div className="one-project-main">
            <div className="one-project-wrapper">
                <h2>O.N.E. 홈페이지 프로젝트</h2>
                <div className="one-project-monitor"> {/*본래 크기 470 382 안에 내부 크기 440 250 */}
                    <a href="#">
                        <img src={oneintro}></img>
                    </a>
                </div>
                <h3 className="one-project-title">O.N.E.프로젝트 개요</h3>
                <div className="one-project-arrow">
                    <span>&lt;</span>
                    <span>&gt;</span>
                </div>

                <div className="one-project-grid">
                    <div>
                        <img src={oneintro} alt="oneintro"></img>
                        <span>프로젝트 개요</span>
                    </div>
                    <div>
                        <img src={one1} alt="one"></img>
                        <span>one1</span>
                    </div>
                    <div>
                        <img src={one2} alt="one"></img>
                        <span>one2</span>
                    </div>
                    <div>
                        <img src={one3} alt="one"></img>
                        <span>one3</span>
                    </div>
                    <div>
                        <img src={one4} alt="one"></img>
                        <span>one4</span>
                    </div>
                    <div>
                        <img src={one5} alt="one"></img>
                        <span>one5</span>
                    </div>
                </div>


            </div>
            <p>화면 클릭시 모든 목록을 보실 수 있습니다.</p>
        </div>
    );
}