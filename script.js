let btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  let inputval = document.querySelector("input").value;

  if (inputval == "") {
  } else {
    fetch(`https://api.github.com/users/${inputval}`).then(response =>
      response.json().then(data => {
        console.log(data);
        let box = document.querySelector(".box");
        box.innerHTML = `
<img src = ${data.avatar_url}>
<h1>${data.login}</h1>
<h2>${data.bio}</h2>

<h1>Followers:${data.followers}, Following:${data.following}</h1>
`;
      })
    );
  }
});
