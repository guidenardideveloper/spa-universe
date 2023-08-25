import {Router} from "./router.js"

const router = new Router()
router.add("/" , "/assets/pages/home.html")
router.add("/theuniverse", "/assets/pages/theuniverse.html")
router.add("/exploration", "/assets/pages/exploration.html")

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()