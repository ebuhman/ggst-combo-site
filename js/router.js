/*
    js/router.js
    ------------
    Handles navigation between pages without reloading the browser.
*/

export class Router {

    constructor() {
        this.routes = new Map();
        /* Uses the base window object to tell the window to listen to the popstate
        or the back input since this is run by javascript. The window.location.pathname
        is the current url that is passed in. So if you hit back to /combos/5P it 
        places the string /combos/5P in that argument. Handle route does what it sounds like
        and handles the execution of the webpage. */
        window.addEventListener("popstate", () => {
            this.handleRoute(window.location.pathname)
        });
    }

    registerRoute(path, handler) { // Stores path and handler
        this.routes.set(path, handler);
    }

    navigate(path) { // Updates page when interacting with certain fields
        history.pushState(null, "", path); 
        this.handleRoute(path); 
    }

    handleRoute(path) {
        if (this.routes.has(path)) // Checks if exact match and calls it if so
        {
            const handler = this.routes.get(path);
            handler();
        }
        else if (path.startsWith("/combos/")) // Checks for dynamic match and extracts the id
        {
            const starterId = path.replace("/combos/", "")
            const handler = this.routes.get("/combos/:id")
            handler(starterId);
        }
        else // falls back home
        {
            this.handleRoute("/");
        }
    }
}
