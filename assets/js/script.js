/**
 * Initial variabel for connect element html
 * and
 * Create new element html with Javascript
 */

// connect element html
const logo = document.getElementById('logo')
const container = document.querySelector('#container')

// create element html
const image = document.createElement('img')
image.src = './assets/images/logo.png'

const content = document.createElement('div')
content.setAttribute('class', 'content')

// show tag element in header > #logo > img
logo.appendChild(image)

// show tag element in main > #container > .content
container.appendChild(content)

/**
 * Function Section
 */

// function for connect API & get API data
async function getApi() {
    try {
        let response = await fetch('http://ghibliapi.herokuapp.com/films')
        let result = await response.json()
        return result
    } catch (error) {
        console.log('API Disconnected!')
    }
}


// function for show API data in html
function showData(films) {
    let result = ''
    films.forEach(film => {
        result += `
            <div class="card">
                <h1>${film.title}<br />(${film.release_date})</h1>
                <p><b>Rating :</b> ${film.rt_score}</p>
                <p class="p-desc">${film.description.substring(0, 200)}...</p>
                <p><b>Director :</b> ${film.director}</p>
                <p><b>Producer :</b> ${film.producer}</p>
            </div>
        `
    })

    /**
     * show data in class content
     * location element: main > #container > .content > .card
     */
    content.innerHTML = result
}

// show data in html with DOMCOntentLoaded function
document.addEventListener('DOMContentLoaded', () => {
    getApi().then(data => {

        // do callback
        showData(data)
    })
})