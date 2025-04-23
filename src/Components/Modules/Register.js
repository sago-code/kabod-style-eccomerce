import Logo from '../Images/Logo.png'
import '../Styles/Register.css';
import { useNavigate } from "react-router-dom";

export default function Register() {
    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate("/");
        window.location.reload();
    };

    return (
        <div>
            <div className='container-header'>
                <img className='img-logo' src={Logo} alt='Logo de Kabod style' onClick={handleHomeClick}/>
            </div>
        </div>
    )
}