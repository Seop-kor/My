import React, { useEffect } from 'react';
import gray from '../picture/gray.png';
import winning from '../picture/winning.png';
import mail from '../picture/mail.png';
import git from '../picture/git.png';

function Contact() {
    useEffect(() => {
        //캔버스 그리기 시작
        const contactwrapper = document.getElementsByClassName("contact-container")[0].getBoundingClientRect();
        const w = contactwrapper.width * 0.8141725972912539;
        const h = contactwrapper.width * 0.4579720859763303;
        const bok = document.createElement('div');
        bok.style.width = w + 'px';
        bok.style.height = h + 'px';
        bok.className = "bok";

        const contactContent = document.createElement('div');
        contactContent.style.top = 0.2222222222222222 * h + 'px';
        contactContent.style.right = 0.0486111111111111 * w + 'px';
        contactContent.style.width = 0.4694444444444444 * w + 'px';
        contactContent.style.height = 0.5555555555555556 * h + 'px';
        contactContent.className = "contact-content";

        const winningimg = document.createElement('img');
        winningimg.src = winning;
        winningimg.style.width = 0.0694444444444444 * w + 'px';
        winningimg.style.height = 0.1234567901234568 * h + 'px';

        const maila = document.createElement('a');
        maila.href = "mailto:dkdn1004@naver.com";
        maila.className = "link";
        maila.innerText = "dkdn1004@naver.com";

        const seopa = document.createElement('a');
        seopa.href = "https://github.com/Seop-kor";
        seopa.className = "link";
        seopa.innerText = "Seop-kor";

        const canvasd = document.createElement('canvas');
        canvasd.id = "canvas";
        canvasd.style.width = 0.4694444444444444 * w + 'px';
        canvasd.style.height = 0.5555555555555556 * h + 'px';
        contactContent.appendChild(winningimg);
        contactContent.appendChild(maila);
        contactContent.appendChild(seopa);
        contactContent.appendChild(canvasd);
        bok.appendChild(contactContent);
        document.getElementsByClassName("contact-wrapper")[0].appendChild(bok);
        //캔버스 그리기 끝

        const link = document.getElementsByClassName("link");
        let link1rect = link[0].getBoundingClientRect();
        let link2rect = link[1].getBoundingClientRect();
        let link1 = {
            x: link1rect.left,
                xmax: link1rect.left + link1rect.width,
                y: link1rect.top, //이거 pageYoffset없애보기
                ymax: link1rect.top + link1rect.height
        };
        let link2 = {
            x: link2rect.left,
                xmax: link2rect.left + link2rect.width,
                y: link2rect.top,
                ymax: link2rect.top + link2rect.height
        };
        function canvasclickfunc(e) {
            if (mouseupFire) {
                const rect = canvas.getBoundingClientRect();
                const xpos = e.offsetX + rect.left;
                const ypos = e.offsetY + rect.top;
                if (link1.x <= xpos && xpos <= link1.xmax) {
                    if (link1.y <= ypos && ypos <= link1.ymax) {
                        link[0].click();
                    }
                }else if (link2.x <= xpos && xpos <= link2.xmax) {
                    if (link2.y <= ypos && ypos <= link2.ymax) {
                        link[1].click();
                    }
                }
            }
        }

        function reg(e) {
            link1rect = link[0].getBoundingClientRect();
            link2rect = link[1].getBoundingClientRect();
            link1 = {
                x: link1rect.left,
                xmax: link1rect.left + link1rect.width,
                y: link1rect.top, //이거 pageYoffset없애보기
                ymax: link1rect.top + link1rect.height
            }
            link2 = {
                x: link2rect.left,
                xmax: link2rect.left + link2rect.width,
                y: link2rect.top,
                ymax: link2rect.top + link2rect.height
            }
            canvas.removeEventListener('click', canvasclickfunc);
            canvas.addEventListener('click', canvasclickfunc);
        }
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');
        const img = new Image();
        img.src = gray;
        img.onload = function () {
            canvas.width = 0.4694444444444444 * w;
            canvas.height = 0.5555555555555556 * h;
            ctx.drawImage(img, 0, 0, 0.4694444444444444 * w, 0.5555555555555556 * h);
        };

        let isPress = false;
        let old = null;
        let mouseupFire = false;
        let starttime = 0;
        let endtime = 0;

        canvas.addEventListener('mousedown', function (e) {
            isPress = true;
            starttime = new Date().getTime();
            mouseupFire = false;
            old = { x: e.offsetX, y: e.offsetY };
        });
        canvas.addEventListener('mousemove', function (e) {
            if (isPress) {
                let x = e.offsetX;
                let y = e.offsetY;
                ctx.globalCompositeOperation = 'destination-out';
                ctx.beginPath();
                ctx.arc(x, y, 10, 0, 2 * Math.PI);
                ctx.fill();

                ctx.lineWidth = 20;
                ctx.beginPath();
                ctx.moveTo(old.x, old.y);
                ctx.lineTo(x, y);
                old = { x: x, y: y };
                ctx.stroke();
            }
        });
        canvas.addEventListener('mouseup', function (e) {
            isPress = false;
            endtime = new Date().getTime();
            if ((endtime - starttime) <= 200) {
                mouseupFire = true;
            }
        });

        canvas.addEventListener('click', canvasclickfunc);

        window.addEventListener('scroll', reg);
        return () => {
            window.removeEventListener('scroll', reg);
        };
    }, []);

    return (
        <>
            <div className="contact-container">
                <div className="contact-wrapper">
                    {/* <div className="bok">
                    <div className="contact-content">
                        <img src={winning} alt="winning"></img>
                        <a className="link" href="mailto:dkdn1004@naver.com">dkdn1004@naver.com</a>
                        <a className="link" href="https://github.com/Seop-kor">Seop-kor</a>
                        <canvas id="canvas"></canvas>
                    </div>
                </div> */}
                    <div className="media-wrapper">
                        <div id="commtitle">Communication</div>
                        <div className="contact-item">
                            <img src={mail} alt="mail" className="icon"></img>
                            <div className="shadow"></div>
                            <a className="link" href="mailto:dkdn1004@naver.com">dkdn1004@naver.com</a>
                        </div>
                        <div className="contact-item">
                            <img src={git} alt="git" className="icon"></img>
                            <div className="shadow"></div>
                            <a className="link" href="https://github.com/Seop-kor">Seop-kor</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;