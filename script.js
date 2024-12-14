

const plus=document.querySelector(".plus"),output=document.querySelector(".in"),reset=document.querySelector(".reset"),one=document.querySelector(".one"),two=document.querySelector(".two")
const three=document.querySelector(".three")
const point=document.querySelector(".point")
const zero=document.querySelector(".zero")
const equal=document.querySelector(".equal")
const div=document.querySelector(".div")
const mul=document.querySelector(".mul")
const nine=document.querySelector(".nine")
const eight=document.querySelector(".eight")
const seven=document.querySelector(".seven")
const five=document.querySelector(".five")
const four=document.querySelector(".four")
const minus=document.querySelector(".minus")
const six=document.querySelector(".six")


mul.addEventListener("click",(e)=>{
    output.textContent+="*"
})
zero.addEventListener("click",(e)=>{
    output.textContent+="0"
})
point.addEventListener("click",(e)=>{
    output.textContent+="."
})
five.addEventListener("click",(e)=>{
    output.textContent+="5"
})
div.addEventListener("click",(e)=>{
    output.textContent+="/"
})
four.addEventListener("click",(e)=>{
    output.textContent+="4"
})
minus.addEventListener("click",(e)=>{
    output.textContent+="-"
})
one.addEventListener("click",(e)=>{
    output.textContent+="1"
})
two.addEventListener("click",(e)=>{
    output.textContent+="2"
})
equal.addEventListener("click",(e)=>{
    output.textContent=eval(output.textContent)
   
    
})
plus.addEventListener("click",(e)=>{
    output.textContent +="+"
})
reset.addEventListener("click",(e)=>{
    output.textContent=""
})

nine.addEventListener("click",(e)=>{
    output.textContent +="9"
})

eight.addEventListener("click",(e)=>{
    output.textContent +="8"
})

seven.addEventListener("click",(e)=>{
    output.textContent +="7"
})

six.addEventListener("click",(e)=>{
    output.textContent +="6"
})



