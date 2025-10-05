//FORM

let name_x = "";
let name_y = "";
let form = document.querySelector("form")
let alertBox = document.querySelector("#alertMessage")

const successMsgs = [
  "Game on! The duel of legends is about to begin ⚔️",
  "Players locked in! Let’s see who rules the Xs and Os 🕹️",
  "Names set. Brace yourselves, the grid awaits! 🔥"
];

const failMsgs = [
  "Oops! Both heroes need a name before the adventure starts 🚫",
  "Can’t enter the arena nameless! Fill in those champs 📝",
  "Hold up! Players without names can’t fight 😜"
];


const handleFormSubmit = (e) => {
    e.preventDefault()
    let input_x = document.querySelector("#x").value;
    let input_y = document.querySelector("#y").value;
    name_x = input_x;
    name_y = input_y;

    alertBox.innerText="";

    if(name_x && name_y){

        alertBox.classList.remove("hidden")
        const p = document.createElement("p");
        p.style.color="#16a341"
        p.innerText =successMsgs[Math.floor(Math.random() * successMsgs.length)] 
        alertBox.appendChild(p);
        
        //Remove the Form and Allow Game
    } else{
        alertBox.classList.remove("hidden")
        const p = document.createElement("p");
        p.style.color="#dc2626"
        p.innerText = failMsgs[Math.floor(Math.random() * failMsgs.length)];
        alertBox.appendChild(p);
    }
    console.log(`X is ${name_x} and Y is ${name_y}`)
    
}