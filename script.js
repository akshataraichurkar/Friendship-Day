function openGift() {

    // Hide the welcome screen
    document.getElementById("welcome").style.display = "none";

    // Show the main page
    document.getElementById("main").style.display = "block";

    // Confetti animation (only if library is loaded)
    if (typeof confetti === "function") {
        confetti({
            particleCount: 180,
            spread: 120,
            origin: { y: 0.6 }
        });
    }
}

function showMessage() {

    document.getElementById("message").innerHTML = `
    💖 Happy Friendship Day! 💖 <br><br>

    Dear Lyraa ❤️,<br><br>

    Thank you for being such an amazing friend.
    You have always been there for me through every smile,
    every laugh, and every difficult moment. 🌸<br><br>

    I truly feel lucky to have a friend like you.
    Our memories together are very special,
    and I hope our friendship lasts forever. 🫂💕<br><br>

    May your life always be filled with happiness,
    success, good health, and endless smiles. ✨<br><br>

    🌷 Happy Friendship Day! 🌷❤️
    `;
}
