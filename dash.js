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

p.innerText = name_x && name_y 
  ? successMsgs[Math.floor(Math.random() * successMsgs.length)] 
  : failMsgs[Math.floor(Math.random() * failMsgs.length)];