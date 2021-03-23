document.addEventListener("DOMContentLoaded", function(){
    const left_loader = document.getElementById("left-loader");
    const right_loader = document.getElementById("right-loader");
    left_loader.className = "loaded";
    right_loader.className = "loaded";
    

    //메뉴 클릭 부분
    //유사배열?
    const menu = document.getElementsByClassName("navigation_item");
    // const menu = document.querySelectorAll(".navigation_container .navigation_item");
    /*이거랑 위에랑 뭐가 다른거지?*/
    Array.from(menu).forEach(function(menuitem){
        menuitem.children[0].addEventListener("click", function(e){
            const active_tab = document.querySelectorAll(".navigation_container .active");
            active_tab[0].className = "navigation_item";
            menuitem.className = "navigation_item active";
        });
    });


    //위에 애니메이션 부분
    let textindex = 0;
    ani();

    function ani(){
        let i;
        const list = document.getElementsByClassName("slidetxt");
        for(i = 0; i < list.length; i++){
            list[i].style.display = "none";
        } //여기는 바꿀 수 있으면 바꿀것 map함수로 바꾸고 싶었는데 안됨.
        list[textindex++].style.display = "block";
        if(textindex >= list.length){
                textindex = 0;
        }
        setTimeout(ani, 3000);
    }
});
