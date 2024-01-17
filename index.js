let elementsOfdoubt = document.querySelectorAll('.duvida')

elementsOfdoubt.forEach((duvida) => {
  duvida.addEventListener('click', () => {
    duvida.classList.toggle('ativa')
  })
})

