import { useState } from 'react';
import { Input } from './Input';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

interface Props {
    formType: 'register' | 'login';
}

export const Form = ({ formType } : Props ) => {

    const navigate = useNavigate()
    const { login } = useAuth();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            let response;
            if (formType === 'register') {
                response = await axios.post('http://localhost:8080/auth/register', formData);
                alert('Usuário registrado com sucesso!');
            } else {
                response = await axios.post('http://localhost:8080/auth/login', formData);
                alert('Login bem-sucedido!');
            }
            const {name, token} = response.data
            localStorage.setItem('name', name)
            localStorage.setItem('accessToken', token);
            login(name, token);
            navigate("/")
        } catch (error) {
            console.error('Erro:', error);
            alert('Ocorreu um erro ao processar sua solicitação.');
        }
    };
    
    return (
        <form className="form" onSubmit={handleSubmit}>
            <fieldset className="login-fieldset flex-column">
                {formType === 'register' && (
                    <Input
                        labelText="Nome"
                        inputType="text"
                        inputId="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                )}
                <Input
                    labelText="E-mail"
                    inputType="text"
                    inputId="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <Input
                    labelText="Senha"
                    inputType="password"
                    inputId="password"
                    value={formData.password}
                    onChange={handleChange}
                />
                <input className="submit-btn" type="submit" value="Enviar" />
            </fieldset>
        </form>
    );
};
