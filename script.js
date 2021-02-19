let btn = document.querySelector("#btn").addEventListener("click", GithubData);
let row = document.querySelector(".row");
// Grab

async function GithubData() {
  let inputval = document.querySelector("#input").value;

  if (inputval == "") {
  } else {
    const API = `https://api.github.com/users/${inputval}`;
    const response = await fetch(API);
    const data = await response.json();
    console.log(data);
    let box = document.querySelector(".profilecard");
    box.style.display = "flex";
    box.innerHTML = `
 <div class="profile-img">
  <img  src="${data.avatar_url}"/>
   <h1 class="display-4"><a href="${data.html_url}">${data.name}</a></h1>
 </div>
 <div class="form-group">
  <div class="text">
    <h1 class="user-info">Followers</h1>
     <h4 class="followers">${data.followers}</h4>
   </div>
   <div class="text">
    <h1 class="user-info">Following</h1>
                 <h4 class="following">${data.following}</h4>
             </div>
               <div class="text">
                <h1 class="user-info">Repositories</h1>
     <h4 class="total">${data.public_repos}</h4>
    </div>
 </div>
`;
  }
}
