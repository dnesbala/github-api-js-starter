const userInfo = document.getElementById("userInfo");

const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get("username");
console.log(username);

window.addEventListener("DOMContentLoaded", () => {
  fetchUserDetails();
});

async function fetchUserDetails() {
  const response = await fetch(`https://api.github.com/users/${username}`);
  const data = await response.json();
  console.log(data);

  const userInfoHTML = `
  <img class="rounded-circle" style="max-width: 10vh" src="${
    data.avatar_url
  }" alt="#" id="avatarUrl" />
  <p class="fw-bold">${data.login}</p>
  <p>${data.name ?? ""}</p>
  <p>${data.bio ?? ""}</p>
  <p><span class="fw-bold">${data.followers}</span> Followers</p>
  <p><span class="fw-bold">${data.following}</span> Following</p>
  <p>${data.email ?? ""}</p>
  <a class="btn btn-dark" href="${
    data.html_url
  }" target="_blank">View on Github</a>
  `;

  userInfo.innerHTML = userInfoHTML;
}
