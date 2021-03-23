function Projectf() {
    const txt = [
        `전공동아리 O.N.E.의 활동을 자유롭게 하기 위해 홈페이지를 제작했다<br>
        특징들은 사진과 같다.`,
        `<h4>
        Modal을 이용한 입부 신청서
        </h4>
        신청서를 종이로 받는 불편함을 해소하기 위한 기능으로<br>
        동아리의 부장들이 확인 할 수 있도록 만들어준다.`, 
        `<h4>
        ID중복 검사와 비밀번호 검사를 이용한 회원가입
        </h4>
        서버에 있는 데이터베이스를 참조하여 ID중복 검사와 비밀번호 검사를 이용해 회원가입을 구현했다.`,
        `<h4>
        동아리 일정 등록 기능
        </h4>
        동아리의 세미나, 회식, 회의 등등 부원들이 알아야 할 일정들을 등록 가능하다.`,
        `<h4>
        JPA를 이용한 합격 불합격 기능
        </h4>
        사용자 페이지에서 지원자가 작성한 입부 지원서를 검토하고 합격여부를 결정할 수 있는 기능입니다.<br>
        합격을 누르면 회원정보와 아이디들이 DB에 계속 저장이 되지만 불합격 됐을시 탈퇴가 되는 방식입니다.`,
        `<h4>
        메일과 jwt토큰을 이용한 비밀번호 찾기 기능
        </h4>
        DB에 존재하는 아이디를 입력하면 토큰을 포함한 주소를 생성해 이메일로 보낸다.<br>
        주소를 클릭해 입장하게 되면 비밀번호 변경 페이지로 연결된다.`
    ];
    const container = document.getElementById("project_wrapper");
    const project_item = document.getElementsByClassName("project_item");
    const modal = document.getElementsByClassName("modal-wrapper");
    const one_modal = document.getElementsByClassName("one-modal-wrapper");
    const closetext = document.getElementsByClassName("modal-close");
    const closebtn = document.getElementsByClassName("modal-close-btn");
    const grid = document.getElementsByClassName("one-modal-content-grid");
    const detail = document.getElementsByClassName("one-modal-content-detail");

    project_item[0].addEventListener('click', () => {
        one_modal[0].style.display = "flex";
        grid[0].style.display = "grid";
        detail[0].style.display = "none";
        container.className += "modalview";
    });

    project_item[1].addEventListener('click', () => {
        modal[0].style.display = "flex";
        grid[0].style.display = "grid";
        detail[0].style.display = "none";
        container.className += "modalview";
    });

    window.onclick = (e) => {
        if (e.target === modal[0]) {
            modal[0].style.display = "none";
            container.className = "";
        }

        if (e.target === one_modal[0]) {
            one_modal[0].style.display = "none";
            container.className = "";
        }
    }

    closetext[0].addEventListener('click', () => {
        modal[0].style.display = "none";
        container.className = "";
    });

    closetext[1].addEventListener('click', () => {
        one_modal[0].style.display = "none";
        container.className = "";
    });

    closebtn[0].addEventListener('click', () => {
        modal[0].style.display = "none";
        container.className = "";
    });

    closebtn[1].addEventListener('click', () => {
        one_modal[0].style.display = "none";
        container.className = "";
    });

    Array.from(grid[0].childNodes).forEach((griditem, index) => {
        griditem.addEventListener('click', (e) => {
            detail[0].style.display = "flex";
            detail[0].childNodes[0].setAttribute("src", e.target.getAttribute("src"));
            detail[0].childNodes[1].innerHTML = txt[index];
            grid[0].style.display = "none";
        });
    });
}

export default Projectf;