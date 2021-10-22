import "./styles.css";

console.clear();

// Задание№1
const task1 = function () {
  const btn = document.querySelector("button");
  const exp = 2;
  let number = 10;
  btn.addEventListener("click", () => {
    try {
      number = Math.pow(number, exp);
      if (number < 4294967295) {
        new Array(number);
        console.log(number);
      }
    } catch (e) {
      console.log("массив слишком большго размера");
    }
    // finally {
    //   console.log("finish");
    // }
  });
};
// Задание№2
const task2 = function () {
  const inp = document.querySelector("input");
  inp.addEventListener("change", () => {
    const text = inp.value;
    setTimeout(() => {
      // console.log("timeout", text);
      alert(text);
    }, 5000);
  });
};
// Задание№3
const task3 = function () {
  const inp = document.querySelector("input");

  inp.addEventListener("change", function () {
    let text = inp.value;

    if (text.length >= 10) {
      console.log(`отлично ${text}`);
    } else {
      setTimeout(() => {
        console.log("слишком мало букв");
      }, 5000);
    }
  });
};
// Задание№4
const task4 = function () {
  const btn = document.querySelector("button");
  let counter = 0;

  btn.addEventListener("click", () => {
    const newInterval = setInterval(() => {
      counter++;
      if (counter > 10) {
        clearInterval(newInterval);
      }
      console.log("Прошло " + counter + " секунд");
    }, 1000);
  });
};

task1();
// task2();
// task3();
// task4();