let buttonTag = document.getElementById("btn");

let bulbTag = document.getElementById("bulb");

//  bulbTag.style.color = "yellow"

buttonTag.addEventListener("click", () => {
  //   bulbTag.style.color = "yellow";
  if (bulbTag.style.color == "yellow") {
    bulbTag.style.color = "black";
    bulbTag.style.textShadow =
      "0 0 20px yellow,0 0 40px yellow,0 0 60px yellow;";
    buttonTag.textContent = "Turn on";
  } else {
    bulbTag.style.color = "yellow";
    buttonTag.textContent = "Turn Off";
  }
});
