import Logo from '../Images/Logo.png'
import '../Styles/Login.css'
import { useNavigate } from "react-router-dom";
import { useState } from 'react'

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [showError, setShowError] = useState(false)
    const [isFocused, setIsFocused] = useState(false)

    const handleHomeClick = () => {
        navigate("/");
        window.location.reload();
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!email.trim()) {
            setShowError(true)
            return
        }
        setShowError(false)
        // Aquí iría la lógica para procesar el inicio de sesión
    }

    const handleInputChange = (e) => {
        setEmail(e.target.value)
    }

    const handleFocus = () => {
        setIsFocused(true)
        setShowError(false)
    }

    const handleBlur = () => {
        setIsFocused(false)
    }

    return (
        <div className="login-container">
            <div className='container-header'>
                <img className='img-logo' src={Logo} alt='Logo de Kabod style' onClick={handleHomeClick}/>
            </div>
            <div className="login-content">
                <div className="login-title">
                    <h1>Ingresa tu e-mail o teléfono para iniciar sesión</h1>
                </div>
                <div className="login-form-container">
                    <form className="login-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label className={`input-label ${showError && !isFocused ? 'error-label' : ''}`}>
                                E-mail o teléfono
                            </label>
                            <input 
                                type="text" 
                                className={`form-control ${showError && !isFocused ? 'error-input' : ''}`}
                                value={email}
                                onChange={handleInputChange}
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                            />
                            {showError && !isFocused && (
                                <div className="error-message">
                                    <i className="bi bi-exclamation-circle"></i>
                                    Completa este dato.
                                </div>
                            )}
                        </div>
                        <button type="submit" className="btn-continue">
                            Continuar
                        </button>
                        <a href="/register" className="create-account">
                            Crear cuenta
                        </a>
                        <div className="divider">
                            <span>o</span>
                        </div>
                        <button type="button" className="btn-google">
                            <img 
                                src="https://developers.google.com/identity/images/g-logo.png" 
                                alt="Google logo" 
                                className="google-icon"
                            />
                            Iniciar sesión con Google
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}