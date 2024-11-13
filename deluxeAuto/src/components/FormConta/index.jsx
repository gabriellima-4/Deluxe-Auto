import "./styleform.css"

export default function FormConta(){
    return(
        <>
            <section id="area">
                <div className="fileiraDivs">
                    <div className="criarConta">
                        <h3>Crie sua conta</h3>
                        <form action="">
                            <input id="nome" type="text" placeholder="Nome Completo" required/>

                            <input id="cpf" type="text" placeholder="CPF" required/>

                            <input id="email" type="email" placeholder="Email" required/>

                            <input id="senha" type="password" placeholder="Senha" required/>

                            <div className="check">
                                <input type="checkbox"/>
                                <p>Quero receber emails sobre novidades da loja.</p>
                            </div>

                            <button type="submit">Criar Conta</button>
                        </form>
                    </div>




                    <div className="entrarConta">
                        <h3>Já possui conta na Deluxe?</h3>
                        <input type="email" placeholder="Email"/>
                        
                        <input type="password" placeholder="Senha"/>
                        <p>Esqueci minha senha</p>

                        <button>Fazer Login</button>
                    </div>
                </div>
            </section>
            
        </>
    )
}