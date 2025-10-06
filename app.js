//FORM

let name_x = "";
let name_y = "";
let form = document.querySelector("form")
let alertBox = document.querySelector("#alertMessage")
let gameContainer = document.querySelector("#game")

let x_stat = document.querySelector("#x_stat");
let d_stat = document.querySelector("#d_stat");
let o_stat = document.querySelector("#o_stat");



let gameJS = false;


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


  alertBox.innerText = "";

  if (name_x && name_y) {

    alertBox.classList.remove("hidden")
    const p = document.createElement("p");
    p.style.color = "#16a341"
    p.innerText = successMsgs[Math.floor(Math.random() * successMsgs.length)]
    alertBox.appendChild(p);
    gameJS = true;
    //form animating out
    setTimeout(() => {
      form.classList.add("translate-y-[50px]", "opacity-0");
      setTimeout(() => {
        form.remove()
      }, 1000);
    }, 1000);

    // game animating in
    setTimeout(() => {
      gameContainer.classList.remove("hidden");
      setTimeout(() => {
        gameContainer.classList.remove("opacity-0");

        //GAME HEADERS
        let countX = 0;
        let countD = 0;
        let countO = 0;

        x_stat.innerHTML = `<span class="font-bold capitalize text-lg">${name_x} (X)</span><br>Victories: ${countX}`;
        d_stat.innerHTML = `<span class="font-bold capitalize text-lg">Draws</span><br>${countD}`;
        o_stat.innerHTML = `<span class="font-bold capitalize text-lg">${name_y} (O)</span><br>Victories: ${countO}`;

        initGameLogic(name_x, name_y)

      }, 50);
    }, 2000);


  } else {
    alertBox.classList.remove("hidden")
    const p = document.createElement("p");
    p.style.color = "#dc2626"
    p.innerText = failMsgs[Math.floor(Math.random() * failMsgs.length)];
    alertBox.appendChild(p);
  }
  console.log(`X is ${name_x} and Y is ${name_y}`)

}

//GAME

const gameBtn = document.querySelectorAll(".game-btn");

let winningPatterns = [

  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],


  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],


  [0, 4, 8],
  [2, 4, 6]
];

const checkWinner = () => {
  for (const winningPattern of winningPatterns) {
    const [a, b, c] = winningPattern
    const valA = gameBtn[a].innerText;
    const valB = gameBtn[b].innerText;
    const valC = gameBtn[c].innerText;
    console.log(a, b, c)
    if (valA !== "" && valB === valA && valB === valC) {
      return valA;
    }

  }
  return null;
}



const initGameLogic = (playerX, playerY) => {

  let turnX = true;

  gameBtn.forEach(btn => {
    btn.addEventListener("click", () => {


      if (btn.innerText !== "") return

      let showTurn = document.querySelector("#showTurn");
      showTurn.innerText = "";
      const p = document.createElement("p")
      p.innerText = turnX
        ? `${name_x}'s turn (X)`
        : `${name_y}'s turn (O)`;
      showTurn.append(p)

      if (turnX) {
        btn.innerText = "X"
      } else {
        btn.innerText = "O"
      }
      turnX = !turnX;
      let winner = checkWinner();

      if (winner.innerText === "X") {
        x_wins++;
        setTimeout(() => {
          alert(`${playerX} wins`)
        }, 500);
      } else if (winner.innerText = "Y") {
        y_wins++;
        setTimeout(() => {
          alert(`${playerY} wins`)
        }, 500);
      } else {
        countD++;
        setTimeout(() => {
          alert(`Its a Draw`)
        }, 500);
      }

    })

  })

  console.log(gameBtn)
}





const reset = () => {
  gameBtn.forEach(btn => {
    btn.innerText = "";
  })
}