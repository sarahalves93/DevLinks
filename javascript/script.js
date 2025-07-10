function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "/img/fotolight.png"),
      img.setAttribute("alt", "Foto de Sarah com fundo escuro")
  } else {
    img.setAttribute("src", "/img/fotodark.png"),
      img.setAttribute("alt", "Foto de Sarah com fundo claro")
  }
}
