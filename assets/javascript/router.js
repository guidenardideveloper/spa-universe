export class Router {
    routes = {}

    add(routeName, page) {
        this.routes[routeName] = page
    }

    route(event) {
        event = event || window.event
        event.preventDefault()

        window.history.pushState({}, "", event.target.href)

        this.handle()
    }

    handle() {
        const { pathname } = window.location
        const route = this.routes[pathname] || this.routes['/']

        fetch(route).then(data => data.text())
        .then(html => {
            document.querySelector('#app').innerHTML = html
        })

        const navLink = document.querySelectorAll('nav a')
        navLink[0].addEventListener('click', () => {
            if(navLink[0].classList.contains('active') == false) {
                navLink[0].classList.add('active')
                navLink[1].classList.remove('active')
                navLink[2].classList.remove('active')
            }
        })
        navLink[1].addEventListener('click', () => {
            if(navLink[1].classList.contains('active') == false) {
                navLink[1].classList.add('active')
                navLink[0].classList.remove('active')
                navLink[2].classList.remove('active')
            }
        })
        navLink[2].addEventListener('click', () => {
            if(navLink[2].classList.contains('active') == false) {
                navLink[2].classList.add('active')
                navLink[0].classList.remove('active')
                navLink[1].classList.remove('active')
            }
        })
    }
}
