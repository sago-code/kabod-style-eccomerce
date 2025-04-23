import { useNavigate } from "react-router-dom";
import Logo from "../Images/Logo.png";
import Pcompra from "../Images/1_compra.png";
import "../Styles/Menu.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'mdb-ui-kit/css/mdb.min.css';
import 'mdb-ui-kit/js/mdb.es.min.js';
import { useState, useEffect } from "react";
import { Input, Ripple, initMDB, Dropdown } from "mdb-ui-kit";

initMDB({ Input, Ripple });

export default function Menu() {
    const navigate = useNavigate();
    const [userData, setUserData] = useState();

    useEffect(() => {
        initMDB({ Dropdown });
    }, []);

    const handleLogoClick = () => {
        navigate("/");
        window.location.reload();
    };

    const handlePerfilClick = () => {
        navigate("/Perfil");
        window.location.reload();
    };

    return (
        <div className="containerMenu">
            {/*Logo y input de busqueda*/}
            <div className="containerLogoAndSearch">
                <img src={Logo} alt="Logo Kabod Style" className="imgLogo" onClick={handleLogoClick}/>
                <div className="input-group">
                    <div className="form-outline" data-mdb-input-init>
                        <input type="search" id="form1" className="form-control" />
                        <label className="form-label" for="form1">Buscar Producto</label>
                    </div>
                    <button type="button" className="btn btn-primary" data-mdb-ripple-init>
                        <i className="fas fa-search"></i>
                    </button>
                </div>
                <img src={Pcompra} alt="primera compra envio gratis" className="p-compra" />
                <div className="containerEnviarA">
                    <label>Enviar a Santiago:</label>
                    <label className="EnviarAL">
                        <i className="bi bi-geo-alt-fill"></i>Calle 35B Sur #1D - 22
                    </label>
                </div>
            </div>
            {/*Menu principal*/}
            <div className="containerMenuPrincipal">
                {/*Menu Encuentranos y Productos*/}
                <div>
                    <ul className="nav justify-content-start">
                        <li className="nav-item">
                            <div className="containerEncuentranos">
                                <label>Encuentranos en:</label>
                                <label className="encuentranosL">
                                    <a href="https://maps.app.goo.gl/MvfdFZZGCNwUYCdc9" target="_blank" rel="noopener noreferrer" className="EnlaceMaps">
                                        <i className="bi bi-geo-alt-fill"></i>Calle 57A #79G - 04
                                    </a>
                                </label>
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className="btn-group">
                                <button type="button" className="btn btn-transparent dropdown-toggle"
                                    data-mdb-dropdown-init
                                    aria-haspopup="true"
                                    aria-expanded="false">
                                    Camisas
                                </button>
                                <ul className="dropdown-menu">
                                    <li><button className="dropdown-item" type="button">Hombre</button></li>
                                    <li><button className="dropdown-item" type="button">Mujer</button></li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className="btn-group">
                                <button type="button" className="btn btn-transparent dropdown-toggle"
                                    data-mdb-dropdown-init
                                    aria-haspopup="true"
                                    aria-expanded="false">
                                    Pantalones
                                </button>
                                <ul className="dropdown-menu">
                                    <li><button className="dropdown-item" type="button">Hombre</button></li>
                                    <li><button className="dropdown-item" type="button">Mujer</button></li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className="btn-group">
                                <button type="button" className="btn btn-transparent dropdown-toggle"
                                    data-mdb-dropdown-init
                                    aria-haspopup="true"
                                    aria-expanded="false">
                                    Zapatos
                                </button>
                                <ul className="dropdown-menu">
                                    <li><button className="dropdown-item" type="button">Hombre</button></li>
                                    <li><button className="dropdown-item" type="button">Mujer</button></li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className="btn-group">
                                <button type="button" className="btn btn-transparent dropdown-toggle"
                                    data-mdb-dropdown-init
                                    aria-haspopup="true"
                                    aria-expanded="false">
                                    Sudaderas
                                </button>
                                <ul className="dropdown-menu">
                                    <li><button className="dropdown-item" type="button">Hombre</button></li>
                                    <li><button className="dropdown-item" type="button">Mujer</button></li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className="btn-group">
                                <button type="button" className="btn btn-transparent dropdown-toggle"
                                    data-mdb-dropdown-init
                                    aria-haspopup="true"
                                    aria-expanded="false">
                                    Chaquetas
                                </button>
                                <ul className="dropdown-menu">
                                    <li><button className="dropdown-item" type="button">Hombre</button></li>
                                    <li><button className="dropdown-item" type="button">Mujer</button></li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className="btn-group">
                                <button type="button" className="btn btn-transparent dropdown-toggle"
                                    data-mdb-dropdown-init
                                    aria-haspopup="true"
                                    aria-expanded="false">
                                    Accesorios
                                </button>
                                <ul className="dropdown-menu">
                                    <li><button className="dropdown-item" type="button">Hombre</button></li>
                                    <li><button className="dropdown-item" type="button">Mujer</button></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                {/*Menu Iniciar Sesion, Crear cuenta, Perfil, Mis Compras, Favoritos, Notificaciones y Carrito*/}
                {userData && userData.id !== null ? (
                <div className="containerPerfil">
                    <ul className="nav justify-content-end">
                        <li className="nav-item">
                            <div className="btn-group">
                                <button type="button" className="btn btn-transparent dropdown-toggle"
                                    data-mdb-dropdown-init
                                    aria-haspopup="true"
                                    aria-expanded="false">
                                    <i className="bi bi-person-circle" />
                                    Santiago
                                </button>
                                <ul className="dropdown-menu">
                                    <li>
                                        <button className="dropdown-item" onClick={handlePerfilClick}>
                                            Perfil
                                        </button>
                                    </li>
                                    <li><button className="dropdown-item" type="button">Compras</button></li>
                                    <li><button className="dropdown-item" type="button">Historial</button></li>
                                    <li><button className="dropdown-item" type="button">Opiniones</button></li>
                                    <li><button className="dropdown-item" type="button">Cerrar Sesión</button></li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className="btn-group">
                                <a href="/" className="nav-link btn btn-transparent">
                                    Mis Compras
                                </a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className="btn-group">
                                <a href="/" className="nav-link btn btn-transparent">
                                    Favoritos
                                </a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className="btn-group">
                                <a href="/" className="nav-link btn btn-transparent">
                                    <i className="bi bi-bell-fill fs-3"></i>
                                </a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className="btn-group">
                                <a href="/" className="nav-link btn btn-transparent">
                                    <i className="bi bi-cart3 fs-3"></i>
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
                ) : (
                    <div className="containerPerfil">
                        <ul className="nav justify-content-end">
                            <li className="nav-item">
                                <div className="btn-group">
                                    <a href="/Register" className="nav-link btn btn-transparent">
                                        Crea tu cuenta
                                    </a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <div className="btn-group">
                                    <a href="/Login" className="nav-link btn btn-transparent">
                                        Ingresa
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}
