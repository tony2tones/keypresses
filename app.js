


//object repo

const count = document.getElementById('#spanny');
const button = document.getElementById('show');
const input = document.getElementById('input');


// var myElement = document.getElementById("intro");

document.addEventListener('keydown', logKey);

function logKey(e) {
    count.textContent.bold = "toasty";
    // count += ` ${e.code}`;
    console.log(e);
}


console.log('test');
// i = 0;
// $(document).ready(function () {
//   $("#input1").keypress(function () {
//     $("#spany").text((i += 1));
//   });

// });

off = () => {
    console.log('the button has been hit')
}

main = () => {
    button.addEventListener("click", () => {
        off();
    })
}

main();