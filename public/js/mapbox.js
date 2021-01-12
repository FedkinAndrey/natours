/* eslint-disable*/

export const displayMap = (locations) => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiYW5kcmlpLWZlZGtpbjE3IiwiYSI6ImNranN3Y3hoYjJtbnQzMG1qMGZsaWJtdzMifQ.Rd0XWyrX6NwX1tBbSUObCg'

    let map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/andrii-fedkin17/ckjsx03u282w419oaie33khyb',
        scrollZoom: false
        // center: [-118.113491, 34.111745],
        // zoom: 10,
        // interactive: false
    })

    const bounds = new mapboxgl.LngLatBounds()

    locations.forEach(loc => {
        //Create marker
        const el = document.createElement('div')
        el.className = 'marker'

        //Add marker
        new mapboxgl.Marker({
            element: el,
            anchor: 'bottom'
        }).setLngLat(loc.coordinates).addTo(map)

        //add popup
        new mapboxgl.Popup({
            offset: 30
        }).setLngLat(loc.coordinates)
            .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
            .addTo(map)

        // extend map bounds to include current locations
        bounds.extend(loc.coordinates)
    })

    map.fitBounds(bounds, {
        padding: {
            top: 200,
            bottom: 150,
            left: 100,
            right: 100
        }
    })
}

