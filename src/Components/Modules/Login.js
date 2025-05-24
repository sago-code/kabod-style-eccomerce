import Logo from '../Images/Logo.png'
import '../Styles/Login.css'
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';

export default function Login() {
    const navigate = useNavigate();
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({
        email: false,
        password: false
    });
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [focusedField, setFocusedField] = useState('');

    const handleHomeClick = () => {
        navigate("/");
        window.location.reload();
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setLoginData({
            ...loginData,
            [name]: value
        });
        // Limpiar error cuando el usuario empiece a escribir
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: false
            });
        }
    };

    const handleFocus = (fieldName) => {
        setFocusedField(fieldName);
        if (errors[fieldName]) {
            setErrors({
                ...errors,
                [fieldName]: false
            });
        }
    };

    const handleBlur = () => {
        setFocusedField('');
    };

    const validateForm = () => {
        let tempErrors = {
            email: false,
            password: false
        };
        let isValid = true;

        if (!loginData.email.trim()) {
            tempErrors.email = true;
            isValid = false;
        }

        if (!loginData.password.trim()) {
            tempErrors.password = true;
            isValid = false;
        }

        setErrors(tempErrors);
        return isValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }

        setLoading(true);
        
        try {
            // Realizar petición al endpoint de login
            const response = await axios.post('http://localhost:3002/auth/login', {
                email: loginData.email,
                password: loginData.password
            });

            // Extraer el token y user de la respuesta según la estructura proporcionada
            const { token, user } = response.data;
            
            if (token) {
                // Almacenar token en localStorage (persistente)
                localStorage.setItem('authToken', token);
                
                // Almacenar token en sessionStorage (solo para la sesión actual)
                sessionStorage.setItem('authToken', token);
                
                // Almacenar información completa del usuario
                if (user) {
                    localStorage.setItem('userData', JSON.stringify(user));
                    sessionStorage.setItem('userData', JSON.stringify(user));
                    
                    // También puedes almacenar datos específicos por separado si los necesitas
                    localStorage.setItem('userId', user.id.toString());
                    localStorage.setItem('userRole', user.rol.name);
                    localStorage.setItem('userEmail', user.email);
                    localStorage.setItem('userName', `${user.firstName} ${user.lastName}`);
                }

                // Configurar axios para incluir el token en futuras peticiones
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                
                console.log('Login exitoso:', response.data);
                console.log('Usuario logueado:', user);
                console.log('Token almacenado:', token);
                
                alert(`¡Bienvenido ${user.firstName}! Inicio de sesión exitoso.`);
                
                // Redirigir según el rol del usuario
                if (user.rol.name === 'admin') {
                    navigate('/admin-dashboard');
                } else if (user.rol.name === 'cliente') {
                    navigate('/'); // o navigate('/dashboard') para clientes
                } else {
                    navigate('/'); // ruta por defecto
                }
            } else {
                throw new Error('No se recibió token de autenticación');
            }
            
        } catch (error) {
            console.error('Error en el login:', error);
            
            if (error.response) {
                // Error del servidor
                const errorMessage = error.response.data?.message || 'Credenciales incorrectas';
                alert(`Error: ${errorMessage}`);
            } else if (error.request) {
                // Error de red
                alert('Error de conexión. Verifica tu conexión a internet.');
            } else {
                // Otro tipo de error
                alert('Error inesperado. Inténtalo de nuevo.');
            }
        } finally {
            setLoading(false);
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="login-container">
            <div className='container-header'>
                <img className='img-logo' src={Logo} alt='Logo de Kabod style' onClick={handleHomeClick}/>
            </div>
            <div className="login-content">
                <div className="login-title">
                    <h1>Iniciar sesión</h1>
                    <p>Ingresa tus credenciales para acceder a tu cuenta</p>
                </div>
                <div className="login-form-container">
                    <form className="login-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label className={`input-label ${errors.email && focusedField !== 'email' ? 'error-label' : ''}`}>
                                E-mail
                            </label>
                            <input 
                                type="email" 
                                name="email"
                                className={`form-control ${errors.email && focusedField !== 'email' ? 'error-input' : ''}`}
                                value={loginData.email}
                                onChange={handleInputChange}
                                onFocus={() => handleFocus('email')}
                                onBlur={handleBlur}
                                placeholder="Ingresa tu email"
                            />
                            {errors.email && focusedField !== 'email' && (
                                <div className="error-message">
                                    <i className="bi bi-exclamation-circle"></i>
                                    Completa este dato.
                                </div>
                            )}
                        </div>
                        
                        <div className="form-group">
                            <label className={`input-label ${errors.password && focusedField !== 'password' ? 'error-label' : ''}`}>
                                Contraseña
                            </label>
                            <div className="password-input-container">
                                <input 
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    className={`form-control ${errors.password && focusedField !== 'password' ? 'error-input' : ''}`}
                                    value={loginData.password}
                                    onChange={handleInputChange}
                                    onFocus={() => handleFocus('password')}
                                    onBlur={handleBlur}
                                    placeholder="Ingresa tu contraseña"
                                />
                                <button 
                                    type="button" 
                                    className="password-toggle"
                                    onClick={togglePasswordVisibility}
                                >
                                    <i className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'}`}></i>
                                </button>
                            </div>
                            {errors.password && focusedField !== 'password' && (
                                <div className="error-message">
                                    <i className="bi bi-exclamation-circle"></i>
                                    Completa este dato.
                                </div>
                            )}
                        </div>
                        
                        <button 
                            type="submit" 
                            className="btn-continue"
                            disabled={loading}
                        >
                            {loading ? (
                                <>
                                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                    Iniciando sesión...
                                </>
                            ) : 'Iniciar sesión'}
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