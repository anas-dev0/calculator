const plus=document.querySelector(".bplus"),output=document.querySelector(".in"),reset=document.querySelector(".reset"),one=document.querySelector(".one"),two=document.querySelector(".two")
plus.addEventListener("click",(e)=>{
    output.textContent +="+"
})
reset.addEventListener("click",(e)=>{
    output.textContent=""
})
const nine=document.querySelector(".nine")
nine.addEventListener("click",(e)=>{
    output.textContent +="9"
})
const eight=document.querySelector(".eight")
eight.addEventListener("click",(e)=>{
    output.textContent +="8"
})
const seven=document.querySelector(".seven")
seven.addEventListener("click",(e)=>{
    output.textContent +="7"
})
const six=document.querySelector(".six")
six.addEventListener("click",(e)=>{
    output.textContent +="6"
})
console.log("six")


