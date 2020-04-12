//object repo

const KEYSTATUS = document.getElementById("demo");
const KEYDEMO = document.getElementById("demo1");
const KEYDOWN = document.getElementById("demo1");
const button = document.getElementById("#show");
const input = document.getElementById("#input");
document.querySelector(".result-lose > p");

function keyUp() {
  KEYSTATUS.innerHTML = "Key up";
  showCode();
}
function keyDown() {
  KEYSTATUS.innerHTML = "Key down";
}

function showCode() {
    console.log('log whatever')
}

main = () => {
  document.addEventListener("keyup", keyUp);
  document.addEventListener("keydown", keyDown);
};

main();
