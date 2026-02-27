export const characterData = {

    // The character's unique id. You'll use this in URLs like /combos/sol
    id: "slayer",
    name: "Slayer",

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
                    damage: 166,
                    meterCost: 0,         // 0 = no meter, 50 = half, 100 = full bar
                    difficulty: "Medium",   // Easy | Medium | Hard
                    situation: "Airborne",
                    isOptimal: true,      // marks this as the recommended route
                    notes: "Far range anti air 5P route.",
                    videoUrl: "/videos/P_Normals/5P/5P_Optimal.webm",  // path to your video file
                    videoFallbackImage: "/images/5P/GGST_Slayer_5P.png" // shown if video can't load
                },
                {
                    id: "5P-optimal-2",
                    notationString: "5P > C.S 2S dl 2H 214P~P > C.S 2S 2H 214P~P",
                    damage: 155,
                    meterCost: 0,
                    difficulty: "Medium",
                    situation: "Airborne",
                    isOptimal: false,
                    notes: "Close range anti air 5P route. Will whiff if too far.",
                    videoUrl: "/videos/P_Normals/5P/5P_C.SOptimal.webm",
                    videoFallbackImage: "/images/5P/GGST_Slayer_5P.png"
                },
                {
                    id: "5P-beginner",
                    notationString: "5P > C.S 6H > 214P~P",
                    damage: 116,
                    meterCost: 0,
                    difficulty: "Easy",
                    situation: "Airborne",
                    isOptimal: false,
                    notes: "Close range beginner anti air confirm.",
                    videoUrl: "/videos/P_Normals/5P/5P_C.S.webm",
                    videoFallbackImage: null
                },
                {
                    id: "5P-beginner-2",
                    notationString: "5P > 5K 6H > 214P~P",
                    damage: 110,
                    meterCost: 0,
                    difficulty: "Easy",
                    situation: "Airborne",
                    isOptimal: false,
                    notes: "Universal anti air combo",
                    videoUrl: "/videos/P_Normals/5P/5P_5K.webm",
                    videoFallbackImage: null,
                }
            ]
        },
        {
            id: "5K",
            input: "5K",
            label: "5K Starter",
            situation: "On the ground",
            combos: [
                {

                }

            ]
        }, 
        {
            id: "2K",
            input: "2K",
            label: "2K Starter",
            situation: "On the ground",
            combos: [
                {
                    id: "2K-knockdown",
                    notationString: "2K > 2D",
                    damage: 42,
                    meterCost: 0,
                    difficulty: "Easy",
                    situation: "Grounded",
                    isOptimal: false,
                    notes: "Basic hard knockdown into okizeme",
                    videoUrl: null,
                    videoFallbackImage: "Placholder"
                },
                {
                    id: "Counterhit-2K-confirm",
                    notationString: "CH 2K > 5K 236K",
                    damage: 68,
                    meterCost: 0,
                    difficulty: "Easy",
                    situation: "CH",
                    isOptimal: false,
                    notes: "Far counterhit confirm from 2K",
                    videoUrl: null,
                    videoFallbackImage: null
                },
                {
                    id: "Close-range-counterhit-2K",
                    notationString: "CH 2K > C.S 6H > 214P~P",
                    damage: 114,
                    meterCost: 0,
                    difficulty: "Medium",
                    situation: "CH",
                    isOptimal: true,
                    notes: "Close range counterhit 2K route.",
                    videoUrl: null,
                    videoFallbackImage: null
                },
                {
                    id: "2K-metered-confirm",
                    notationString: "2K 2D 236 > 66FRC 2S 2H 214P~P > C.S 2S 2H 214P~P",
                    damage: 141,
                    meterCost: 50,
                    difficulty: "Easy",
                    situation: "Grounded",
                    isOptimal: true,
                    notes: "Optimal metered 2K confirm with corner carry",
                    videoUrl: null,
                    videoFallbackImage: null
                },
                {
                    id: "2K-metered-confirm-2",
                    notationString: "2K 2D 236P > 66FRC C.S 214P~P > C.S 2S 2H 214P~P",
                    damage: 139,
                    meterCost: 50,
                    difficulty: "Easy",
                    situation: "Grounded",
                    isOptimal: false,
                    notes: "For when you don't want to corner youself against a target with burst",
                    videoUrl: null,
                    videoFallbackImage: null,
                }
            ]
        },
        {
            id: "C.S",
            input: "C.S",
            label: "C.S Starter",
            situation: "On the ground",
            combos: [
                {

                }

            ]
        }, 
        {
            id: "F.S",
            input: "F.S",
            label: "F.S Starter",
            situation: "On the ground",
            combos: [
                {

                }

            ]
        }, 
        {
            id: "2S",
            input: "2S",
            label: "2S Starter",
            situation: "On the ground",
            combos: [
                {

                }

            ]
        }, 
        {
            id: "5H",
            input: "5H",
            label: "5H Starter",
            situation: "On the ground",
            combos: [
                {

                }

            ]
        }, 
        {
            id: "6H",
            input: "6H",
            label: "6H Starter",
            situation: "On the ground",
            combos: [
                {

                }

            ]
        }, 
        {
            id: "2H",
            input: "2H",
            label: "2H Starter",
            situation: "On the ground",
            combos: [
                {

                }

            ]
        }, 
        {
            id: "P_Mappa",
            input: "236P",
            label: "236P Starter",
            situation: "On the ground",
            combos: [
                {

                }

            ]
        }, 
        {
            id: "K_Mappa",
            input: "236K",
            label: "236K Starter",
            situation: "On the ground",
            combos: [
                {

                }

            ]
        }, 
        {
            id: "Dandy",
            input: "214X~X",
            label: "Dandy Followup Startes",
            situation: "On the ground",
            combos: [
                {

                }

            ]
        }, 

        ]
    }

