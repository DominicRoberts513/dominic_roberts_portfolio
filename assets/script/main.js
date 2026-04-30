let windowWidth = window.innerWidth

let evrtng = document.querySelector('*')
let main = document.querySelector('main')
let header = document.querySelector(".header")
let headerHeight = header.clientHeight
let nom = document.querySelector(".nom")
let menu = document.querySelector('.menu')
let dropdownButton = document.querySelector(".dropBtnProjet")
let dropdownContent = document.querySelector(".dropContent")
let menuHamburger = document.querySelector('.menuHamburger')
let accueilLink = document.querySelector('.accueilLink')
let contactContainer = document.querySelector('.container')

// Project page header shrink on scroll
const projectHeader = document.querySelector('header');
if (projectHeader) {
  const initialHeight = 15; // vh
  const minHeight = 10; // vh
  const shrinkFactor = 0.05; // adjust for shrink speed

  const main = document.querySelector('main');
  if (main) {
    main.style.paddingTop = initialHeight + 'vh';
  }

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const newHeight = Math.max(minHeight, initialHeight - scrollY * shrinkFactor);
    projectHeader.style.height = newHeight + 'vh';
    if (main) {
      main.style.paddingTop = newHeight + 'vh';
    }
  });
}

// Project page dropdown
const dropdownButtonProject = document.querySelector(".dropBtnProjet");
const dropdownContentProject = document.querySelector(".dropContent");
if (dropdownButtonProject && dropdownContentProject) {
  dropdownButtonProject.addEventListener("click", () => {
    dropdownContentProject.style.display = dropdownContentProject.style.display === "block" ? "none" : "block";
  });

  // Close dropdown when clicking outside
  window.addEventListener("click", (event) => {
    if (!event.target.matches('.dropBtnProjet')) {
      dropdownContentProject.style.display = "none";
    }
  });
}

window.addEventListener("load", () => {
    if (windowWidth > 1000) {
        windowOver1000()
    }
})

window.addEventListener("resize", () => {
    windowWidth = window.innerWidth
    headerHeight = header.clientHeight
    if (windowWidth > 1000) {
        windowOver1000()
    }
})

// Header
  // header collapse
  function windowOver1000() {
    window.addEventListener("scroll", () => {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop 
      if (scrollTop > 0) {
        headerHeight = headerHeight/4
        header.style.height = `${headerHeight}px`
        //nom.style.fontSize = `2vw`
        headerHeight = headerHeight*4
      } else {
        headerHeight = headerHeight
        header.style.height =  `${headerHeight}px`
        //nom.style.fontSize = `5vw`
      }
    //   if (windowWidth >= 1500) {
        
    //     } else if (windowWidth >= 1200) {
    //     if (scrollTop > 0) {
    //       header.style.height = '5%'
    //       nom.style.fontSize = '2vw'
    //     } else {
    //       header.style.height = '15%'
    //       nom.style.fontSize = '5vw'
    //     }
    //   } else if (windowWidth > 100) {
    //     if (scrollTop > 0) {
    //       header.style.height = '5%'
    //       nom.style.fontSize = '2vw'
    //      }  else {
    //        header.style.height = '10%'
    //        nom.style.fontSize = '5vw'
    //      }
    //    }
      
    })
  }
  
  // drop down menu
  
  // drop
  dropdownButton.addEventListener("click", () => {
      dropdownContent.style.display = (dropdownContent.style.display === "block") ? "none" : "block";
  });
  
  // close
  window.addEventListener("click", (event) => {
      if (!event.target.matches(".dropBtnProjet")) {
          if (dropdownContent.style.display === "block") {
              dropdownContent.style.display = "none";
          }
      }
  });
