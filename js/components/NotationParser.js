/*
    js/components/NotationParser.js
    --------------------------------
    Converts a notation string like "5P > 2K > 5H > 236S"
    into a row of styled HTML elements.
*/

export class NotationParser {

    constructor(iconMap) {
        this.iconMap = { // Replaces shorthand with longer values
            "RC" : "Roman Cancel",
            "CH" : "Counter Hit",
            "W!" : "Wall Stick"
        };
    }

    /* Splits by > and returns an array of strings and .map returns each string as an object 
    raw is the token unchanged, display is what actually gets shown on screen. */
    parse(notationString) {
        return notationString.split(" > ").map((token) => {
            return { raw: token, display: this.resolve(token) };
        });
    }

    resolve(token) {
        return this.iconMap[token] ?? token; // Checks if token is in map, if so, replaces with long hand, if not, returns
    }

    render(notationString) {
        // creates div element for notation row and parses the notationString
        const notationRow = document.createElement("div");
        const tokens = this.parse(notationString);
        // For each value in the parsed tokens, if the index > 0 create a span for >
        tokens.forEach((token, index) => {
            if (index > 0) {
                const separatorSpan = document.createElement("span");
                separatorSpan.textContent = " > ";
                notationRow.appendChild(separatorSpan);
            }
        // Else make a normal span for the notation
            const notationSpan = document.createElement("span");
            notationSpan.classList.add("notation-token");
            notationSpan.textContent = token.display;
            notationRow.appendChild(notationSpan);
        });
        return notationRow;
    }
}