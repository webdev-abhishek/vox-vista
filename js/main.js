// // sign-in, sign-up form js
// const container = document.getElementById('container');
// const registerBtn = document.getElementById('register');
// const loginBtn = document.getElementById('login');

// registerBtn.addEventListener('click', () =>{
//     container.classList.add("active");
// });
// con
// loginBtn.addEventListener('click', () =>{
//     container.classList.remove("active");
// });

// function toggleForm() {
//     const toggleRight = document.getElementById('toggleRight');
//     const toggleLeft = document.getElementById('toggleLeft');

//     signupForm.classList.toggle('hidden');
//     loginForm.classList.toggle('hidden');
// }

// chat-box opener 
function showChatProfile(username) {
    // Hide default content
    document.getElementById("default-content").style.display = "none";
  
    // Show chat profile container
    document.getElementById("chat-profile-container").style.display = "block";
  
    // Fetch chat profile content
    fetch(`/k.html/${username}`)
      .then(response => response.text())
      .then(chatProfileContent => {
        // Display fetched content in chat profile container
        document.getElementById("chat-profile-container").innerHTML = chatProfileContent;
      });
  }

  // message send
  function sendMessage() {
    // Add your logic for sending a message here
    alert('Message sent!');
}


window.onload = function () {
    // Load the content based on screen width
    loadContent();

    // Add an event listener to dynamically adjust the view when the window is resized
    window.addEventListener('resize', function () {
        loadContent();
    });

    function loadContent() {
        // Check if the screen width is less than a certain value
        if (window.innerWidth <= 450) {
            // Load mobile.html for small screens
            fetchAndReplaceContent('mobile.html');
        } else {
            // Load index.html for larger screens
            fetchAndReplaceContent('index.html');
        }
    }

    function fetchAndReplaceContent(page) {
        // Use AJAX to fetch the content of the specified page
        var xhr = new XMLHttpRequest();
        xhr.open('GET', page, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                // Replace the content of the container with the content of the fetched page
                document.getElementById('contentContainer').innerHTML = xhr.responseText;
            }
        };
        xhr.send();
    }
};
