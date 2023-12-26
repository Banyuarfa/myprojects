async function getTopAnime() {
  const topAnime = await fetch("https://api.jikan.moe/v4/top/anime").then(
    (response) => response.json()
  );
  const animes = topAnime.data;
  topAnimeUI(animes);
}

function topAnimeUI(animes) {
  let cards = "";

  for (let i = 0; i < 5; i++) {
    const anime = animes[i];
    cards += showTopAnime(anime);
  }
  const animeContainer = document.querySelector(".top-anime-list");
  animeContainer.innerHTML = cards;
}

function showTopAnime(anime) {
  console.log(anime);
  return `<div class='top-anime'>
            <p class='rank'>${anime.rank}</p>
            <a href=''><img src="${anime.images.jpg.image_url}"></a>
            <div class='top-anime-description'>
              <a href=''>${anime.title}</a>
              <div>
                <p>${anime.type}, ${anime.episodes} eps, scored ${anime.score}</p>
                <p>${anime.members} members</p>
              </div>
            </div>
            <button>add</button>
          </div>`;
}
getTopAnime();
