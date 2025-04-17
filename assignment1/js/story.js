let storyElement = document.getElementById("story");

// Monster in the Attic Story with template literals

let mainCharacter = "Sally"
let monster = "a giant spider"
let place = "the attic"
let action = "scream"
let reaction = "fight the monster with a broom"
let ending = "find a way to escape."




mainCharacter = "Tommy"

let number1 = 5;


let story = `One day, ${mainCharacter} went to ${place} and found ${monster}.
It was very scary! ${mainCharacter} wanted to ${action}, but instead, ${mainCharacter} decided to ${reaction}. In the end, ${mainCharacter} managed to ${ending}`;

//concatenatation
// let story2 = "One day, " + mainCharacter + " went to " + place + " and found " + monster + ". It was very scary! " + mainCharacter + " wanted to " + action + ", but instead, " + mainCharacter + " decided to " + reaction + ". In the end, " + mainCharacter + " managed to " + ending;

storyElement.innerHTML = story;