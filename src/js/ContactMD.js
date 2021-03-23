import React, {useEffect} from 'react';

import mail from '../picture/mail.png';
import git from '../picture/git.png';

function ContactMD(){

    useEffect(function(){
        const contact_ani = document.querySelectorAll(".contact_item .link");
        Array.from(contact_ani).forEach(function(link){
            link.addEventListener("mouseover", function(e){
                link.previousSibling.className = "shadow active";
                link.previousSibling.previousSibling.className = "icon active";
            });
            link.addEventListener("mouseout", function(e){
                link.previousSibling.className = "shadow";
                link.previousSibling.previousSibling.className = "icon";
            });
        });
    }, []);

    return (
        <>
        <div className="contact_container">
            <div className="contact_wrapper">
                <div id="commtitle">Communication</div>
                <div className="contact_item">
                    <img src={mail} alt="mail" className="icon"></img>
                    <div className="shadow"></div>
                    <a className="link" href="mailto:dkdn1004@naver.com">dkdn1004@naver.com</a>
                </div>
                <div className="contact_item">
                    <img src={git} alt="git" className="icon"></img>
                    <div className="shadow"></div>
                    <a className="link" href="https://github.com/Seop-kor">Seop-kor</a>
                </div>
            </div>
        </div>
        </>
    );


}