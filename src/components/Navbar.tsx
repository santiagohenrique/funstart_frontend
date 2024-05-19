interface Props{
    rotate: boolean
}

export const Navbar = ({ rotate }: Props) => {
    return(
        <nav id='nav' className={rotate ? 'rotate-navbar' : ''}>
            <ul className=" container nav-main-list justify-between">
                <li>
                    Playstation
                </li>
                <li>
                    Xbox
                </li>
                <li>
                    Nintendo
                </li>
                <li>
                    Computadores
                </li>
                <li>
                    Colecionáveis
                </li>
                <li>
                    Promoções
                </li>
            </ul>
        </nav>
    );
}