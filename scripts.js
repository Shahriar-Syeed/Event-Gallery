// const rectangle = document.querySelectorAll(".rectangle");
const filterItem = document.querySelectorAll(".filter-item")

// Function to determine the mouse entry side
function determineEntrySide(rect, mouseX, mouseY) {
  const { top, left, width, height } = rect;

  const topDistance = mouseY - top;
  const bottomDistance = top + height - mouseY;
  const leftDistance = mouseX - left;
  const rightDistance = left + width - mouseX;

  const minDistance = Math.min(topDistance, bottomDistance, leftDistance, rightDistance);

  if (minDistance === topDistance) {
    return "top";
  } else if (minDistance === bottomDistance) {
    return "bottom";
  } else if (minDistance === leftDistance) {
    return "left";
  } else {
    return "right";
  }
}

// Handle mouse enter
filterItem.forEach((Item) => Item.addEventListener("mouseenter", (event) => {
  
  const entrySide = determineEntrySide(Item.getBoundingClientRect(), event.clientX, event.clientY);
  console.log(event);
  Item.classList.remove("out-top", "out-bottom", "out-left", "out-right");
  Item.classList.add(`in-${entrySide}`);
}));

// Handle mouse leave
filterItem.forEach((Item) => Item.addEventListener("mouseleave", (event) => {
  const exitSide = determineEntrySide(Item.getBoundingClientRect(), event.clientX, event.clientY);
  
  Item.classList.remove("in-top", "in-bottom", "in-left", "in-right");
  Item.classList.add(`out-${exitSide}`);
}));


let transformToObjects = (array) => array.map((number) => ({ val: number }));


const myArray = [1, 2, 3];
console.log(transformToObjects(myArray));
const myLink = document.getElementById('mylinks');
console.log(myLink.textContent);
console.log(myLink.innerHTML);
console.log(myLink.innerText);