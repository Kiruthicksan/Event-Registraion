document.getElementById("registrationForm").addEventListener("submit", function (e) {
    e.preventDefault(); 


    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const event = document.getElementById("event").value;
    const tshirt = document.getElementById("tshirt").value.trim();
    const preferences = document.getElementById("preferences").value.trim();
    const tickets = document.getElementById("tickets").value.trim();

    if (!name || !email || !phone || !event || !tickets) {
        alert("Please fill in all required fields");
        return;
    }

    console.log("Validation passed, storing data and redirecting...");

    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("phone", phone);
    localStorage.setItem("event", event);
    localStorage.setItem("tshirt", tshirt);
    localStorage.setItem("preferences", preferences);
    localStorage.setItem("tickets", tickets);

    document.getElementById("message").innerText = "Registration Successful!";
    document.getElementById("message").style.color = "green";

    setTimeout(() => {
        window.location.href = "thankyou.html";
    }, 2000);
});