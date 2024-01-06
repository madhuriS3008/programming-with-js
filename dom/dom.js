let h1 = document.querySelector("#heading");
let input = document.querySelector("input");
console.log(input);
console.log(h1);

function changeHandler(e) {
  console.log(e);
}

input.addEventListener("keyup", (e) => {
  console.log(e.target.value);
  h1.innerText = e.target.value;
});
