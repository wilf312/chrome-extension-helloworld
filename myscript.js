'use strict';



chrome.browserAction.onClicked.addListener(()=>{
  chrome.tabs.executeScript(null,{
    "code" : "document.body.style.backgroundColor='red'"
  });
});
//
//for(let cnt= 0,len=target.length; cnt<len;cnt++) {
//  let color = target[cnt];
//
//  document.getElementById(color).onclick = ()=> {
//    console.log('click');
//    changeColor(color);
//  };
//
//}
//
//
