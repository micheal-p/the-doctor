const textElement = document.getElementById('typing-text');
const text = "We’ve developed and trained a knowledge-based model called Assistant Doctor which interacts in a conversational way. The dialogue format makes it possible for Assistant Doctor to answer followup questions, admit its mistakes, challenge incorrect premises, and reject inappropriate requests.";
let charIndex = 0;

function typeText() {
    if (charIndex < text.length) {
        textElement.textContent += text.charAt(charIndex);
        charIndex++;
    }
}

// Call the typeText function at a set interval (e.g., every 50 milliseconds)
const typingInterval = setInterval(typeText, 50);

// Stop the interval when the entire text has been typed
if (charIndex === text.length) {
    clearInterval(typingInterval);
}
