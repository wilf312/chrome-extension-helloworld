'use strict';

var target = [
    "red",
    "yellow",
];


let changeColor = (color) => {
  chrome.tabs.executeScript(null,{
    "code" : "document.body.style.backgroundColor='"+ color +"'"
  }, ()=>{
    console.log("finish");
  });

}

for(let cnt= 0,len=target.length; cnt<len;cnt++) {
  let color = target[cnt];

  document.getElementById(color).onclick = ()=> {
    console.log('click');
    changeColor(color);
  };

}


