//object repo

const KEYSTATUS = document.getElementById("demo");
const KEYDEMO = document.getElementById("demo1");
const KEYDOWN = document.getElementById("demo1");
const button = document.getElementById("#show");
const input = document.getElementById("#input");
document.querySelector(".result-lose > p");

function keyUp() {
  KEYSTATUS.innerHTML = "Key up";
  showCode(1);
}
function keyDown() {
  KEYSTATUS.innerHTML = "Key down";
  showCode(2)
}

function showCode(num) {
  console.log("log whatever");
  if (num === 1) {
    KEYDEMO.innerHTML = `document.addEventListener("keyup", keyUp)`;
  }
  if (num === 2) {
    KEYDEMO.innerHTML = `document.addEventListener("keydown", keydown)`;
  }
}

main = () => {
  document.addEventListener("keyup", keyUp);
  document.addEventListener("keydown", keyDown);
};

main();
