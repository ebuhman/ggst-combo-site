/*
    js/app.js
    ---------
    This is the entry point — the first JS file the browser runs.
    Its job is to wire everything together:
        - Import all the pieces
        - Set up the router with its routes
        - Render the current page

    CONCEPT: ES Modules (import / export)
    ---------------------------------------
    JavaScript files can share code with each other using import/export.

    "export class Foo {}" in one file makes Foo available to others.
    "import { Foo } from './foo.js'" brings it in so you can use it here.

    The browser loads each file only once, no matter how many times it's imported.
    This is how we avoid one giant file with thousands of lines.

    CONCEPT: The Entry Point
    ------------------------
    Because index.html loads this file with <script type="module">,
    this is where execution starts. Everything flows from here.
*/

import { Router } from "./router.js";
import { characterData } from "./data.js";
import { StarterSelectPage } from "./pages/StarterSelectPage.js";
import { ComboDetailPage } from "./pages/ComboDetailPage.js";

/*
    CONCEPT: Immediately Invoked Functions / Top-Level Code
    --------------------------------------------------------
    Code at the top level of a module (outside any function or class)
    runs immediately when the file is loaded.

    We wrap our setup in an "init" function just to keep it organized,
    then call it right away at the bottom.
*/

function init() {

    // Create our single router instance
    const router = new Router();

    /*
        CONCEPT: document.getElementById
        ----------------------------------
        This finds the <div id="app"> element in index.html.
        All page rendering will happen inside this element.
        We never touch anything outside it.
    */
    const appContainer = document.getElementById("app");

    /*
        setPage(pageElement)
        --------------------
        Clears whatever is currently in #app and renders a new page.

        CONCEPT: innerHTML vs appendChild
        ----------------------------------
        Setting innerHTML = "" is a quick way to wipe all children.
        appendChild() then adds our new page element into the empty container.

        An alternative is replaceChildren() which is cleaner but slightly newer.
        Either works fine here.
    */
    function setPage(pageElement) {
        appContainer.innerHTML = "";
        appContainer.appendChild(pageElement);
    }

    /*
        ROUTE SETUP
        -----------
        Here we register each URL path with a function that renders the right page.
        The router calls these functions when the URL changes.

        Route "/"          → StarterSelectPage
        Route "/combos/:id" → ComboDetailPage (with the starter id from the URL)
    */

    router.registerRoute("/", () => {
        const page = new StarterSelectPage(characterData, router);
        setPage(page.render());
    });

    router.registerRoute("/combos/:id", (starterId) => {
        const page = new ComboDetailPage(characterData, starterId, router);
        setPage(page.render());
    });

    /*
        INITIAL RENDER
        --------------
        When the app first loads, we need to render whatever page
        the current URL points to.

        window.location.pathname gives us the current URL path,
        e.g. "/" or "/combos/5P"

        We pass it to the router's handleRoute so the right page
        loads even if the user bookmarked a specific combo page.
    */
    router.handleRoute(window.location.pathname);
}

// Kick everything off
init();
