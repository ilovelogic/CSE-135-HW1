const factArray = ["Both my parents earned their Ph.D.s at UCSD.", "I know a few Latin songs by heart.", "My favorite proof is the one for the infinitude of primes.", "I have eight siblings.", "I composed a love poem about mathematics at the age of fourteen.", "I was homeschooled."];

let factIndex = 0;

function newFact() {
    const div = document.getElementById("randFact");
    div.innerHTML = factArray[factIndex];
    factIndex = (factIndex + 1) % 6;

    let colVal = (factIndex * 6) % 5;

    if (colVal == 0) {
        div.style.color = pink;
    }
    else if (colVal == 1) {
        div.style.color = blue;
    }
    else if (colVal == 2) {
        div.style.color = purple;
    }
    else if (colVal == 3) {
        div.style.color = orange;
    }
    else {
        div.style.color = green;
    }
}