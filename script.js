
document.getElementById("add-food-btn").addEventListener("click", function() {
    const inputContainer= document.getElementById("input-container");
    const foodcount = inputContainer.children.length +1; 

    const foosgroup = document.createElement("div");
    foodGroup.classlist.add("input-group");

    const foodLabel = document.createElement("label");
    foodLabel.setAttribute("for", `food-${foodCount}`);
    foodLabel.textContent = `alimento ${foodCount}`);
    const foodInput = document.createElement("input");
    foodInput.setAttribute("type", "text");
    foodInput.setAttribute("id", `food-${foodCount}:`;
    foodInput.setAttribute("placeholder", "Nome do alimento");

    const quantilyLabel = document.createElement("label");
    quantilyLabel.setAttribute("for", `quantily-${foodCount}`);
    quantilyLabel.textContent = `Quantidade do alimento ${foodCount}:`;
    const quantilyInput = document.createElement("input");
    quantilyInput.setAttribute("type", "number");
    quantilyInput.setAttribute("id", `quantily-${foodCount}`);
    quantilyInput.setAttribute("placeholder", "Quantidade");

    foodGroup.appendChild(foodLabel);
    foodGroup.appendChild(foodInput);
    foodGroup.appendChild(quantilyLabel)
foodGroup.appendChild(quantilyInput);

inputContainer.appendChild(foodGroup);
});
