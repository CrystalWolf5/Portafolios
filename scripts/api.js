async function buscarUsuario() {
    // Aqui aproveché un poco el codigo ya proporcionado por ahorrar tiempo, pero lo adapte a mi estilo. 
    const card = document.getElementById("card");

    const response = await fetch(`https://api.github.com/users/CrystalWolf5`);

    const data = await response.json();

    document.getElementById("avatar").src = data.avatar_url;
    document.getElementById("name").textContent = data.name || data.login;
    document.getElementById("repos").textContent = data.public_repos;

    // Obtener los repositorios del usuario

    const reposResponse = await fetch(`https://api.github.com/users/CrystalWolf5/repos`);

    const reposData = await reposResponse.json();

    const repoList = document.getElementById("repo-list");

    const languageTotals = {};

    for (const repo of reposData) {

        const li = document.createElement("li");

        li.innerHTML = `
        <span class="repo-name">${repo.name}</span> 
        <button onclick="window.open('${repo.html_url}', '_blank')"> Ver repositorio </button>`;

        repoList.appendChild(li);

        const languagesDiv = document.getElementById("languages");

        const languageTotals = {};

        const colors = {JavaScript: "#f7df1e", HTML: "#e34c26", CSS: "#6c00be"};

        let totalBytes = 0;

        for (const repo of reposData) {
            const langResponse = await fetch(repo.languages_url);
            const langData = await langResponse.json();

            for (const lang in langData) {
                const value = langData[lang];
                languageTotals[lang] = (languageTotals[lang] || 0) + value;
                totalBytes += value;
            }
        }

        for (const lang in languageTotals) {

            const percent = (languageTotals[lang] / totalBytes) * 100;
            const langItem = document.createElement("div");
            langItem.classList.add("language-item");
            langItem.innerHTML = `<p class="lang-text ${lang}">${lang} - ${percent.toFixed(1)}% </p>
            <div class="bar">
            <div class="fill ${lang}" style="width:${percent}%; background:${colors[lang]}"></div>
            </div>`;

            languagesDiv.appendChild(langItem);
        }
    }

}

buscarUsuario();