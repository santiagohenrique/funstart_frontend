import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import securityStamp from '../assets/google-safe.png'
import payPalPayment from '../assets/paypal.png'

export const Footer = () => {
    return(
        <footer id="footer">
            
            <div className="footer-info container justify-between">

                <div>
                    <h3 className="footer-info-title">Institucional</h3>
                    <ul className="footer-list flex-column">
                        <li>Sobre nós</li>
                        <li>Pagamento</li>
                        <li>Privacidade</li>
                        <li>Entregas</li>
                        <li>Trocas e devoluções</li>
                    </ul>
                </div>
                <div>
                    <h3 className="footer-info-title">Atendimento</h3>
                    <ul className="footer-list flex-column">
                        <li>Fale conosco</li>  
                        <li>(11) 94996-4103</li>  
                        <li>funstartg@contato.com.br</li>                     
                    </ul>
                </div>
                <div>
                    <h3 className="footer-info-title">Formas de pagamento</h3>
                    <ul>
                        <li>
                            <img src={payPalPayment} />
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="footer-info-title">Redes sociais</h3>
                    <ul className="footer-list flex-column">
                        <li className="footer-list-brands">
                            <FontAwesomeIcon className="footer-media-svg" icon={faFacebookF} />
                            <span>Facebook</span>
                        </li>
                        <li className="footer-list-brands align-center">
                            <FontAwesomeIcon className="footer-media-svg" icon={faInstagram} />
                            <span>Instagram</span>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="footer-info-title">Selos de segurança</h3>
                    <ul className="footer-list flex-column">
                        <img className="security-footer-image" src={securityStamp}  />
                    </ul>
                </div>



            </div>
        </footer>
    );
}