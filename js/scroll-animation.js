content=document.querySelector('#container-2');
var count=0;
function Animation(){
    if(window.scrollY > 100){
        content.classList.add("putAnima");
        count++;
    }
    else{
        content.classList.remove("putAnima");
        }
}


window.addEventListener('scroll', Animation);