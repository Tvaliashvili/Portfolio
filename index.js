let collapsible = document.getElementById(`navMenu`)

function showMenuNavBar() {
    if(collapsible.classList.contains(`collapsible-container-hide`)) {
        collapsible.classList.replace(`collapsible-container-hide`, `collapsible-container-show`)
    }
    else {
        collapsible.classList.add(`collapsible-container-hide`)
    }
}

function hideMenuNavBar() {
    if(collapsible.classList.contains(`collapsible-container-show`)) {
        collapsible.classList.replace(`collapsible-container-show`, `collapsible-container-hide`)
    }
}