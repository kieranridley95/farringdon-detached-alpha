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
        img: "icons/finley-icon.png",
        bio: "Finley joined Farringdon back in 2023",
        stats: {
            Appearences: 4,
            Assists: 0,
            Saves: 18,
            Cleansheets: 2,
            "Man of the Match": 1,
            "Parents’ Player": 0
        }
    },

    bradley: {
        name: "#8 — Right Back",
        desc: "Sharp instincts and a powerful shot. Always a threat in the final third.",
        img:  "icons/bradley-icon.png",
        stats: {
            Appearences: 4,
            Goals: 2,
            Assists: 0,
            "Man of the Match": 1,
            "Parents’ Player": 1
        }
    },

    keaton: {
        name: "#4 — Right Back/CDM",
        desc: "Sharp instincts and a powerful shot. Always a threat in the final third.",
        img: "icons/keaton-icon.png",
        stats: {
            Appearences: 2,
            Goals: 0,
            Assists: 0,
            "Man of the Match": 0,
            "Parents’ Player": 0
        }
    },

    freddie: {
        name: "#5 — Centre Back",
        desc: "Sharp instincts and a powerful shot. Always a threat in the final third.",
        img: "icons/freddie-icon.png",
        stats: {
            Appearences: 4,
            Goals: 0,
            Assists: 0,
            "Man of the Match": 1,
            "Parents’ Player": 0
        }
    },

    oliver: {
        name: "#11 — Left Back",
        desc: "Sharp instincts and a powerful shot. Always a threat in the final third.",
        img: "icons/oliver-icon.png",
        stats: {
            Appearences: 4,
            Goals: 0,
            Assists: 0,
            "Man of the Match": 0,
            "Parents’ Player": 0
        }
    },

    lucas: {
        name: "#6 — Left Back",
        desc: "Sharp instincts and a powerful shot. Always a threat in the final third.",
        img: "icons/lucas-icon.png",
        stats: {
            Appearences: 0,
            Goals: 0,
            Assists: 0,
            "Man of the Match": 1,
            "Parents’ Player": 0
        }
    },

    david: {
        name: "#7 — Right Winger",
        desc: "Sharp instincts and a powerful shot. Always a threat in the final third.",
        img: "icons/david-icon.png",
        stats: {
            Appearences: 4,
            Goals: 0,
            Assists: 0,
            "Man of the Match": 0,
            "Parents’ Player": 1
        }
    },

    jensen: {
        name: "#16 — Forward",
        desc: "Sharp instincts and a powerful shot. Always a threat in the final third.",
        img: "icons/jensen-icon.png",
        stats: {
            Appearences: 4,
            Goals: 0,
            Assists: 0,
            "Man of the Match": 0,
            "Parents’ Player": 0
        }
    },

    joseph: {
        name: "#12 — Left Winger/Forward",
        desc: "Amazing skillks, ball control, a defenders nightmare.",
        img: "icons/joseph-icon.png",
        stats: {
            Appearences: 4,
            Goals: 0,
            Assists: 0,
            "Man of the Match": 0,
            "Parents’ Player": 2
        }
    },

    jenson: {
        name: "#3 — CDM",
        desc: "Sharp instincts and a powerful shot. Always a threat in the final third.",
        img: "icons/jenson-icon.png",
        stats: {
            Appearences: 4,
            Goals: 0,
            Assists: 0,
            "Man of the Match": 1,
            "Parents’ Player": 0
        }
    },

    dawson: {
        name: "#9 — Striker/Right Winger",
        desc: "Sharp instincts and a powerful shot. Always a threat in the final third.",
        img: "icons/dawson-icon.png",
        stats: {
            Appearences: 3,
            Goals: 0,
            Assists: 0,
            "Man of the Match": 0,
            "Parents’ Player": 1
        }
    },

    tyler: {
        name: "#10 — Striker/Midfielder/Defender",
        desc: "Sharp instincts and a powerful shot. Always a threat in the final third.",
        img: "icons/tyler-icon.png",
        stats: {
            Appearences: 4,
            Goals: 1,
            Assists: 0,
            "Man of the Match": 0,
            "Parents’ Player": 1
        }
    },

    sonny: {
        name: "#18 — Striker",
        desc: "Sharp instincts and a powerful shot. Always a threat in the final third.",
        img:  "icons/sonny-icon.png", 
        stats: {
            Appearences: 4,
            Goals: 0,
            Assists: 1,
            "Man of the Match": 0,
            "Parents’ Player": 0
        }
    },

    joey: {
        name: "#14 — Winger/Striker",
        desc: "Sharp instincts and a powerful shot. Always a threat in the final third.",
        img: "icons/joey-icon.png",
        stats: {
            Appearences: 2,
            Goals: 1,
            Assists: 1,
            "Man of the Match": 0,
            "Parents’ Player": 1
        }
    },

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
