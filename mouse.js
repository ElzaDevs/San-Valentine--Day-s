// Esconde o cursor padrão
document.body.style.cursor = "none";

// imagem do cursor
const cursor = document.createElement("img");
cursor.src = "images/MOUSE.gif"; 

// Estilos do cursor
cursor.style.position = "fixed";
cursor.style.width = "50px";       // tamanho do GIF
cursor.style.height = "50px";
cursor.style.pointerEvents = "none";
cursor.style.zIndex = "99999";
cursor.style.left = "0px";
cursor.style.top = "0px";
cursor.style.transform = "translate(-50%, -50%)";

// Adiciona o cursor à página
document.body.appendChild(cursor);

// Faz o GIF seguir o mouse
document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});