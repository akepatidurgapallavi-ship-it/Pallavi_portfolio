const mode=document.getElementById("mode");

mode.onclick=()=>{

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){

mode.innerHTML='<i class="fa-solid fa-sun"></i>';

}else{

mode.innerHTML='<i class="fa-solid fa-moon"></i>';

}

};

const topBtn=document.getElementById("top");

topBtn.onclick=()=>{

window.scrollTo({
top:0,
behavior:"smooth"
});

};
