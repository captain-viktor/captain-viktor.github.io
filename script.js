const industriesDiv = document.getElementById("industries")

// Function to play the sound
function playSound() {
    const audio = new Audio('assets/heavy-rain.wav');
    audio.play();
}

// Conditional statement example
function checkNumber(e) {
    const number = e.target.value
    if (number % 2 === 0) {
        document.getElementById("result").innerText = `${number} is even.`;
    } else {
        document.getElementById("result").innerText = `${number} is odd.`;
    }
    setTimeout(() => {
        if (e.target.value === '') {
            document.getElementById("result").innerText = ''
        }
    }, 1000);
}

// Function example
function greet(e) {
    const name = e.target.value
    document.getElementById("result").innerText = `Hello, ${name}! Welcome to our webpage.`;
    setTimeout(() => {
        if (e.target.value === '') {
            document.getElementById("result").innerText = ''
        }
    }, 1000);
}

// Arrays example
const industries = ["Iron and Steel",
    "Textiles",
    "Jute",
    "Sugar",
    "Cement",
    "Paper",
    "Petrochemicals",
    "Automobile",
    "Information Technology (IT)",
    "Banking & Insurance"];

// Looping through the array
for (let i = 0; i < industries.length; i++) {
    // Accessing array elements
    setTimeout(() => {
        const el = document.createElement("li")
        el.innerText = industries[i]
        industriesDiv.appendChild(el)
    }, i * 1000);
}
