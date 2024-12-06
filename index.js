const mainEl = document.querySelector(".main");
const wrapper = document.querySelector(".wrapper");

const formEl = document.createElement("form");
formEl.classList.add("form");

const inputEl = document.createElement("input");
inputEl.classList.add("input");
inputEl.setAttribute("placeholder", "search");

const btnEl = document.createElement("button");
btnEl.classList.add("button");
btnEl.setAttribute("type", "submit");
btnEl.innerText = "поиск";

async function getUser(user) {
  const responsive = await fetch(`https://api.github.com/users/${user}`);
  if (responsive.ok) {
    const data = await responsive.json();
    createCard(data);
  } else {
    alert("такого пользовател нет");
  }
}

function getSearch() {}

function createCard(dataUser) {
  const profile = document.createElement("div");
  profile.classList.add("profile");
  const userCard = `<img class="search-image" src=${dataUser.avatar_url}></img>
    <p class="search-text"><span>Имя: </span>${dataUser.name}</p>
    <p class="search-text"><span>Город: </span>${dataUser.location}</p>
    <p class="search-text"><span>О себе: </span>${dataUser.bio}</p>`;
  profile.innerHTML = userCard;
  wrapper.appendChild(profile);
}

btnEl.addEventListener("click", (e) => {
  e.preventDefault();
  wrapper.innerHTML = "";
  getUser(inputEl.value);
  inputEl.value = "";
});

mainEl.appendChild(formEl);
formEl.appendChild(inputEl);
formEl.appendChild(btnEl);
