const plus=document.querySelector(".plus"),output=document.querySelector(".in"),reset=document.querySelector(".reset"),one=document.querySelector(".one"),two=document.querySelector(".two")
const three=document.querySelector(".three")
const point=document.querySelector(".point")
const zero=document.querySelector(".zero")
const equal=document.querySelector(".equal")
const div=document.querySelector(".div")
const mul=document.querySelector(".mul")

plus.addEventListener("click",(e)=>{
    output.textContent +="+"
})
reset.addEventListener("click",(e)=>{
    output.textContent=""
})
one.addEventListener("click",(e)=>{
    output.textContent+="1"
})
two.addEventListener("click",(e)=>{
    output.textContent+="2"
})
equal.addEventListener("click",(e)=>{
    let out=eval(output.textContent)
    output.textContent=out
})
three.addEventListener("click",(e)=>{
    output.textContent +=3
})
zero.addEventListener("click",(e)=>{
    output.textContent+=0
})
mul.addEventListener("click",(e)=>{
    output.textContent += "*"
})
point.addEventListener("click",(e)=>{
    output.textContent +="."
})
div.addEventListener("click",(e)=>{
    output.textContent +="/"
})