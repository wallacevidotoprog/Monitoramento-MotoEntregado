const email = document.getElementById("email");
const password = document.getElementById("password");

//document.getElementById("btn").addEventListener("click", Login);

async function Login() {

  //alert("OADHJKDBJKAD")
  await fetch("http://localhost:3000/api/login", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user: email.value,
      pass: password.value,
    }),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      document.cookie = data.TK;
      window.location.href = "/pages/home/home.html";
    })
    .catch((error) => {
      console.log(error);
    });
}
