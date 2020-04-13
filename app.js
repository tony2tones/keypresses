//object repo

const KEYSTATUS = document.getElementById("demo");
const KEYDEMO = document.getElementById("demo1");
const KEYDOWN = document.getElementById("demo1");
const KEYPRESSSTATE = document.getElementById("demo2");
const KEYPRESS = document.getElementById("demo3");

function keyUp() {
  KEYSTATUS.innerHTML = "Key up";
  showCode(1);
}
function keyDown() {
  KEYSTATUS.innerHTML = "Key down";
  showCode(2);
}

function keyPress() {
  KEYPRESSSTATE.innerHTML = "Key press";
  setTimeout(function () {
    KEYPRESSSTATE.innerHTML = "";
  }, 2000);
  showCode(3);
}

function showCode(num) {
  console.log("log whatever");
  if (num === 1) {
    KEYDEMO.innerHTML = `document.addEventListener("keyup", keyUp) function keyUp() { KEYSTATUS.innerHTML = "Key up"; }`;
  }
  if (num === 2) {
    KEYDEMO.innerHTML = `document.addEventListener("keydown", keydown) function keyDown() { KEYSTATUS.innerHTML = "Key down"; }`;
  }
  if (num === 3) {
    KEYPRESS.innerHTML = `document.addEventListener("keypress", keyPress) function keyPress() { KEYSTATUS.innerHTML = "Key press"; }`;
    setTimeout(function () {
      KEYPRESS.innerHTML = "";
    }, 2000);
  }
}

main = () => {
  document.addEventListener("keyup", keyUp);
  document.addEventListener("keydown", keyDown);
  document.addEventListener("keypress", keyPress);
};

main();
