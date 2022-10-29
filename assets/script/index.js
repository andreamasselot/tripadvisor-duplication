const avatar = document.querySelector("#avatar");
const modal = document.querySelector("#modal");
const cross = document.querySelector('#cross');
avatar.addEventListener("click", e => {
  modal.classList.add("open");
});
cross.addEventListener("click", e => {
  modal.classList.remove("open");
});

document.addEventListener("DOMContentLoaded", () => {
  console.log("document loaded");

  document
    .querySelector("#contactForm")
    .addEventListener("submit", async (e) => {
      e.preventDefault();
 console.log('tedt');
      const data = {
        firstname: document.querySelector("#firstname").value,
        lastname: document.querySelector("#lastname").value,
        email: document.querySelector("#email").value,
        message: document.querySelector("#message").value,
      };
      const response = await axios.post("https://site--backend-tripadvisor--4mpkkk4smrk9.code.run/form", data);
      
      console.log(response);
    });
});