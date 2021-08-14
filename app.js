fetch("data.json")
  .then((response) => {
    return response.json();
  })
  .then((users) => {
    const container = document.getElementById("users");
    users.forEach((user) => {
      const tmpl = document
        .getElementById("user-card-template")
        .content.cloneNode(true);
      tmpl.querySelector(".fullname").innerText = user.fullname;
      tmpl.querySelector(".profession").innerText = user.profession;
      tmpl.querySelector(".description").innerText = user.description;
      tmpl.querySelector("img").setAttribute("src", user.avatar);
      container.appendChild(tmpl);
    });
  });
