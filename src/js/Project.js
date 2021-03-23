import React , {useEffect} from 'react';
import Projectf from '../js/module/project_script';

import seopstamodal from '../picture/seopstamodal.png';
import oneintro from '../picture/oneintro.png';
import one1 from '../picture/one1.png';
import one2 from '../picture/one2.png';
import one3 from '../picture/one3.png';
import one4 from '../picture/one4.png';
import one5 from '../picture/one5.png';

function Project(){
    useEffect(() => {
        Projectf();
    },[]);

    return (
        <>
        <div id="project_wrapper">
            <div className="project_item">
                <div className="oneimage">
                </div>
                <div className="project_item_title">
                    전공동아리 O.N.E. 홈페이지
                </div>
            </div>
            <div className="project_item">
                <div className="seopstaimage">
                </div>
                <div className="project_item_title">
                    인스타그램 클론 코딩
                </div>
            </div>
        </div>

        <div className="modal-wrapper">
            <div className="modal">
                <div className="modal-close">X</div>
                <div className="modal-content">
                    <img src={seopstamodal} alt="seopsta"></img>
                    <div>
                        <p>Github에서 보기</p>
                        <a href="https://github.com/Seop-kor/Seopstagram">Github</a>
                    </div>
                </div>
                <div className="modal-close-btn">
                    <button>닫기</button>
                </div>
            </div>
        </div>

        <div className="one-modal-wrapper">
            <div className="modal">
                <div className="modal-close">
                    X
                </div>
                <div className="one-modal-content">
                    <div className="one-modal-content-grid">
                        <img src={oneintro} alt="one"></img>
                        <img src={one1} alt="one"></img>
                        <img src={one2} alt="one"></img>
                        <img src={one3} alt="one"></img>
                        <img src={one4} alt="one"></img>
                        <img src={one5} alt="one"></img>
                    </div>
                    <div className="one-modal-content-detail">
                        <img></img>
                        <span></span>
                    </div>
                </div>
                <div className="modal-close-btn">
                    <button>닫기</button>
                </div>
            </div>
        </div>
        </>
    );
}

export default Project;