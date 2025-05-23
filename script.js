document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    
    const username = document.querySelector("#username").value;
    const password = document.querySelector("#password").value;

    if (username === "" || password === "") {
        alert("Please fill in all fields!");
    } else {
        alert("Login successful!");
    }
});
