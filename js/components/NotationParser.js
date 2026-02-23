/*
    js/components/NotationParser.js
    --------------------------------
    Converts a notation string like "5P > 2K > 5H > 236S"
    into a row of styled HTML elements.

    HINTS:
    - String.split(" > ") breaks a string into an array at each " > "
    - Array.map() transforms each item in an array into something new
    - Array.forEach() with an index lets you know when you're on the first item
    - An object used as a lookup table maps tokens to display values
    - The ?? operator returns the right side if the left side is undefined
*/

export class NotationParser {

    constructor() {
        // TODO: create an iconMap object mapping notation tokens to display values
        // e.g. "236" could map to "↓↘→"
    }

    parse(notationString) {
        // TODO: split the string by " > " and map each token into an object
        // each object should have a "raw" and "display" property
    }

    resolve(token) {
        // TODO: look up the token in iconMap, fall back to the raw token if not found
    }

    render(notationString) {
        // TODO: create a container div with class "notation-row"
        // TODO: parse the string and create a span element for each token
        // TODO: add a separator " > " span between tokens (not before the first)
        // TODO: return the container
    }
}