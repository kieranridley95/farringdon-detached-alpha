const players = document.querySelectorAll('.player');
const overlay = document.getElementById('profile-overlay');
const card = document.getElementById('profile-card');
const nameEl = document.getElementById('profile-name');
const descEl = document.getElementById('profile-desc');
const statsEl = document.getElementById('profile-stats');
const bioEl = document.getElementById('profile-bio');
const imgEl = document.querySelector('.profile-img');
const closeBtn = document.querySelector('.close-profile');

// Sample player data
const playerData = {
    finley: {
        name: "#1 — Goalkeeper",
        desc: "Quick reflexes and strong leadership from the back.",
        bio: "Finley joined Farringdon back in 2023. His development as a keeper has been tremendous, pulling off some of the most unbelievable saves between the sticks has been reflected by his development. ",
        img: "icons/finley-icon.png",
        stats: {
            Appearances: 1,
            Assists: 0,
            Saves: 0,
            Cleansheets: 1,
            "Man of the Match": 0,
            "Parents’ Player": 0
        }
    },

    bradley: {
        name: "#8 — Right Back",
        desc: "Sharp instincts, brilliant defending and a powerful shot. Always a threat in the final third.",
        bio: "Bradley joined Farringdon late into our 2024/25 Season.",
        img:  "icons/bradley-icon.png",
        stats: {
            Appearances: 1,
            Goals: 0,
            Assists: 0,
            "Man of the Match": 0,
            "Parents’ Player": 0
        }
    },

    keaton: {
        name: "#4 — Right Back/CDM",
        desc: "Sharp instincts and a powerful shot. Always a threat in the final third.",
        bio: "Keaton joined Farringdon during the team's first season in the spring cup in 2024. He offers great strength in the backline and determination to protect his players",
        img: "icons/keaton-icon.png",
        stats: {
            Appearances: 1,
            Goals: 0,
            Assists: 0,
            "Man of the Match": 0,
            "Parents’ Player": 0
        }
    },

    jack: {
        name: "#3 — Defender",
        desc: "Very strong and physical",
        bio: "Jack is not scared to get a foot in on the ball; he is solid at the back and has proven to be a solid option there, which has shown in pre-season",
        img: "icons/jack-icon.png",
        stats: {
            Appearances: 1,
            Goals: 0,
            Assists: 0,
            "Man of the Match": 0,
            "Parents’ Player": 0
        }
    },

    ashton: {
        name: "#16 — Right Back/CDM",
        desc: "Very pacey, strong and shows great determination",
        bio: "Ashton joined us toward the end of our 25/26 season. Initially, Ashton started out as winger for the team but with a shift in the team Ashton stepped up and adapted to left back for the new season which has been a brilliant addaption for not only his development but the team as he continues to thrive in this position ",
        img: "icons/ashton-icon.png",
        stats: {
            Appearances: 1,
            Goals: 0,
            Assists: 0,
            "Man of the Match": 1,
            "Parents’ Player": 0
        }
    },

    james: {
        name: "#11 — Left Back",
        desc: "Sharp instincts and a powerful shot. Always a threat in the final third.",
        bio: "James joined Farringdon during the summer of 2026. After playing many games in pre-season James continues to thrive and develop in matches and training",
        img: "icons/james-icon.png",
        stats: {
            Appearances: 1,
            Goals: 0,
            Assists: 0,
            "Man of the Match": 0,
            "Parents’ Player": 0
        }
    },

    lucas: {
        name: "#6 — Left Back",
        desc: "Sharp instincts and a powerful shot. Always a threat in the final third.",
        bio: "Lucas joined Farringdon midway through our 24/25 Season, There is something special about Lucas that shows on the pitch on a matchday, he will give 100% always, with lots of pace and strength his a solid option for leftback and multiple possitions this season, he is improving week-in week-out noticed by the coaches",
        img: "icons/lucas-icon.png",
        stats: {
            Appearances: 1,
            Goals: 0,
            Assists: 0,
            "Man of the Match": 0,
            "Parents’ Player": 0
        }
    },

    joseph: {
        name: "#19 — Left Winger/Forward",
        desc: "Amazing skillks, ball control, a defenders nightmare.",
        bio: "Our mini Messi, Joseph joined Farringdon in Janauary 2025, his a fantastic winger with plenty of skillfull tricks up his sleeve has proved to be a defenders nightmare, his a solid player who has developed rapidly over the months since he joined",
        img: "icons/joseph-icon.png",
        stats: {
            Appearances: 1,
            Goals: 0,
            Assists: 0,
            "Man of the Match": 0,
            "Parents’ Player": 0
        }
    },

    lukey: {
        name: "#2 — Left Winger/Forward",
        desc: "Amazing Pace, Powerful Shot.",
        bio: "Joined in the summer of 2026, he has made an instant impact in pre-season, having scored a few goals and assisting a few",
        img: "icons/lukey-icon.png",
        stats: {
            Appearances: 1,
            Goals: 0,
            Assists: 0,
            "Man of the Match": 0,
            "Parents’ Player": 1
        }
    },

    joey: {
        name: "#7 — Midfielder",
        desc: "Sharp instincts and a powerful shot. Always a threat in the final third.",
        bio: "Joey has recently joined Farringdon for the 2025 season. He has bags of experience as a winger/striker and proves to be a goalscorer and creative player, offering something unique to the squad.",
        img: "icons/joey-icon.png",
        stats: {
            Appearances: 1,
            Goals: 0,
            Assists: 1,
            "Man of the Match": 0,
            "Parents’ Player": 1
        },

    tyler: {
        name: "#10 — Striker/Midfielder/Defender",
        desc: "Sharp instincts and a powerful shot. Always a threat in the final third.",
        bio:"Tyler has been at Farringdon since 2021. His development has been fantastic; his leadership on the pitch, and the quality and experience he offers the team, have helped bring players into the team. He earned manager's player of the season and most man of the match awards for the 2025/2026 season,
        img: "icons/tyler-icon.png",
        stats: {
            Appearances: 1,
            Goals: 0,
            Assists: 0,
            "Man of the Match": 0,
            "Parents’ Player": 0
        }
    },

    louis: {
        name: "#12 — Striker",
        desc: "Sharp instincts and a powerful shot. Always a threat in the final third.",
        bio: "Joey has recently joined Farringdon for the 2025 season, he has bags of expereince as a winger/striker and proves to be a goalscorer and creative player ofering something unique to the squad.",
        img: "icons/kaiden-icon.png",
        stats: {
            Appearances: 1,
            Goals: 0,
            Assists: 1,
            "Man of the Match": 1,
            "Parents’ Player": 0
        },

    kaiden: {
        name: "#18 — Striker",
        desc: "Sharp instincts and a powerful shot. Always a threat in the final third.",
        bio: "Joey has recently joined Farringdon for the 2025 season, he has bags of expereince as a winger/striker and proves to be a goalscorer and creative player ofering something unique to the squad.",
        img: "icons/kaiden-icon.png",
        stats: {
            Appearances: 1,
            Goals: 2,
            Assists: 0,
            "Man of the Match": 0,
            "Parents’ Player": 0
        }
    },

};
players.forEach(player => {
    player.addEventListener('click', () => {
        const id = player.dataset.player;
        const data = playerData[id];
        if (!data) return;

        nameEl.textContent = data.name;
        bioEl.textContent = data.bio;
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



