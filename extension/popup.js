document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM completamente carregado e analisado");

  document.querySelector('#button').addEventListener('click', ()=>{
    chrome.tabs.executeScript({
      file: 'script.js'
    });
  });
});


