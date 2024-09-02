import "./sobremim.css"
import imgPerson from "./assets/imgPerson.jpg"

export default function SobreMim() {
    return (
        <div className="sobremim">
            <h1>Sobre mim</h1>
            <p>Meu nome é Nycolas Bertocco, estudo programação ja faz um ano, <br/>
            comecei com o YouTube e o curso da RocketSeat. Estou aprendendo muito com a Infnet, <br/> 
            estudo muito, espero que em breve eu consiga meu primeiro emprego.</p>
            <img src={imgPerson}></img>
        </div>
    )
}