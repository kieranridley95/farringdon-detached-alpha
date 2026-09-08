const squadPlayers = [
  { id: "finley", name: "Finley", number: "1", group: "gk", position: "Goalkeeper", image: "icons/finley-icon.png", appearances: 6, goals: 0, assists: 0, highlight: "37 saves", bio: "Finley joined Farringdon in 2023 and has developed into a confident goalkeeper with quick reflexes and strong leadership from the back." },
  { id: "bradley", name: "Bradley", number: "8", group: "def", position: "Right Back", image: "icons/bradley-icon.png", appearances: 6, goals: 6, assists: 0, highlight: "1 Player of the Match", bio: "Bradley joined Farringdon late in the 2024/25 season and immediately showed the quality and experience he brings to the team." },
  { id: "keaton", name: "Keaton", number: "4", group: "def", position: "Right Back / CDM", image: "icons/keaton-icon.png", appearances: 4, goals: 1, assists: 0, highlight: "1 Player of the Match", bio: "Keaton joined Farringdon for the 2024 Spring Cup and offers strength, determination and protection across the back line." },
  { id: "jack", name: "Jack", number: "3", group: "def", position: "Defender", image: "assests/farringdon_crest.png", appearances: "—", goals: "—", assists: "—", highlight: "Squad player", bio: "A key member of the Farringdon defensive unit." },
  { id: "ashton", name: "Ashton", number: "16", group: "def", position: "Defender", image: "assests/farringdon_crest.png", appearances: "—", goals: "—", assists: "—", highlight: "Squad player", bio: "A key member of the Farringdon defensive unit." },
  { id: "james", name: "James", number: "11", group: "def", position: "Defender", image: "assests/farringdon_crest.png", appearances: "—", goals: "—", assists: "—", highlight: "Squad player", bio: "A key member of the Farringdon defensive unit." },
  { id: "lucas", name: "Lucas", number: "6", group: "def", position: "Left Back", image: "icons/oliver-icon.png", appearances: 6, goals: 0, assists: 0, highlight: "1 Player of the Match", bio: "Lucas gives 100% every matchday, combining pace and strength while continuing to improve week by week." },
  { id: "joseph", name: "Joseph", number: "9", group: "mid", position: "Midfielder / Forward", image: "icons/joseph-icon.png", appearances: 5, goals: 0, assists: 0, highlight: "2 Parents’ Player awards", bio: "Joseph joined Farringdon in January 2025. His close control and creative skills make him a real challenge for defenders." },
  { id: "lukey", name: "Lukey", number: "2", group: "mid", position: "Midfielder", image: "assests/farringdon_crest.png", appearances: "—", goals: "—", assists: "—", highlight: "Squad player", bio: "A hardworking member of the Farringdon midfield." },
  { id: "joey", name: "Joey", number: "7", group: "mid", position: "Winger / Striker", image: "icons/joey-icon.png", appearances: 4, goals: 3, assists: 1, highlight: "1 Parents’ Player award", bio: "Joey brings experience, creativity and a goal threat across the forward line." },
  { id: "tyler", name: "Tyler", number: "10", group: "mid", position: "Midfielder / Defender", image: "icons/tyler-icon.png", appearances: 6, goals: 1, assists: 0, highlight: "1 Player of the Match", bio: "Tyler has been with Farringdon since 2021, offering leadership, quality and experience across the team." },
  { id: "louis", name: "Louis", number: "12", group: "fwd", position: "Forward", image: "assests/farringdon_crest.png", appearances: "—", goals: "—", assists: "—", highlight: "Squad player", bio: "A key member of the Farringdon forward line." },
  { id: "kaiden", name: "Kaiden", number: "18", group: "fwd", position: "Forward", image: "assests/farringdon_crest.png", appearances: "—", goals: "—", assists: "—", highlight: "Squad player", bio: "A key member of the Farringdon forward line." }
];

const roster = document.getElementById("squad-roster");
const filters = document.querySelectorAll(".squad-filter");
const image = document.getElementById("squad-player-image");
const number = document.getElementById("squad-player-number");
const position = document.getElementById("squad-player-position");
const playerName = document.getElementById("squad-player-name");
const detailName = document.getElementById("squad-detail-name");
const statList = document.getElementById("squad-stat-list");
const bio = document.getElementById("squad-player-bio");
let selectedPlayer = squadPlayers[0];
let activeFilter = "all";

function renderProfile(player) {
  selectedPlayer = player;
  image.src = player.image;
  image.alt = player.name;
  number.textContent = player.number;
  position.textContent = player.position;
  playerName.textContent = player.name;
  detailName.textContent = player.name;
  bio.textContent = player.bio;
  statList.innerHTML = [
    ["Squad number", player.number],
    ["Position", player.position],
    ["Appearances", player.appearances],
    ["Goals", player.goals],
    ["Assists", player.assists],
    ["Highlight", player.highlight]
  ].map(([label, value]) => `<div><dt>${label}</dt><dd>${value}</dd></div>`).join("");

  document.querySelectorAll(".squad-player").forEach((button) => {
    const isSelected = button.dataset.player === player.id;
    button.classList.toggle("is-selected", isSelected);
    button.setAttribute("aria-pressed", String(isSelected));
  });
}

function renderRoster() {
  const filteredPlayers = activeFilter === "all"
    ? squadPlayers
    : squadPlayers.filter((player) => player.group === activeFilter);

  roster.innerHTML = filteredPlayers.map((player) => `
    <button class="squad-player ${player.id === selectedPlayer.id ? "is-selected" : ""}" type="button" data-player="${player.id}" aria-pressed="${player.id === selectedPlayer.id}">
      <span class="squad-player__badge squad-player__badge--${player.group}">${player.group.toUpperCase()}</span>
      <span class="squad-player__name"><strong>${player.number}.</strong> ${player.name}</span>
      <span class="squad-player__arrow" aria-hidden="true">›</span>
    </button>
  `).join("");

  roster.querySelectorAll(".squad-player").forEach((button) => {
    button.addEventListener("click", () => {
      const player = squadPlayers.find((item) => item.id === button.dataset.player);
      if (player) renderProfile(player);
    });
  });
}

filters.forEach((filter) => {
  filter.addEventListener("click", () => {
    activeFilter = filter.dataset.filter;
    filters.forEach((item) => {
      const isActive = item === filter;
      item.classList.toggle("is-active", isActive);
      item.setAttribute("aria-selected", String(isActive));
    });

    const visiblePlayers = activeFilter === "all"
      ? squadPlayers
      : squadPlayers.filter((player) => player.group === activeFilter);
    if (!visiblePlayers.some((player) => player.id === selectedPlayer.id)) {
      renderProfile(visiblePlayers[0]);
    }
    renderRoster();
  });
});

renderRoster();
renderProfile(selectedPlayer);
