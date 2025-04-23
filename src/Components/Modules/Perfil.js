import '../Styles/Perfil.css';
import Menu from './Menu';

export default function Perfil() {
    return (
        <>
            <Menu/>
            <section>
                <div className="sidebar-menu">
                    <div className="menu-item d-flex align-items-center" data-bs-toggle="collapse" data-bs-target="#submenu1" aria-expanded="false">
                        <div className="icon-container">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#0d6efd" className="bi bi-bag" viewBox="0 0 16 16">
                                <path d="M8 1a2 2 0 0 0-2 2v1H3.5A1.5 1.5 0 0 0 2 5.5v8A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 12.5 4H10V3a2 2 0 0 0-2-2zm3 3H5V3a1 1 0 0 1 2 0v1z"/>
                            </svg>
                            <span className="blue-dot"></span>
                        </div>
                        <span className="menu-text">Compras</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down ms-auto" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    </div>

                    <div className="collapse" id="submenu1">
                        <ul className="submenu-list">
                            <li><button className="submenu-item">Compras</button></li>
                            <li><button className="submenu-item">Preguntas</button></li>
                            <li><button className="submenu-item">Opiniones</button></li>
                            <li><button className="submenu-item">Favoritos</button></li>
                            <li><button className="submenu-item">Búsquedas guardadas</button></li>
                        </ul>
                    </div>
                    
                    <div className="menu-item d-flex align-items-center" data-bs-toggle="collapse" data-bs-target="#submenu2" aria-expanded="false">
                        <div className="icon-container">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#0d6efd" className="bi bi-credit-card" viewBox="0 0 16 16">
                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z"/>
                                <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z"/>
                            </svg>
                            <span className="blue-dot"></span>
                        </div>
                        <span className="menu-text">Subscripciones</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down ms-auto" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    </div>

                    <div className="collapse" id="submenu2">
                        <ul className="submenu-list">
                            <li><button className="submenu-item">Comprar subscripciones</button></li>
                            <li><button className="submenu-item">Administrar subscripciones</button></li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}