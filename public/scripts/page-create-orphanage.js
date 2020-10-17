//create map
const map = L.map('mapid').setView([-27.222633,-49.6455874], 15); //códico do mapa da lib https://leafletjs.com/

//create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

//create icon
const icon = L.icon({iconUrl: "./public/images/map-marker.svg", iconSize: [58, 68], iconArchor: [29, 68]
})

let marker;

//create and add marker
map.on('click', (event) =>{
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    //remove icon
    marker && map.removeLayer(marker)

    //add icon layer
    marker = L.marker([lat, lng], {icon})
    .addTo(map)
})

// add photo field
function addPhotoField(){
    //pegar o container de fotos
    const container = document.querySelector('#images')
    //pegar o container para duplicar .new-upload
    const fieldsContainer = document.querySelectorAll('.new-upload')
    //realizar o clone da última imagem adicionada
    const newFieldContainer = fieldsContainer[fieldsContainer.length -1].cloneNode(true)
    //adicionar o clone ao container de #images
    container.appendChild(newFieldContainer)
}