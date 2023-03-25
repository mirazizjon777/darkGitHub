const darkNot = document.getElementById("darkNot");
const wrapper = document.querySelector(".wrapper");
const darkText = document.querySelector(".dark-text");

let b = false;
darkNot.addEventListener("click", () => {
  b++;
  if (b == true) {
    wrapper.classList.toggle("dark-not");
    darkText.textContent = "LIGHT";
    darkNot.src = "./images/svg/sun.svg";
  } else {
    wrapper.classList.toggle("dark-not");
    darkText.textContent = "DARK";
    darkNot.src = "./images/svg/oy.svg";
    b = false;
  }
});

//

const search = document.getElementById("search");
const input = document.querySelector("input");
const nameEl = document.getElementById("name");
const reposEl = document.getElementById("repos");
const bioEl = document.getElementById("bio");
const followersEl = document.getElementById("followers");
const followingEl = document.getElementById("following");
const gitBlogEl = document.getElementById("gitBlog");
const locationEl = document.getElementById('location')
search.addEventListener("click", (e) => {
  e.preventDefault();
  apiFunc();
});

// API

async function apiFunc() {
  let namee = "";
  namee = input.value
  const res = await fetch(`https://api.github.com/users/${namee}`);
  const data = await res.json();
  console.log(data);
  nameEl.textContent = data.name;
  reposEl.textContent = data.public_repos;
  // bioEl.textContent = data.bio
  followersEl.textContent = data.followers
  followingEl.textContent = data.following
  gitBlogEl.setAttribute('href', `${data.html_url}`)
  locationEl.textContent = data.location
}

