function smoothToId(id = window.location.hash.replace('#', '')) {

    let target = document.getElementById(id)
    console.log(id, target)

    target.scrollIntoView({
        behavior: 'smooth', block: 'center'
    })

}

window.addEventListener('hashchange', () => smoothToId())
window.addEventListener('load', () => smoothToId(), { 
    once: true 
})