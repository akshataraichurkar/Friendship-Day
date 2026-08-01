function openGift() {
    alert("Button clicked!");

    document.getElementById("welcome").style.display = "none";
    document.getElementById("main").style.display = "block";

    confetti({
        particleCount:180,
        spread:120,
        origin:{y:0.6}
    });
}
function showMessage() {

    document.getElementById("message").innerHTML =
    `💖 Happy Friendship Day! 💖<br><br>
    Dear Bestie,<br><br>

    Thank you for being such an amazing friend. ❤️<br><br>

    Every laugh, every memory, every conversation and every moment with you is truly special to me. 🌸<br><br>

    No matter where life takes us, I hope we always stay friends forever. 🫂💕<br><br>

    Wishing you lots of happiness, success, good health and endless smiles. ✨<br><br>

    Happy Friendship Day! 🌷❤️`;
}
