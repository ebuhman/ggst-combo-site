/*
    js/data.js
    ----------
    This file is your entire database.
    It's just a plain JavaScript object holding all your combo information.

    CONCEPT: Objects and Arrays
    ---------------------------
    - An OBJECT holds named properties:     { name: "Sol", damage: 100 }
    - An ARRAY holds a list of items:       ["5P", "2K", "5H"]
    - Objects and arrays can nest inside each other, which is how
      we build up complex structured data like this.

    CONCEPT: export
    ---------------
    The "export" keyword makes this data available to OTHER files.
    Any file that wants to read combo data will "import" it from here.
    Nothing else in the project should define combo data — it all lives here.
*/

export const characterData = {

    // The character's unique id. You'll use this in URLs like /combos/sol
    id: "slayer",
    name: "Slayer",

    /*
        "starters" is an array of combo starter objects.
        Each starter represents one opening move or situation
        that appears as a button on your StarterSelectPage.
    */
    starters: [
        {
            id: "5P",              // used internally and in URLs
            input: "5P",          // the notation label shown on screen
            label: "5P Starter",  // friendly name shown on the button
            situation: "Airborne", // e.g. Standing, Crouching, Airborne, Counter Hit

            /*
                "combos" is an array of combo objects for THIS starter.
                Each combo is what gets displayed on the ComboDetailPage.
            */
            combos: [
                {
                    id: "5P-optimal-1",
                    notationString: "5P > 2S dl 2H > 214P~P > C.S 2S dl 2H 214P~P > C.S 2S 2H 214P~P", // raw string, NotationParser will display this visually
                    damage: 0,
                    meterCost: 0,         // 0 = no meter, 50 = half, 100 = full bar
                    difficulty: "Medium",   // Easy | Medium | Hard
                    situation: "Airborne",
                    isOptimal: true,      // marks this as the recommended route
                    notes: "Far range anti air 5P route.",
                    videoUrl: "videos/sol-5P-optimal-1.webm",  // path to your video file
                    videoFallbackImage: "images/sol-5P-thumb.png" // shown if video can't load
                },
                {
                    id: "5P-meterless-2",
                    notationString: "5P > C.S 2S dl 2H 214P~P > C.S 2S 2H 214P~P",
                    damage: 0,
                    meterCost: 0,
                    difficulty: "Medium",
                    situation: "Airborne",
                    isOptimal: false,
                    notes: "Close range anti air 5P route.",
                    videoUrl: "videos/sol-5P-meterless-2.webm",
                    videoFallbackImage: "images/sol-5P-thumb.png"
                }

                // TODO: Add more combos here
            ]
        },

        // TODO: Add more starters here following the same structure
        {
            id: "2K",
            input: "2K",
            label: "2K Starter",
            situation: "On the ground",
            combos: [
                {
                    id: "2K knockdown",
                    notationString: "2K > 2D",
                    damage: 0,
                    meterCost: 0,
                    difficulty: "Easy",
                    situation: "Grounded",
                    isOptimal: false,
                    notes: "Basic hard knockdown into okizeme",
                    videoUrl: "Placeholder.webm",
                    videoFallbackImage: "Placholder.png"
                }
            ]
        }
    ]
};
