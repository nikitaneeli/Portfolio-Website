/* ties new variable to the #square div */
let sq = document.querySelector("#square");

/* changes color to something brighter */
function changeCSS() {
  sq.style.backgroundColor = "red";
  sq.style.borderRadius = "90%";
  sq.style.left = "200px";
  sq.style.top = "100px";
  sq.style.width = "300px";
  sq.style.height = "300px";
  sq.style.boxShadow = "10px 10px 20px rgba(0,0,0,0.5)";
}
