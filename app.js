const submitBtn = document.querySelector("#submitBtn");
const searchedUsersList = document.querySelector("#searchedUsersList");

submitBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  const searchQuery = document.getElementById("searchString").value;
  if (searchQuery != "") {
    const users = await fetchUsers(searchQuery);
    displayUsersToUI(users);
  } else {
    searchedUsersList.innerHTML = "<p class='text-danger'>Enter some text</p>";
  }
});

const fetchUsers = async (searchQuery) => {
  try {
    const response = await fetch(
      `https://api.github.com/search/users?q=${searchQuery}`
    );
    const data = await response.json();
    let { items } = data;
    // let items = data.items;
    searchedUsersList.innerHTML = "";
    return items;
  } catch (e) {
    searchedUsersList.innerHTML = "";
    console.log("ERROR " + e);
    searchedUsersList.innerHTML += `<p>${e.message}</p>`;
  }
};

function displayUsersToUI(users) {
  if (users?.length > 0) {
    searchedUsersList.innerHTML += `<h3 class="res-heading">Result Found: ${users?.length}</h3>`;
    users?.forEach((user) => {
      searchedUsersList.innerHTML += `<a href="./user_detail.html?username=${user.login}"><li>${user.login}</li></a>`;
    });
  }
}
