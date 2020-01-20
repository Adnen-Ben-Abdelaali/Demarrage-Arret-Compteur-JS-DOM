/*

let i = setInterval(function(){
  console.log('tache1');
},2000)

let j = setInterval(function(){
  console.log('tache2');
},3000)

setTimeout(function(){console.log('une seule fois')},5000);

*/

const startCounter = document.getElementsByClassName('buttonStyle')[0];
const stopCounter = document.getElementsByClassName('buttonStyle')[1];
let paragraph = document.getElementsByTagName('p')[0];
let interval = 0;
let startStopInterval;

startCounter.addEventListener("click", function() {
  startStopInterval = setInterval(function() {
    paragraph.innerHTML = interval;
    interval++;
  }, 1000);
});

stopCounter.addEventListener("click", function() {
  clearInterval(startStopInterval);
});
