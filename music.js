// Playlist de músicas
const playlist = [
    "musics/blue-yung-kai.mp3",
    "musics/hey-lover.mp3"
];

let currentTrack = parseInt(localStorage.getItem("currentTrack")) || 0;

const player = new Audio();
player.src = playlist[currentTrack];
player.loop = false; // desativa loop para passar para a próxima música
player.volume = 0.4;

// Recupera a posição da música atual
const savedTime = localStorage.getItem("musicTime");
if (savedTime) {
    player.currentTime = parseFloat(savedTime);
}

// Quando uma música terminar, toca a próxima
player.addEventListener("ended", () => {
    currentTrack = (currentTrack + 1) % playlist.length;
    localStorage.setItem("currentTrack", currentTrack);

    player.src = playlist[currentTrack];
    player.currentTime = 0;
    player.play();

    localStorage.setItem("musicTime", 0);
});

// Tenta iniciar automaticamente
window.addEventListener("load", () => {
    player.play().catch(() => {
        // Se o navegador bloquear, toca no primeiro clique
        document.addEventListener(
            "click",
            () => {
                player.play();
            },
            { once: true }
        );
    });
});

// Salva o tempo da música e a faixa atual
setInterval(() => {
    localStorage.setItem("musicTime", player.currentTime);
    localStorage.setItem("currentTrack", currentTrack);
}, 1000);