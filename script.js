let firsts = document.querySelectorAll(".first");
let seconds = document.querySelectorAll(".second");
let container = document.querySelector(".container");
let boxes = document.querySelectorAll(".box");
let number = document.querySelector(".number");
let btn = document.querySelector(".btn");

// FUNCTIONSSSS

function numbers(item) {
  let item1 = Math.floor(Math.random() * 9);
  let item2 = Math.floor(Math.random() * 9);
  let item3 = Math.floor(Math.random() * 9);
  let item4 = Math.floor(Math.random() * 9);

  seconds[item1].innerText = "BIKE";
  seconds[item2].innerText = "WASHING";
  seconds[item3].innerText = "CAR";
  seconds[item4].innerText = "DUBAI";

  seconds[item1].style.color = "green";
  seconds[item2].style.color = "green";
  seconds[item3].style.color = "green";
  seconds[item4].style.color = "green";
}

function rest() {
  boxes.forEach(function (box) {
    box.addEventListener("click", function (e) {
      if (i < 3) {
        number.textContent = 2 - i;
        e.currentTarget.firstElementChild.classList.add("hidden");
        e.currentTarget.firstElementChild.nextElementSibling.classList.remove(
          "hidden"
        );

        i++;
      }
    });
  });
}
// CODESSSSSS

let i = 0;

firsts.forEach(function (first) {
  let num = Math.floor(Math.random() * 101);
  first.innerText = num;
});
seconds.forEach(function (second) {
  second.innerText = "Try Again";
});

numbers();
/*
seconds[num1].style.color = "green";
seconds[num2].style.color = "green";
seconds[num3].style.color = "green";
seconds[num4].style.color = "green";
*/

rest();

btn.addEventListener("click", function (e) {
  // Added entire script again with a few minor changes
  // WHY REST() IS NOT WORKING IN THIS FUNCTION?????

  number.textContent = 3;
  let i = 0;
  firsts.forEach(function (first) {
    let num = Math.floor(Math.random() * 101);
    first.innerText = num;
    first.classList.remove("hidden");
  });
  seconds.forEach(function (second) {
    second.innerText = "Try Again";
    second.classList.add("hidden");
    second.style.color = "#780100";
  });

  numbers();
  boxes.forEach(function (box) {
    box.addEventListener("click", function (e) {
      if (i < 3) {
        number.textContent = 2 - i;
        e.currentTarget.firstElementChild.classList.add("hidden");
        e.currentTarget.firstElementChild.nextElementSibling.classList.remove(
          "hidden"
        );

        i++;
      }
    });
  });

  btn.textContent = "Play Again?";
});

/*
These nums go inside the seconds so I can use them in the wins step.

let num1 = Math.floor(Math.random() * 9);
let num2 = Math.floor(Math.random() * 9);
let num3 = Math.floor(Math.random() * 9);
let num4 = Math.floor(Math.random() * 9);




let win1 = document.querySelector(".win1");
let win2 = document.querySelector(".win2");
let win3 = document.querySelector(".win3");
let win4 = document.querySelector(".win4");

if (num1 !== num3 && num1 !== num2 && num1 !== num4) {
  win1.textContent = "A " + seconds[num1].innerText;
}

if (num2 !== num1 && num2 !== num3 && num2 !== num4) {
  win2.textContent = "A " + seconds[num2].innerText;
} else if (num2 === num1) {
  win2.textContent = "A " + seconds[num2].innerText;
}

if (num3 !== num1 && num3 !== num2 && num3 !== num4) {
  win3.textContent = "A " + seconds[num3].innerText;
} else if (num3 === num1 || num3 === num2) {
  win3.textContent = "A " + seconds[num3].innerText;
}

win4.textContent = "A " + seconds[num4].innerText;



boxes.forEach(function (box) {
  box.addEventListener("click", function (e) {
    if (i < 3) {
      number.textContent = 2 - i;
      e.currentTarget.firstElementChild.classList.add("hidden");
      e.currentTarget.firstElementChild.nextElementSibling.classList.remove(
        "hidden"
      );

      i++;
    }
  });
});
*/
