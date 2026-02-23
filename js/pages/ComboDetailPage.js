/*
    js/pages/ComboDetailPage.js
    ---------------------------
    Displays all combos for a given starter.
    Finds the matching starter from the character data,
    then creates one ComboCard per combo.

    HINTS:
    - Array.find() returns the first item in an array where a condition is true
      e.g. array.find((item) => item.id === someId)
    - Array.filter() returns a new array of only items where a condition is true
    - The spread operator (...) combines arrays: [...arrayA, ...arrayB]
    - Array.forEach() loops over an array to build elements
    - Import ComboCard at the top so you can use it here
*/

import { ComboCard } from "../components/ComboCard.js";

export class ComboDetailPage {

    constructor(character, starterId, router) {
        // TODO: store character and router on this
        // TODO: use Array.find() to locate the right starter by its id
        //       and store it as this.starter
    }

    render() {
        // TODO: create the outer page container div

        // TODO: if this.starter wasn't found, show an error message and return early

        // TODO: create a back button that calls this.router.navigate("/") on click

        // TODO: create an h1 heading showing the starter input (e.g. "5P Combos")

        // TODO: create a paragraph showing the situation (e.g. "Situation: Standing")

        // TODO: create a container div for the combo list

        // TODO: use filter() to separate optimal and non-optimal combos
        // TODO: combine them with spread so optimal combos appear first
        // TODO: loop over the sorted combos, create a ComboCard for each,
        //       and append it to the combo list container

        // TODO: append everything to the page and return it
    }
}