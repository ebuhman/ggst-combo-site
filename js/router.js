/*
    js/router.js
    ------------
    Handles navigation between pages without reloading the browser.
    
    HINTS:
    - You'll need a Map to store routes
    - history.pushState() changes the URL without reloading
    - window.addEventListener("popstate") handles the back button
    - Paths starting with "/combos/" are dynamic and need the id extracted
*/

export class Router {

    constructor() {
        // TODO: create a Map to store routes
        // TODO: listen for the browser's popstate event
    }

    registerRoute(path, handler) {
        // TODO: store the path and handler in your Map
    }

    navigate(path) {
        // TODO: update the browser URL with history.pushState
        // TODO: call handleRoute with the new path
    }

    handleRoute(path) {
        // TODO: check if the path exists in your Map and call its handler
        // TODO: handle dynamic "/combos/:id" paths by extracting the starter id
        // TODO: fall back to "/" if no route matches
    }
}
