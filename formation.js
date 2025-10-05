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
        bio: "Finley joined Farringdon back in 2023, His development as a keeper has been tremendous, pulling off some of the most unbelievable saves between the sticks has been reflected by his development. ",
        img: "icons/finley-icon.png",
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
        desc: "Sharp instincts, brilliant defending and a powerful shot. Always a threat in the final third.",
        bio: "Bradley joined Farringdon late into our 2024/25 Season. At the time our squad was rather full but as soon as he turned up for training hi's quality and experience proved he had something to offer to the team",
        img:  "icons/bradley-icon.png",
        stats: {
            Appearences: 5,
            Goals: 4,
            Assists: 0,
            "Man of the Match": 1,
            "Parents’ Player": 1
        }
    },

    keaton: {
        name: "#4 — Right Back/CDM",
        desc: "Sharp instincts and a powerful shot. Always a threat in the final third.",
        bio: "Keaton joined Farringdon during the teams first season in the spring cup in 2024, he offers great strength in the backline and determination to protect his players",
        img: "icons/keaton-icon.png",
        stats: {
            Appearences: 2,
            Goals: 1,
            Assists: 0,
            "Man of the Match": 1,
            "Parents’ Player": 0
        }
    },

    freddie: {
        name: "#5 — Centre Back",
        desc: "Sharp instincts and a powerful shot. Always a threat in the final third.",
        bio: "Freddie joined Farringdon in 2024 for the spring cup, his transformation as a player is outstanding and has cemented himself as a solid centre back receiving high praise from many other teams. The gentle giant!",
        img: "icons/freddie-icon.png",
        stats: {
            Appearences: 4,
            Goals: 0,
            Assists: 0,
            "Man of the Match": 1,
            "Parents’ Player": 1
        }
    },

    oliver: {
        name: "#11 — Left Back",
        desc: "Sharp instincts and a powerful shot. Always a threat in the final third.",
        bio: "Oliver joined Farringdon during the summer of 2024, he was a player with no previous team experience but as soon as he started playing he was a natural, he has been a solid left back for the team offering bags of pace and excelent tackles and bagged himself a few wonderous goals!",
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
        bio: "Lucas joined Farringdon midway through our 24/25 Season, There is something special about Lucas that shows on the pitch on a matchday, he will give 100% always, with lots of pace and strength his a solid option for leftback and multiple possitions this season, he is improving week-in week-out noticed by the coaches",
        img: "icons/lucas-icon.png",
        stats: {
            Appearences: 4,
            Goals: 0,
            Assists: 0,
            "Man of the Match": 1,
            "Parents’ Player": 0
        }
    },

    david: {
        name: "#7 — Right Winger",
        desc: "Sharp instincts and a powerful shot. Always a threat in the final third.",
        bio: "David joined Farringdon at the start of our spring cup in 2023, David has improved massively as a player, his compsure and acuaracy getting the ball into the box from set peices to driving the ball into the final third gives the team a huge boost on a matchday.",
        img: "icons/david-icon.png",
        stats: {
            Appearences: 4,
            Goals: 2,
            Assists: 1,
            "Man of the Match": 0,
            "Parents’ Player": 1
        }
    },

    jensen: {
        name: "#16 — Forward",
        desc: "Sharp instincts and a powerful shot. Always a threat in the final third.",
        bio: "Jensen has recently signed the team in September, Jensen works hard in training, and for what we have seen so far, he can pick out players with passing and has pottential for great development as a player to be moulded into his position in the team.",
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
        bio: "Our mini Messi, Joseph joined Farringdon in Janauary 2025, his a fantastic winger with plenty of skillfull tricks up his sleeve has proved to be a defenders nightmare, his a solid player who has developed rapidly over the months since he joined",
        img: "icons/joseph-icon.png",
        stats: {
            Appearences: 5,
            Goals: 0,
            Assists: 0,
            "Man of the Match": 0,
            "Parents’ Player": 2
        }
    },

    jenson: {
        name: "#3 — CDM",
        desc: "Sharp instincts and a powerful shot. Always a threat in the final third.",
        bio: "Jenson joined Farringdon over the summer of 2025, he has become a solid central defensive midfielder for the squad, he works hard in training and also in a matchday will give 100%, Another player we can see becoming solid in the midfield with bags of development in training.",
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
        bio: "Dawson joined Farringdon during the summer of 2025, he has became a solid option across multiple positions wheter it be a striker or a winger Dawson can do a job on the pitch. He has great pace and a fantastic finish infront of goal,",
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
        bio:"Tyler has been at Farringdon since 2021, his devlopment has been fantastic, leadership on the pitch and quality and experience he offers to the team has helped bring players on into the team. With a few goals and assists last season he was nominated our parents player of the season",
        img: "icons/tyler-icon.png",
        stats: {
            Appearences: 5,
            Goals: 1,
            Assists: 0,
            "Man of the Match": 0,
            "Parents’ Player": 1
        }
    },

    sonny: {
        name: "#18 — Striker",
        desc: "Sharp instincts and a powerful shot. Always a threat in the final third.",
        bio: "Sonny joined Farringdon at the start of the 2024/2025 Season, At the time the team were needing a goalscorer and Sonny was the answer, his composure, strength and finishing as a striker is quality. He was awarded Managers Player last season for his hard work ethic in training and on the pitch",
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
        bio: "Joey has recently joined Farringdon for the 2025 season, he has bags of expereince as a winger/striker and proves to be a goalscorer and creative player ofering something unique to the squad.",
        img: "icons/joey-icon.png",
        stats: {
            Appearences: 2,
            Goals: 3,
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


