const players = document.querySelectorAll('.player');
const overlay = document.getElementById('profile-overlay');
const card = document.getElementById('profile-card');
const nameEl = document.getElementById('profile-name');
const descEl = document.getElementById('profile-desc');
const statsEl = document.getElementById('profile-stats');
const imgEl = document.querySelector('.profile-img');
const closeBtn = document.querySelector('.close-profile');

// Sample player data
const playerData = {
    finley: {
        name: "#1 — Goalkeeper",
        desc: "Quick reflexes and strong leadership from the back.",
        img: "profile-img/finley-profile.jpg",
        bio: "Finley joined Farringdon back in 2023",
        stats: {
            Goals: 0,
            Assists: 0,
            Saves: 18,
            Cleansheets: 1,
            "Man of the Match": 0,
            "Parents’ Player": 0
        }
    },

    tyler: {
        name: "#10 — Forward",
        desc: "Sharp instincts and a powerful shot. Always a threat in the final third.",
        img: "assests/tyler-shirt.png",
        stats: {
            Goals: 4,
            Assists: 2,
            Cleansheets: 0,
            "Man of the Match": 1,
            "Parents’ Player": 1
        }
    }
};
players.forEach(player => {
    player.addEventListener('click', () => {
        const id = player.dataset.player;
        const data = playerData[id];
        if (!data) return;

        nameEl.textContent = data.name;
        descEl.textContent = data.desc;
        imgEl.src = data.img;
        imgEl.alt = data.name;

        statsEl.innerHTML = '';
        for (let key in data.stats) {
            statsEl.innerHTML += `<p><strong>${key}:</strong> ${data.stats[key]}</p>`;
        }

        overlay.classList.add('active');
    });
});

closeBtn.addEventListener('click', () => {
    overlay.classList.remove('active');

});

closeBio.addEventListener('click', () => {
    bioOverlay.classList.remove('active');
});
