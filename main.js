const tabs = document .getElementById("tabs");
const content = document.querySelectorAll(".content");

const changeClass=el=>{
    for (let i =0; i< tabs.children.length; i++){
        tabs.children[i].classList.remove("active");

    }
    el.classList.add("active");
}
tabs.addEventListener("click", e=>{
  const currTab = e.target.dataset.btn;
    changeClass(e.target);
    for(let i = 0; i < content.length; i++){
        content[i].classList.remove("active");
    
        if(content [i].dataset.content === currTab) {
            content [i].classList.add("active");
        }
    }
});

const tabsDop=document.getElementById("tabs_dop");
const contentsDop=document.querySelectorAll('.content-dop');

const changeClassTwo =el=>{
    for (let i = 0; i < tabsDop.children.length; i++){
tabsDop.children[i].classList.remove('active');

    }
   el.classList.add("active");
}

tabsDop.addEventListener("click", e=>{
    const currTab = e.target.dataset.btndop;
   changeClassTwo(e.target);
   
   
 for(let i = 0; i < contentsDop.length; i++){
    contentsDop[i].classList.remove("active");
    

    if(contentsDop[i].dataset.contentdop === currTab) {
        contentsDop[i].classList.add("active");
    }
}
})