const factArray = ["Both my parents earned their Ph.D.s at UCSD.", "I know a few Latin songs by heart.", "My favorite proof is the one for the infinitude of primes.", "I have eight siblings.", "I composed a love poem about mathematics at the age of fourteen.", "I was homeschooled."];

let factIndex = 0;

function newFact() {
    const div = document.getElementById("randFact");
    div.innerHTML = factArray[factIndex];
    factIndex = (factIndex + 1) % 6;

    let colVal = (factIndex * 6) % 5;

    switch(colVal) {
        case 0:
            div.style.color = pink;
            break;
        case 1:
            div.style.color = blue;
            break;
        case 2:
            div.style.color = purple;
            break;
        case 3:
            div.style.color = orange;
            break;
        case 4:
            div.style.color = green;
            break;
    }
}