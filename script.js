const bar=document.getElementById('bar');
console.log(bar)
const close=document.getElementById('close');
const nav=document.querySelector('.navbar');

if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
    })
} 

if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active');
    })
} 
