let frame = document.getElementById("frame");
let mix = document.getElementById("mix");
let origin = document.getElementById("origin");
let range = document.querySelector('input')

mix.onclick = function () {
  let red = Math.ceil(Math.random() * 255);
  let blue = Math.ceil(Math.random() * 255);
  let green = Math.ceil(Math.random() * 255);
  frame.style.backgroundColor = "rgb(" + red + "," + blue + "," + green + ")";
};
origin.onclick = function () {
  frame.style.backgroundColor = "black";
};
range.oninput=function(){

   frame.style.opacity = range.value; 
};



let tap=document.getElementById('tap');
let task=document.getElementById('task');
let paragraph=document.getElementById('paragraph')
let lists=document.getElementById('lists')
let ul=document.getElementById('ul')


tap.onclick=function(){
    task.value=task.value.split('').reverse('').join('');
    
}


let lastinput = document.getElementById('lastinput');
let create = document.getElementById('create');
let endlists = document.getElementById('endlists');

create.onclick = function() {
    if(lastinput.value) {
        endlists.innerHTML += "<li>" + lastinput.value + "</li>";
        lastinput.value = '';
        endlists.style.color='brown'
        endlists.style.fontSize='20px'
        endlists.style.flex='column'
    }
}

 

    
