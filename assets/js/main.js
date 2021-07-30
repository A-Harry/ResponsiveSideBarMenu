// ------------------ SHOW NAVBAR ------------------
const showMenu = (headerToggle, navbarId) =>{
    const toggleBtn = document.getElementById(headerToggle),
    nav = document.getElementById(navbarId)

    // validate that variables exist
    if(toggleBtn && nav){
        toggleBtn.addEventListener("click", () =>{
            // we add the sho-menu class to the div tag
            nav.classList.toggle('show-menu')

            // change Icon
            toggleBtn.classList.toggle('bx-x')
        })
    }
}
showMenu('header-toggle', 'navbar')

// ------------------ LINK ACTIVE -------------------
const linkColor = document.querySelectorAll(".nav__link");

function colorLink(){
    linkColor.forEach(l => l.classList.remove('active'));
    this.classList.add('active');
}

linkColor.forEach(l=>l.addEventListener("click", colorLink))