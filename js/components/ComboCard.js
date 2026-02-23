/*
    js/components/ComboCard.js
    --------------------------
    Displays one combo: its notation row, stats, video, and notes.
    Created once per combo by ComboDetailPage.

    HINTS:
    - Import NotationParser and VideoPlayer at the top so you can use them
    - new NotationParser() creates an instance you can call .render() on
    - new VideoPlayer(url, fallback) creates a video player you can call .render() on
    - element.classList.add() can be called multiple times to add multiple classes
    - if (this.combo.isOptimal) lets you conditionally add the optimal class
    - if (this.combo.videoUrl) lets you conditionally add the video section
    - if (this.combo.notes) lets you conditionally add the notes paragraph
    - Template literals: `Meter: ${value}` builds display strings from data
    - A small helper function inside a method avoids repeating the same code
*/

import { NotationParser } from "./NotationParser.js";
import { VideoPlayer } from "./VideoPlayer.js";

export class ComboCard {

    constructor(combo) {
        // TODO: store combo on this
        // TODO: create a new NotationParser instance and store it on this
    }

    render() {
        // TODO: create the outer card div with class "combo-card"
        // TODO: if the combo is optimal, also add the class "combo-card--optimal"

        // TODO: use this.notationParser.render() to build the notation row
        //       and append it to the card

        // TODO: call this.buildStatsRow() and append the result to the card

        // TODO: if this.combo.videoUrl exists, create a VideoPlayer,
        //       call .render() on it, and append it to the card

        // TODO: if this.combo.notes exists, create a <p> with class "combo-notes"
        //       set its textContent, and append it to the card

        // TODO: return the card
    }

    buildStatsRow() {
        // TODO: create a container div with class "combo-stats"

        // TODO: write a small helper function that creates a <span>
        //       with class "combo-stat" and a given label and value
        //       e.g. "Damage: 1650"

        // TODO: use the helper to create and append stats for:
        //       damage, meter cost, and difficulty

        // TODO: if the combo is optimal, create a span with class "optimal-badge"
        //       set its text to "Optimal" and append it

        // TODO: return the container
    }
}