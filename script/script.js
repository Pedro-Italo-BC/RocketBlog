const navBar = document.getElementById('navBar')

const btnBurger = document.getElementById('btn-burger')

const searchBar = document.getElementById('searchBar')

let thereIsOn = true

btnBurger.addEventListener('click', () => {
  navBar.classList.toggle('on')
  searchBar.classList.toggle('on')

  if (navBar.classList.contains('on')) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'initial'
    document.body.style.overflowX = 'hidden'
  }
})
