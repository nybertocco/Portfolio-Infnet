import "./projetos.css"
import img1 from "./assets/img1.png"
import img2 from "./assets/img2.png"
import img3 from "./assets/img3.png"
import img4 from "./assets/img4.png"
import img5 from "./assets/img5.png"
import img6 from "./assets/img6.png"

export default function Projetos() {
    return (
        <div className="projetos">
            <h1>Projetos</h1>
            <card>
                <h2>DevLinks</h2>
                <a href="https://github.com/nybertocco/minhasredes">DevLinks-Github</a>
                <img src={img1}></img>
            </card>

            <card>
                <h2>Biscoito da sorte</h2>
                <a href="https://github.com/nybertocco/BiscoitoDaSorte">BiscoitoDaSorte-Github</a>
                <img src={img2}></img>
            </card>

            <card>
                <h2>Github favorites</h2>
                <a href="https://github.com/nybertocco/GitHub-Favorites">GithubFavorites-Github</a>
                <img src={img3}></img>
            </card>

            <card>
                <h2>Agenda</h2>
                <a href="https://github.com/nybertocco/Agenda">Agenda-Github</a>
                <img src={img4}></img>
            </card>
            <card>
                <h2>Formulário</h2>
                <a href="https://github.com/nybertocco/projeto-form">Formulario-Github</a>
                <img src={img5}></img>
            </card>
            <card>
                <h2>Explore sem limites</h2>
                <a href="https://github.com/nybertocco/explore-sem-limites">Explore sem limites-Github</a>
                <img src={img6}></img>
            </card>
        </div>
    )
}