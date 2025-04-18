import PenViewer from "./PenViewer"

const Sections = ({ setAudioVol }) => {
    return (
        <>
            <div id="welcome-section" className="section">
                <h3>Hola, soy</h3>
                <h1>Federico G. Iglesias</h1>
                <h4>aka</h4>
                <div><div className="sbody2"><h1 className="sbody">S-body</h1></div></div>
                <h2>programador, modder y desarrollador web</h2>
                <h4>(ponele)</h4>
            </div>

            <dir className="sectionBgFade" />

            <div id="projects" className="section">
                <div className="sectionBg bgW" />
                <h1>CERTIFICACIONES</h1>
                <h4>de FreeCodeCamp</h4>
                <a target="_blank" className="project-tile" href="https://www.freecodecamp.org/certification/S-body/front-end-development-libraries">Front End</a>
                <a target="_blank" className="project-tile" href="https://www.freecodecamp.org/certification/S-body/javascript-algorithms-and-data-structures">JavaScript</a>
                <a target="_blank" className="project-tile" href="https://www.freecodecamp.org/certification/S-body/responsive-web-design">HTML + CSS</a>
            </div>

            <dir className="sectionBgFade" />

            <div id="pens" className="section">
                <div className="sectionBg bgB" />
                <h1>PENS</h1>
                <h4>de CodePen</h4>
                {/*
                <p className="codepen" data-height="600" data-theme-id="dark" data-default-tab="result" data-slug-hash="zYXzeWM" data-pen-title="JavaScript Calculator v2" data-user="s-body"
                    style={{ height: "600px", boxSizing: "border-box", display: "flex", alignItems: "center", justifyContent: "center", border: "2px solid", margin: "1em 0", padding: "1em", }}>
                    <span>See the Pen <a href="https://codepen.io/s-body/pen/zYXzeWM">
                        JavaScript Calculator v2</a> by Federico (<a href="https://codepen.io/s-body">@s-body</a>)
                        on <a href="https://codepen.io">CodePen</a>.</span>
                </p>
                <script async src="https://public.codepenassets.com/embed/index.js"></script>
                */}
                <div className="flexH alignC wrap">
                    <PenViewer name="JavaScript Calculator" metadata={["zYXzeWM"]} img="https://i.imgur.com/PMxL1cb.png" setAudioVol={setAudioVol} />
                    <PenViewer name="Pomodoro Clock" metadata={["WbNjYxJ"]} img="https://i.imgur.com/QvK56RF.png" setAudioVol={setAudioVol} />
                </div>
            </div>

            <dir className="sectionBgFade" />

            <div id="modding" className="section modding">
                <div className="sectionBg bgW" />
                <h1>MODDING</h1>
                <h4>Hago mods del TBOI: Rebirth</h4>
                <h4>(no sé que hace esto acá)</h4>
                <div className="mods-showcase">
                    <a target="_blank" href="https://steamcommunity.com/sharedfiles/filedetails/?id=854593270">
                        <img loading="lazy" src="https://steamuserimages-a.akamaihd.net/ugc/1863935668905474095/B16309FC1907B2AC02D3C3E6BFFE9E185C0AE0D0/?imw=268&imh=268&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true" />
                        <p>Better Bombs</p>
                    </a>
                    <a target="_blank" href="https://steamcommunity.com/sharedfiles/filedetails/?id=1804267140">
                        <img loading="lazy" src="https://steamuserimages-a.akamaihd.net/ugc/796491922832359498/D707B9544F45400D89CE1F01DF643C5FD49B4261/?imw=268&imh=268&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true" />
                        <p>Missing Tears GFX</p>
                    </a>
                    <a target="_blank" href="https://steamcommunity.com/sharedfiles/filedetails/?id=2749717171">
                        <img loading="lazy" src="https://steamuserimages-a.akamaihd.net/ugc/1863930996016185653/8D07B3140793BEC0DE6A036CF60459E8A92DA93D/?imw=268&imh=268&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true" />
                        <p>Extra animated portraits</p>
                    </a>
                    <a target="_blank" href="https://steamcommunity.com/sharedfiles/filedetails/?id=2802679084">
                        <img loading="lazy" src="https://steamuserimages-a.akamaihd.net/ugc/1884208251114113901/4A1F9F018CEF1FA0E3AC48440F7EB5BA59B8F7EF/?imw=268&imh=268&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true" />
                        <p>Mini pause menu+</p>
                    </a>
                    <a target="_blank" href="https://steamcommunity.com/sharedfiles/filedetails/?id=1230784774">
                        <img loading="lazy" src="https://steamuserimages-a.akamaihd.net/ugc/911281429909622532/1844AFCE58BD3C259C872F283B8A340B5BB02EB9/?imw=268&imh=268&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true" />
                        <p>True Co-op [AB+]</p>
                    </a>
                    <a target="_blank" href="https://steamcommunity.com/sharedfiles/filedetails/?id=2851063440">
                        <img loading="lazy" src="https://steamuserimages-a.akamaihd.net/ugc/1770497792589587008/73EACB2FA279EFB582C348CB3E045D110A557F6B/?imw=268&imh=268&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true" />
                        <p>Fiend Folio</p>
                    </a>
                </div>
            </div>

            <dir className="sectionBgFade" />

            <div id="contact" className="section">
                <div className="sectionBg bgB"></div>
                <h1>CONTACTO</h1>                
                <h4>y demás</h4>
                <a target="_blank" href="https://www.linkedin.com/in/federico-iglesias-68476533b/">Linkedin</a>
                <a target="_blank" id="profile-link" href="https://codepen.io/s-body">CodePen</a>
                <a target="_blank" id="profile-link" href="https://www.freecodecamp.org/S-body">freeCodeCamp</a>
                <a target="_blank" href="https://github.com/Sbody2">GitHub</a>
            </div>
        </>
    )
}
export default Sections