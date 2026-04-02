let images = [
    "photo9.jpg",
    "photo2.jpg",
    "photo3.jpg",
    "photo4.jpg",
    "photo5.jpg",
    "photo7.jpg",
    "photo8.jpg"
];

let captions = [
    "Our beautiful moment 💖",
    "The day we took photo as a cute couple💕",
    "Your smile = my happiness 😘",
    "Every moment with you is magic ✨",
    "You + Me = Forever ❤️",
    "My favorite place is with you 💞",
    "Your are mine😘💞"
];

let i = 0;

function nextMemory() {
    i++;

    if (i < images.length) {
    document.getElementById("memoryImg").src = images[i];
    document.getElementById("caption").innerText = captions[i];

    // change button text when last image comes
    if (i === images.length - 1) {
        document.querySelector("button").innerText ="Stay With Me Forever 💖";
    }

} else {
    window.location.href = "page5.html";
}
}