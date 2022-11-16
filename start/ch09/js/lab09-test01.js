/* add code after this comment */

document.getElementById('thumb-list').style.border='1px solid purple';

let ptext= document.querySelector('p').textContent;
let textArea = document.querySelector('textarea');
textArea.value=ptext;

let imgs = document.querySelectorAll('img');
for(let img of imgs) {
    img.style.boxShadow="0px 0px 20px 4px purple";
   
console.log(img)}