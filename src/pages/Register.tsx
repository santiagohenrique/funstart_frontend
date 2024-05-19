import { Form } from "../components/Form";

export const Register = () => {
    return(
        <div className="container flex-column">

            <h2 className="register-title">
                Seja bem-vindo! Faça seu <span>cadastro</span> abaixo
            </h2>
            <Form formType="register" />    

        </div>
    );
}