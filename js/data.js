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
                Examples:
                {
                    id: ,
                    notationString: ,
                    damage: null,
                    meterCost: 0,
                    difficulty: ,
                    situation: null,
                    isOptimal: false,
                    notes: ,
                    videoUrl: null,
                    videoFallbackImage: "/images/5P/GGST_Slayer_5P.png"
                },
            */
            combos: [
                {
                    id: "5P-optimal-1",
                    notationString: "5P > 2S dl 2H > 214P~P > C.S 2S dl 2H 214P~P > C.S 2S 2H 214P~P", // raw string, NotationParser will display this visually
                    damage: 166,
                    meterCost: 0,         // 0 = no meter, 50 = half, 100 = full bar
                    difficulty: "Hard",   // Easy | Medium | Hard
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
                    difficulty: "Hard",
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
            id: "2P",
            input: "2P",
            label: "2P Starter",
            Situation: "On the ground",
            combos: [
                {
                    id: "2P-hit-confirm",
                    notationString: "2P > 2P 236K",
                    damage: null,
                    meterCost: 0,
                    difficulty: "Easy",
                    situation: null,
                    isOptimal: false,
                    notes: "Basic hitconfirm on mashes. Can get up to 3 2P depending on initial spacing.",
                    videoUrl: null,
                    videoFallbackImage: "/images/5P/GGST_Slayer_5P.png"
                },
                {
                    id: "2P-counterhit",
                    notationString: "CH 2P > 5K 236K",
                    damage: null,
                    meterCost: 0,
                    difficulty: "Easy",
                    situation: "CH",
                    isOptimal: false,
                    notes: "Confirm from a counterhit 2P. Can use 2D in replacement for 236K, but when 2P is max range.",
                    videoUrl: null,
                    videoFallbackImage: "/images/5P/GGST_Slayer_5P.png"
                },
                {
                    id: "2P-counterhit-optimal",
                    notationString: "CH 2P > C.S F.S > 5K 236K",
                    damage: null,
                    meterCost: 0,
                    difficulty: "Medium",
                    situation: "CH",
                    isOptimal: true,
                    notes: "Close range counterhit confirm off of 2P.",
                    videoUrl: null,
                    videoFallbackImage: "/images/5P/GGST_Slayer_5P.png"
                },
                {
                    id: "2P-metered-hit-confirm",
                    notationString: "2P > 2P 236K > 66RRC > 66 214K~P > C.S 2S 2H 214P~P",
                    damage: null,
                    meterCost: 0,
                    difficulty: "Medium",
                    situation: null,
                    isOptimal: false,
                    notes: "Cashout confirm on 2P mash.",
                    videoUrl: null,
                    videoFallbackImage: "/images/5P/GGST_Slayer_5P.png"
                },
                {
                    id: "2P-counterhit-metered",
                    notationString: "CH 2P > 5K 236K > 66RRC > 66 214K~P > C.S 2S 2H 214P~P",
                    damage: null,
                    meterCost: 0,
                    difficulty: "Medium",
                    situation: "CH",
                    isOptimal: false,
                    notes: "Counterhit 2P cashout combo.",
                    videoUrl: null,
                    videoFallbackImage: "/images/5P/GGST_Slayer_5P.png"
                },
            ]
        },
        {
            id: "6P",
            input: "6P",
            label: "6P Starter",
            Situation: "Airborne",
            combos: [
                {
                    id: "6P-hit-confirm",
                    notationString: "6P 236K",
                    damage: null,
                    meterCost: 0,
                    difficulty: "Easy",
                    situation: null,
                    isOptimal: false,
                    notes: "Basic anti air confirm",
                    videoUrl: null,
                    videoFallbackImage: "/images/5P/GGST_Slayer_5P.png"
                },
                {
                    id: "6P-counterhit",
                    notationString: "CH 6P 214P~P",
                    damage: null,
                    meterCost: 0,
                    difficulty: "Easy",
                    situation: "Airborne CH",
                    isOptimal: false,
                    notes: "Basic anti air counterhit",
                    videoUrl: null,
                    videoFallbackImage: "/images/5P/GGST_Slayer_5P.png"
                },
                {
                    id: "6P-optimal-counterhit",
                    notationString: "CH 6P 214P~P > C.S 2S 2H 214P~P",
                    damage: null,
                    meterCost: 0,
                    difficulty: "Medium",
                    situation: "Airborne CH",
                    isOptimal: true,
                    notes: "At certain heights after a counterhit 6P, pilebunker will loop. Not consistent.",
                    videoUrl: null,
                    videoFallbackImage: "/images/5P/GGST_Slayer_5P.png"
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
                    id: "5K-knockdown",
                    notationString: "5K 2D",
                    damage: null,
                    meterCost: 0,
                    difficulty: "Easy",
                    situation: null,
                    isOptimal: false,
                    notes: "Basic hitconfirm into oki.",
                    videoUrl: null,
                    videoFallbackImage: "/images/5P/GGST_Slayer_5P.png"
                },
                {
                    id: "5K-whiff-punish",
                    notationString: "5K 236K",
                    damage: null,
                    meterCost: 0,
                    difficulty: "Easy",
                    situation: null,
                    isOptimal: false,
                    notes: "5K whiff punish on ranges where 2D cannot reach",
                    videoUrl: null,
                    videoFallbackImage: "/images/5P/GGST_Slayer_5P.png"
                },
                {
                    id: "5K-counterhit",
                    notationString: "5K 6H 214P~P",
                    damage: null,
                    meterCost: 0,
                    difficulty: "Easy",
                    situation: "Standing CH",
                    isOptimal: true,
                    notes: "Counterhit confirm on standing opponents.",
                    videoUrl: null,
                    videoFallbackImage: "/images/5P/GGST_Slayer_5P.png"
                },
                {
                    id: "5K-metered-optimal",
                    notationString: "5K 236K > 66RRC > 66 214K~P > C.S 2H 214P~P > C.S 2S 2H 214P~P",
                    damage: 0,
                    meterCost: 50,
                    difficulty: "Medium",
                    situation: "midscreen",
                    isOptimal: true,
                    notes: "Uiversal metered whiff punish.",
                    videoUrl: null,
                    videoFallbackImage: "/images/5P/GGST_Slayer_5P.png"
                },
                {
                    id: "5K-metered-hit-confirm",
                    notationString: "5K 2D 236P > 66FRC 2S 214K~P > C.S dl 2S 2H 214P~P > C.S 2S 2H 214P~P",
                    damage: 0,
                    meterCost: 50,
                    difficulty: "Hard",
                    situation: null,
                    isOptimal: true,
                    notes: "5K 2D metered hit-confirm",
                    videoUrl: null,
                    videoFallbackImage: "/images/5P/GGST_Slayer_5P.png"
                },
                {
                    id: "5K-universe",
                    notationString: "Universe 5K 2D > 6 C.S 2S 214K~P > C.S dl 2S 2H 214P~P > C.S 2S 2H 214P~P",
                    damage: null,
                    meterCost: 0,
                    difficulty: "Hard",
                    situation: "Universe",
                    isOptimal: true,
                    notes: "Universe optimal confirm off of 5K.",
                    videoUrl: null,
                    videoFallbackImage: "/images/5P/GGST_Slayer_5P.png"
                },

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
                    situation: null,
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
                    situation: null,
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
                    situation: null,
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

