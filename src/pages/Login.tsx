import { Link } from 'react-router-dom';
import { Form } from '../components/Form';

export const Login = () => {

    return (
        <div className="container flex-column">
            <h2 className="login-title">
                Faça seu <span>login</span> abaixo
            </h2>
            <Form formType="login" />
            <p className="login-subtitle">
                Não possui um cadastro? <Link to="/auth/register"> Cadastre-se </Link> para ficar por dentro das ofertas, novidades e para disfrutar de todas as nossas vantagens!
            </p>
        </div>
    );
};
