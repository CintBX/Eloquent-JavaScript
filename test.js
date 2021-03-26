/* OLD
<p style="text-align: center">
  <img src="img/cat.png" style="position: relative">
</p>
*/
let cat = document.querySelector("img");
let angle = Math.PI / 2;
  
function animate(time, lastTime) {
  if (lastTime != null) {
    angle += (time - lastTime) * 0.001;
  }
  cat.style.top = (Math.sin(angle) * 20) + "px";
  cat.style.left = (Math.cos(angle) * 200) + "px";
  requestAnimationFrame(newTime => animate(newTime, time));
}

requestAnimationFrame(animate);