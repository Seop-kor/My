import React, {useEffect} from 'react';

// import oneintro from '../picture/oneintro.png';
// import one1 from '../picture/one1.png';
// import one2 from '../picture/one2.png';
// import one3 from '../picture/one3.png';
// import one4 from '../picture/one4.png';
// import one5 from '../picture/one5.png';

function OneProject(){
    useEffect(() => {
        const grid_items = document.getElementsByClassName("one-project-grid");
        const monitor = document.getElementsByClassName("one-project-moniter-img");

        monitor[0].addEventListener('click', function(e){
            e.preventDefault();
            grid_items[0].style.display = "grid";
        });
        grid_items[0].childNodes.forEach(function(item){
            monitor[0].childNodes[0].setAttribute("src", item.childNodes[0].childNodes[0].getAttribute('src'));
        });
    }, []);

    return (
        <div className="one-project-container">
            <div className="one-project-wrapper">
                <h2>O.N.E. 홈페이지 프로젝트</h2>
                <div className="one-project-moniter">
                    <a href="#" className="one-project-moniter-img">
                        <img></img>
                    </a>
                </div>
                <div className="one-project-arrow">
                    <span>&lt;</span>

                    <span>&gt;</span>
                </div>
                <div className="one-project-moniter-img-exp">
                    <p>ㅇㄻㄴㅇㄻ</p>
                </div>

{/* 
                <div className="one-project-grid" style={{display: 'none'}}>
                    <div>
                        <div className="one-project-card-front">
                            <img src={oneintro} alt="oneintro"></img>
                        </div>
                        <div className="one-project-card-back">
                            <span>프로젝트 개요</span>
                        </div>
                    </div>
                    <div>
                        <div className="one-project-card-front">
                            <img src={one1} alt="one"></img>
                        </div>
                        <div className="one-project-card-back">
                            <span>설명</span>
                        </div>
                    </div>
                    <div>
                        <div className="one-project-card-front">
                            <img src={one2} alt="one"></img>
                        </div>
                        <div className="one-project-card-back">
                            <span>설명</span>
                        </div>
                    </div>
                    <div>
                        <div className="one-project-card-front">
                            <img src={one3} alt="one"></img>
                        </div>
                        <div className="one-project-card-back">
                            <span>설명</span>
                        </div>
                    </div>
                    <div>
                        <div className="one-project-card-front">
                            <img src={one4} alt="one"></img>
                        </div>
                        <div className="one-project-card-back">
                            <span>설명</span>
                        </div>
                    </div>
                    <div>
                        <div className="one-project-card-front">
                            <img src={one5} alt="one"></img>
                        </div>
                        <div className="one-project-card-back">
                            <span>설명</span>
                        </div>
                    </div>
                    
                </div>
                */}
            </div>
        </div>
    );
}


export default OneProject;