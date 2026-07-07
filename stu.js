const form = document.getElementById("studentForm");
const table = document.getElementById("studentTable");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const course = document.getElementById("course").value;

    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${name}</td>
        <td>${age}</td>
        <td>${course}</td>
        <td><button class="deleteBtn">Delete</button></td>
        <td><button class="edit">Edit</button></td>
    `;

    table.appendChild(row);

    form.reset();

});

table.addEventListener("click", function(e){

    if(e.target.classList.contains("deleteBtn")){

        e.target.parentElement.parentElement.remove();

    }

});

const search = document.getElementById("search");

search.addEventListener("keyup", function(){

    const value = search.value.toLowerCase();

    const rows = table.getElementsByTagName("tr");

    for(let row of rows){

        const text = row.textContent.toLowerCase();

        if(text.includes(value)){
            row.style.display = "";
        }else{
            row.style.display = "none";
        }

    }

});

function logout(){

    sessionStorage.removeItem("loggedIn");

    window.location.href="login.html";

}
table.addEventListener("click", function(e){

    if(e.target.classList.contains("editBtn")){

        e.target.parentElement.parentElement.edit   ();

    }

});
