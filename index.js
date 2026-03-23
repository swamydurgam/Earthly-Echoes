function addPost(){
  let title = document.getElementById('title').value;
  let content = document.getElementById('content').value;
  let image = document.getElementById('image').value;

  if(title === "" || content === ""){
    alert("Fill all fields");
    return;
  }

  let post = document.createElement('div');
  post.className = "post";

  post.innerHTML = `
    ${image ? `<img src="${image}">` : ""}
    <h2>${title}</h2>
    <p>${content}</p>
  `;

  document.getElementById('posts').prepend(post);

  document.getElementById('title').value = "";
  document.getElementById('content').value = "";
  document.getElementById('image').value = "";
}

// SEARCH
document.getElementById('search').addEventListener('keyup', function(){
  let input = this.value.toLowerCase();
  let posts = document.querySelectorAll('.post');

  posts.forEach(post => {
    let text = post.innerText.toLowerCase();
    post.style.display = text.includes(input) ? "block" : "none";
  });
});




function sendMessage(e){
  e.preventDefault();

  let name = document.getElementById("name").value;

  alert("Thank you " + name + "! Your message has been sent 😊");

  document.querySelector(".contact-form").reset();
}




function openMenu(){
  document.getElementById("sideMenu").style.left = "0";
}

function closeMenu(){
  document.getElementById("sideMenu").style.left = "-260px";
}

// TOGGLE MENU
function toggleMenu(){
  document.getElementById("sideMenu").classList.toggle("active");
}