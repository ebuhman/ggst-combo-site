/*
    js/app.js
    ---------
    This is the entry point — the first JS file the browser runs.
    Its job is to wire everything together:
        - Import all the pieces
        - Set up the router with its routes
        - Render the current page
*/

import { Router } from "./router.js";
import { characterData } from "./data.js";
import { StarterSelectPage } from "./pages/StarterSelectPage.js";
import { ComboDetailPage } from "./pages/ComboDetailPage.js";

function init() {
    const router = new Router();
    const appContainer = document.getElementById("app");

    function setPage(pageElement) {
        appContainer.innerHTML = "";
        appContainer.appendChild(pageElement);
    }

    router.registerRoute("/", () => {
        const page = new StarterSelectPage(characterData, router);
        setPage(page.render());
    });

    router.registerRoute("/combos/:id", (starterId) => {
        const page = new ComboDetailPage(characterData, starterId, router);
        setPage(page.render());
    });

    router.handleRoute(window.location.pathname);
}

init();
