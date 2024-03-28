const switchBox = document.querySelector('.switch');
console.log(switchBox);

const btn = document.querySelector('.btn');
console.log(btn);


const icone = document.querySelector('i');
console.log(icone);

const container = document.querySelector('.container');
console.log(container);

const title = document.querySelector('h1');
console.log(title);


switchBox.addEventListener('click', function(){
  //console.log("div cliqué");

btn.classList.toggle('btn-change');
icone.classList.toggle('icone-change');
icone.classList.toggle('fa-sun');
icone.classList.toggle('fa-moon');
container.classList.toggle('container-change');
switchBox.classList.toggle('switch-change');
if(title.innerText === "LIGHT MODE") {
  title.innerText = "DARK MODE";
  title.style.color = "white";
} else {
  title.innerText = "LIGHT MODE";
  title.style.color = "black";
}

});




let size = 2

btnPlus.addEventListener('click', ()=>{
  console.log("plus");

  
  if( size >= 7){
      title.style.fontSize = '7rem';
    }else{
        // on incrémente
        size = size + 1;
        title.style.fontSize = `${size}rem`;
  }
})




btnMinus.addEventListener("click", () => {
  console.log("moins");

  // on décrémente
  size = size - 1;
  title.style.fontSize = `${size}rem`; 
});