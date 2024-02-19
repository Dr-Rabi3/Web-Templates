let userAccount = [
  {
    email: "abdalrazekmohmed6@gmail.com",
    password: 123,
  },
];

document.querySelector("#signIn").onsubmit = function (event) {
  event.preventDefault();
  const fd = new FormData(event.target);
  const formData = Object.fromEntries(fd.entries());
  const { email, password } = formData;
  if (!email || email.trim().length === 0) {
    document.querySelector(`input[type="email"] + p`).style.display = "block";
    return;
  }
  if (!password || password.trim().length === 0) {
    document.querySelector(`input[type="password"] + p`).style.display =
      "block";
    return;
  }
  const isExist = userAccount.filter(
    (user) => user.email === email && user.password === password
  );
  if (isExist) window.location = "../pages/home.html";
  return { status: "SUCCESS", data: "Successfully login" };
};
