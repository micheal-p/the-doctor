const textElement = document.getElementById('typing-text');
const text = "We’ve developed and trained a knowledge-based model called Assistant Doctor which interacts in a conversational way. The dialogue format makes it possible for Assistant Doctor to answer followup questions, admit its mistakes, challenge incorrect premises, and reject inappropriate requests.";

function printText() {
    textElement.textContent = text; // Print the entire text immediately
}

// Check the screen width and use media queries to determine the behavior
if (window.innerWidth <= 375) {
    // Print the entire text immediately for iPhone 6/7/8
    printText();
} else if (window.innerWidth <= 414) {
    // Print the entire text immediately for iPhone 6/7/8 Plus
    printText();
} else if (window.innerWidth <= 375 && window.innerHeight >= 812) {
    // Print the entire text immediately for iPhone X/XS/11 Pro
    printText();
} else if (window.innerWidth <= 414 && window.innerHeight >= 736) {
    // Print the entire text immediately for iPhone 6/7/8 Plus in landscape mode
    printText();
} else if (window.innerWidth <= 390) {
    // Print the entire text immediately for iPhone 12 Mini
    printText();
} else {
    // Use typing animation for larger screens (e.g., desktop)
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
}
