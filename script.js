const plus=document.querySelector(".bplus"),output=document.querySelector(".in"),reset=document.querySelector(".reset"),one=document.querySelector(".one"),two=document.querySelector(".two")
plus.addEventListener("click",(e)=>{
    output.textContent +="+"
})
reset.addEventListener("click",(e)=>{
    output.textContent=""
})

