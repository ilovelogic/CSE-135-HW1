const factArray = ["My favorite proof is the one for the infinitude of primes.", "I have eight siblings.", "Both my parents earned their Ph.D.s are UCSD.", "I know a few Latin songs by heart.", "I was homeschooled."];
let cur_index = 0

function newFact() {
    const div = document.getElementById("randFact");
    div.innerHTML = factArray[cur_index];
    cur_index = (cur_index + 1) % 5;
}