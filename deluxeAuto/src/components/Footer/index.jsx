import "./stylef.css"
import Logo from "../../assets/icons/diamante32.png"

export default function Footer(){
    return (
        <>
             <footer>
                <div class="Logo-Site">
                    <img src={Logo} alt="" />
                    <h2>Deluxe Auto</h2>
                </div>

                <div class="mais-informacoes">
                    <p>Sobre Nós</p>
                    <a href="https://veiculos.fipe.org.br/"><p>Como precificamos nossos carros?</p></a>
                    
                    <p>Política de Privacidade</p>
                    <p>Termos e Condições</p>

                    <a href="https://github.com/gabriellima-4" target="_blank">Feito por Gabriel Lima</a>
            </div>

        </footer>
        </>
    )
}