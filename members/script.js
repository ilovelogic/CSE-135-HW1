const factArray = ["Both my parents earned their Ph.D.s at UCSD.", "I know a few Latin songs by heart.", "My favorite proof is the one for the infinitude of primes.", "I have eight siblings.", "I composed a love poem about mathematics at the age of fourteen.", "I was homeschooled."];
const colArray = ["pink", "green", "blue", "purple","orange"]
let factIndex = 0;

function newFact() {
    const div = document.getElementById("randFact");

    div.innerHTML = factArray[factIndex];
    factIndex = (factIndex + 1) % 6;

    let colIndex = (factIndex * 6) % 5;
    div.style.color = colArray[colIndex];
    div.style.color = "pink";

}