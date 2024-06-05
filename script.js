const gridContainer = document.querySelector(".grid-container");
items();


const button = document.querySelector("button");

button.addEventListener("click", promptInput);

function promptInput(){
   let rowNumber = +prompt("Enter the numbers of rows you want ");
   let colNumber = +prompt("Enter the numbers of columns you want ");

   gridContainer.innerHTML = "";

   if(colNumber > 99 || rowNumber > 99){
      items();
   } else {
      items(colNumber, rowNumber);
   }
   
}

function items(column = 16, row = 16){
   for(let i = 0; i < column; i++) {
      const rowElement = document.createElement("div");
      rowElement.classList.add("row");
      for(let j = 0; j < row; j++) {
         const divElement = document.createElement("div");
         divElement.classList.add("grid-item");
         rowElement.appendChild(divElement);
      }
      gridContainer.appendChild(rowElement);
   }
}


const divs = document.querySelectorAll(".grid-item");

divs.forEach((div) => {
   div.addEventListener("mouseover", () => {
      div.style.backgroundColor = "lightblue";
   });
   div.addEventListener("mouseout", () => {
      div.style.backgroundColor = "transparent";
   });
});

