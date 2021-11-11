const tabs = document .getElementById("tabs");
const content = document.querySelectorAll(".content");
const tabs_dop=document.getElementById("tabs_dop");
const contents_dop=document.querySelectorAll('contents_dop')


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



const changeClassTwo =a=>{
    for (let i = 0; i < tabs_dop.children.length; i++){
tabs_dop.children[i].classList.remove('active');

    }
   a.classList.add("active");
}

tabs_dop.addEventListener("click", e=>{
    const currTabTwo = e.target.dataset.btn;
   changeClassTwo(e.target);
   
 for(let i = 0; i < content.length; i++){
    content[i].classList.remove("active");

    if(content [i].dataset.content === currTabTwo) {
        content [i].classList.add("active");
    }
}
})