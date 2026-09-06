function footer() {
    let footer = document.createElement("footer");
    let paragraphe = document.createElement("p");
    let texte = document.createTextNode("© 2026 - Photos d'Arthur, all right reserved");
    paragraphe.appendChild(texte);
    footer.appendChild(paragraphe);
    document.body.appendChild(footer);
}

window.addEventListener('DOMContentLoaded', footer);
