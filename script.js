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

const bodyFont = document.querySelector('.hero');
console.log(bodyFont);

const buttonPlus = document.querySelector('.button-plus');
console.log(buttonPlus);

const buttonMoins = document.querySelector('.button-moins');
console.log(buttonMoins);

var t;			
	t = 1;

	function changerTaille(modif) {
		t = t + modif;
		document.getElementsByTagName("body")[0].style.fontSize = t + "em";		
	} 	
  
buttonPlus.addEventListener('click', function(){
  bodyFont.style.fontSize = "0.5rem" ; 
});

