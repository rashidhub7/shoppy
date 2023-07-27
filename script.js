// Script for navigation bar

const bar=document.getElementById("bar");
const nav=document.getElementById("nav");

if(bar){
    bar.addEventListener("click",()=>{
        nav.classList.add("active");
    })
}