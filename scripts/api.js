async function buscarUsuario() {
    // Aqui aproveché un poco el codigo ya proporcionado por ahorrar tiempo, pero lo adapte a mi estilo. 
    const card = document.getElementById("card");

    const response = await fetch(`https://api.github.com/users/CrystalWolf5`);

    const data = await response.json();

    document.getElementById("avatar").src = data.avatar_url;
    document.getElementById("name").textContent = data.name || data.login;
    document.getElementById("bio").textContent = data.bio || "Sin bio disponible";
    document.getElementById("repos").textContent = data.public_repos;

    // Obtener los repositorios del usuario

    const reposResponse = await fetch(`https://api.github.com/users/CrystalWolf5/repos`);

    const reposData = await reposResponse.json();

    const repoList = document.getElementById("repo-list");

    reposData.forEach(repo => {

        const li = document.createElement("li");

        li.innerHTML = `${repo.name} <button onclick="window.open('${repo.html_url}', '_blank')"> Ver repositorio </button>`;

        repoList.appendChild(li);

    });

}

buscarUsuario();