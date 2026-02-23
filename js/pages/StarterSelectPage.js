/*
    js/pages/StarterSelectPage.js
    -----------------------------
    Builds the landing page — a grid of buttons, one per combo starter.
    Clicking a button navigates to that starter's combo page.

    HINTS:
    - document.createElement() creates a new HTML element
    - element.classList.add() gives an element a CSS class
    - element.textContent sets the text inside an element
    - parent.appendChild(child) adds a child inside a parent
    - Array.forEach() runs a function once per item in an array
    - addEventListener("click", () => {}) listens for a button click
    - Template literals: `hello ${variable}` embeds variables in strings
*/

export class StarterSelectPage {

    constructor(character, router) {
        // TODO: store character and router on this
    }

    render() {
        // TODO: create the outer page container div
        // TODO: create and append an h1 heading with the character name
        // TODO: create a grid container div
        // TODO: loop over this.character.starters and build one button per starter
        // TODO: append the grid to the page and return the page
    }

    buildStarterButton(starter) {
        // TODO: create a button element
        // TODO: create a span for the input notation (e.g. "5P")
        // TODO: create a span for the friendly label (e.g. "Standing")
        // TODO: append both spans to the button
        // TODO: add a click event listener that calls this.router.navigate()
        // TODO: return the button
    }
}