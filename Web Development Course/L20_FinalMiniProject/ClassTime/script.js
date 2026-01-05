// const form = document.getElementById("todoForm");
// const input = document.getElementById("inputText");
// const list = document.getElementById("listParent");
// const remAllBtn = document.getElementById("remAllBtn");
// const remSingleBtn = document.getElementById("remSingleBtn");

// form.addEventListener("submit", function (event) {
//   // event.preventDefault();

//   const value = input.value.trim();
//   if (value === "") return;

//   const li = document.createElement("li");
//   li.textContent = value;

//   list.appendChild(li);
//   input.value = "";
// });

// remAllBtn.addEventListener("click", function () {
//   list.innerHTML = "";
// });

// remSingleBtn.addEventListener("click", function () {
//   if (list.firstElementChild) {
//     list.removeChild(list.firstElementChild);
//   }
// });

// selected all elements
let form = document.getElementById("todoForm");
let input = document.getElementById("inputText");
let remAllBtn = document.getElementById("remAllBtn");
let remSingleBtn = document.getElementById("remSingleBtn");
let listParent = document.getElementById("listParent");

form.addEventListener("submit", function (event) {
  // stop the default page loading
  event.preventDefault();

  // take data from input
  let text = input.value;
  text = text.trim()
  // condition for checking if the string is empty
  if (text.trim() == "") return;

  // create a child node and put data
  let listItem = document.createElement("li");
  listItem.textContent = text;
  // append in parent
  listParent.appendChild(listItem);

  // clearing the text area
  input.value = "";
});

// clear all list data
remAllBtn.addEventListener("click", function () {
  listParent.innerHTML = "";
});

// remove single element
remSingleBtn.addEventListener("click", function () {
  listParent.removeChild(listParent.firstChild);
});


