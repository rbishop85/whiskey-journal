const signupFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the registration form
  const username = document.querySelector("#registerUsername").value.trim();
  const password = document.querySelector("#registerPassword").value.trim();

  if (username && password) {

    // Send get request to check if supplied username is in users database
    const namecheck = await fetch(`/api/users/available/${username}`, {
      method: "GET"
    });

    if (namecheck.ok) {
      alert("Username already taken, please choose another")
    } else {
      // Send a POST request to the registration endpoint
      const response = await fetch("/api/users", {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.ok) {
        document.location.replace("/");
      } else {
        alert(response.statusText);
      }
    }
  }
};

document
  .querySelector(".form-register")
  .addEventListener("submit", signupFormHandler);
