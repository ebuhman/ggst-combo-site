export class ResourcePage {

    constructor(router) {
        this.router = router;
    }

    render() {
        const page = document.createElement("div");
        page.classList.add("resources-page");

        const button = document.createElement("button");
        button.classList.add("back-button");
        button.addEventListener("click", () =>{
            this.router.navigate("/PilebunkerLoops/");
        });
        button.textContent = "Back";
        page.appendChild(button);

        const heading = document.createElement("h1");
        heading.textContent = "Resources";
        page.appendChild(heading);

        const showcase = document.createElement("iframe");
        showcase.classList.add("showcase-video");
        showcase.src = "https://www.youtube.com/embed/G-2CC8ewCz8?start=24";
        showcase.allowFullscreen = true;
        showcase.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
        page.appendChild(showcase);

        const videoReference = document.createElement("p")
        videoReference.classList.add("description");
        videoReference.textContent = "This video guide, provided by Mixyous, showcases how pilebunker loops, Slayer's main combo extension, work. The video also provides more combos that I did not feel were necessary to add, but it is a resource I feel like everyone could benefit from. If you feel you would benefit from watching this type of content, I would highly recommend going to Mixyous's channel or twitch. Below are some other resources, including the preceeding YouTube reference. These are for whomever wishes to improve on other areas outside of just combo stucture.";
        page.appendChild(videoReference);

        const youtube = document.createElement("a");
        youtube.href = "https://www.youtube.com/@mixyous"
        youtube.textContent = "Mixyous's YouTube"
        youtube.target = "_blank";

        const dustloop = document.createElement("a");
        dustloop.href = "https://www.dustloop.com/w/GGST/Slayer";
        dustloop.textContent = "Slayer Dustloop";
        dustloop.target = "_blank"; // Opens in new tab

        const discord = document.createElement("a");
        discord.href = "https://discord.gg/jxdNSwsKZu";
        discord.textContent = "Slayer Discord";
        discord.target = "_blank";

        const resourceDiscord = document.createElement("a");
        resourceDiscord.href = "https://discord.gg/H3buVvBvns";
        resourceDiscord.textContent = "GGST Resource Hub";
        resourceDiscord.target = "_blank";

        const linksContainer = document.createElement("div");
        linksContainer.classList.add("resource-links");
        linksContainer.appendChild(youtube);
        linksContainer.appendChild(dustloop);
        linksContainer.appendChild(discord);
        linksContainer.appendChild(resourceDiscord);

        page.appendChild(linksContainer);

        return page;
    }
}