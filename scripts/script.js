
const box = document.getElementById("box");
box.innerHTML = "proba";
box.style.width="100px";
box.style.height="100px";
box.style.backgroundColor="red";
box.style.border="1px solid grey"

box.addEventListener("click",()=>{
    if(box.style.backgroundColor==="yellow"){
        box.style.backgroundColor="red"
    }else if(box.style.backgroundColor==="red"){
        box.style.backgroundColor="yellow"
    }
})