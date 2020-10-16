const options ={
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWeelZoom: false,
    zoomControl: false

}
//create map
const map = L.map('mapid', options).setView([-27.222633,-49.6455874], 15); //códico do mapa da lib https://leafletjs.com/

//create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

//create icon
const icon = L.icon({iconUrl: "./public/images/map-marker.svg", iconSize: [58, 68], iconArchor: [29, 68], popupAnchor: [170, 2]
})


//create and add marker
L.marker([-27.222633,-49.6455874],{icon})
    .addTo(map)

// image gallery

function selectImage(event) {
    const button = event.currentTarget

    console.log(button.children)
    
    // remover todas as classes .active
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass)

    function removeActiveClass(button) {
        button.classList.remove("active")
    }

    //selecionar a image clicada
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")

    //atualizar o container de image
    imageContainer.src = image.src

    //adicionar a classe .active para este botão
    button.classList.add('active')

}