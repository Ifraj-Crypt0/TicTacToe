//FORM

let name_x = "";
let name_y = "";
let form = document.querySelector("form")
let alertBox = document.querySelector("#alertMessage")


const handleFormSubmit = (e) => {
    e.preventDefault()
    let input_x = document.querySelector("#x").value;
    let input_y = document.querySelector("#y").value;
    name_x = input_x;
    name_y = input_y;
    if(name_x && name_y){

        alertBox.classList.remove("hidden")
        const p = document.createElement("p");
        p.style.color="#16a341"
        p.innerText = "Names set. Brace yourselves, let’s see who rules the Xs and Os 🕹️";
        alertBox.appendChild(p);
        
        //Remove the Form and Allow Game
    } else{
        alertBox.classList.remove("hidden")
        const p = document.createElement("p");
        p.style.color="#dc2626"
        p.innerText = "Oops! Both heroes need a name before the adventure starts 🚫";
        alertBox.appendChild(p);
    }
    console.log(`X is ${name_x} and Y is ${name_y}`)
    
}