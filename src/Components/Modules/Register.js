import Logo from '../Images/Logo.png'
import '../Styles/Register.css';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import axios from 'axios';

export default function Register() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        age: '',
        email: '',
        password: '',
        confirmPassword: '',
        phone: '',
        photo: ''
    });
    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleHomeClick = () => {
        navigate("/");
        window.location.reload();
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            // Verificar el tamaño del archivo (máximo 1MB)
            if (file.size > 1024 * 1024) {
                alert("La imagen es demasiado grande. El tamaño máximo permitido es 1MB.");
                e.target.value = ''; // Limpiar el input
                return;
            }

            const reader = new FileReader();
            reader.onloadend = () => {
                // Comprimir la imagen antes de convertirla a base64
                const img = new Image();
                img.onload = () => {
                    const canvas = document.createElement('canvas');
                    // Calcular nuevas dimensiones manteniendo la proporción
                    let width = img.width;
                    let height = img.height;
                    
                    // Reducir tamaño si es necesario
                    const MAX_WIDTH = 800;
                    const MAX_HEIGHT = 800;
                    
                    if (width > height) {
                        if (width > MAX_WIDTH) {
                            height *= MAX_WIDTH / width;
                            width = MAX_WIDTH;
                        }
                    } else {
                        if (height > MAX_HEIGHT) {
                            width *= MAX_HEIGHT / height;
                            height = MAX_HEIGHT;
                        }
                    }
                    
                    canvas.width = width;
                    canvas.height = height;
                    
                    const ctx = canvas.getContext('2d');
                    ctx.drawImage(img, 0, 0, width, height);
                    
                    // Obtener la imagen comprimida en formato base64
                    const compressedDataUrl = canvas.toDataURL('image/jpeg', 0.7); // 0.7 es la calidad (70%)
                    const base64String = compressedDataUrl.split(',')[1];
                    
                    setFormData({
                        ...formData,
                        photo: base64String
                    });
                };
                img.src = reader.result;
            };
            reader.readAsDataURL(file);
        }
    };

    const validateForm = () => {
        let tempErrors = {};
        let isValid = true;

        if (!formData.firstName.trim()) {
            tempErrors.firstName = "El nombre es requerido";
            isValid = false;
        }

        if (!formData.lastName.trim()) {
            tempErrors.lastName = "El apellido es requerido";
            isValid = false;
        }

        if (!formData.age) {
            tempErrors.age = "La edad es requerida";
            isValid = false;
        } else if (formData.age < 18) {
            tempErrors.age = "Debes ser mayor de 18 años";
            isValid = false;
        }

        if (!formData.email.trim()) {
            tempErrors.email = "El email es requerido";
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            tempErrors.email = "Email inválido";
            isValid = false;
        }

        if (!formData.password) {
            tempErrors.password = "La contraseña es requerida";
            isValid = false;
        } else if (formData.password.length < 6) {
            tempErrors.password = "La contraseña debe tener al menos 6 caracteres";
            isValid = false;
        }

        if (!formData.confirmPassword) {
            tempErrors.confirmPassword = "Confirma tu contraseña";
            isValid = false;
        } else if (formData.password !== formData.confirmPassword) {
            tempErrors.confirmPassword = "Las contraseñas no coinciden";
            isValid = false;
        }

        if (!formData.phone) {
            tempErrors.phone = "El teléfono es requerido";
            isValid = false;
        } else if (!/^\d{10}$/.test(formData.phone)) {
            tempErrors.phone = "Teléfono inválido (10 dígitos)";
            isValid = false;
        }

        setErrors(tempErrors);
        return isValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            setLoading(true);
            try {
                // Preparar los datos para enviar al servidor
                const userData = {
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                    age: parseInt(formData.age),
                    email: formData.email,
                    password: formData.password,
                    phone: parseInt(formData.phone),
                    photo: formData.photo || "" // Si no hay foto, enviar cadena vacía
                };

                // Obtener la URL base desde las variables de entorno
                const apiUrl = process.env.REACT_APP_API_URL || 'localhost:3002/';
                
                // Realizar la petición POST
                const response = await axios.post(`http://${apiUrl}users`, userData);
                
                console.log("Respuesta del servidor:", response.data);
                alert("¡Registro exitoso!");
                navigate("/login");
            } catch (error) {
                console.error("Error al registrar usuario:", error);
                alert("Error al registrar: " + (error.response?.data?.message || error.message));
            } finally {
                setLoading(false);
            }
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    return (
        <div className="register-container">
            <div className='container-header'>
                <img className='img-logo' src={Logo} alt='Logo de Kabod style' onClick={handleHomeClick}/>
            </div>
            
            <div className="register-content">
                <div className="register-title">
                    <h1>Crea tu cuenta</h1>
                    <p>Completa tus datos para unirte a Kabod-Style</p>
                </div>
                
                <div className="register-form-container">
                    <form className="register-form" onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="firstName" className="form-label">Nombre</label>
                                <input
                                    type="text"
                                    className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                                    id="firstName"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    placeholder="Ingresa tu nombre"
                                />
                                {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
                            </div>
                            
                            <div className="col-md-6 mb-3">
                                <label htmlFor="lastName" className="form-label">Apellido</label>
                                <input
                                    type="text"
                                    className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                                    id="lastName"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    placeholder="Ingresa tu apellido"
                                />
                                {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="age" className="form-label">Edad</label>
                                <input
                                    type="number"
                                    className={`form-control ${errors.age ? 'is-invalid' : ''}`}
                                    id="age"
                                    name="age"
                                    value={formData.age}
                                    onChange={handleChange}
                                    placeholder="Ingresa tu edad"
                                />
                                {errors.age && <div className="invalid-feedback">{errors.age}</div>}
                            </div>
                            
                            <div className="col-md-6 mb-3">
                                <label htmlFor="phone" className="form-label">Teléfono</label>
                                <input
                                    type="tel"
                                    className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Ingresa tu teléfono"
                                />
                                {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                            </div>
                        </div>
                        
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                type="email"
                                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Ingresa tu email"
                            />
                            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                        </div>
                        
                        <div className="mb-3 password-field">
                            <label htmlFor="password" className="form-label">Contraseña</label>
                            <div className="input-group">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="Ingresa tu contraseña"
                                />
                                <button 
                                    className="btn btn-outline-secondary" 
                                    type="button"
                                    onClick={togglePasswordVisibility}
                                >
                                    <i className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'}`}></i>
                                </button>
                                {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                            </div>
                        </div>
                        
                        <div className="mb-3 password-field">
                            <label htmlFor="confirmPassword" className="form-label">Confirmar Contraseña</label>
                            <div className="input-group">
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    placeholder="Confirma tu contraseña"
                                />
                                <button 
                                    className="btn btn-outline-secondary" 
                                    type="button"
                                    onClick={toggleConfirmPasswordVisibility}
                                >
                                    <i className={`bi ${showConfirmPassword ? 'bi-eye-slash' : 'bi-eye'}`}></i>
                                </button>
                                {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword}</div>}
                            </div>
                        </div>
                        
                        <div className="mb-4">
                            <label htmlFor="photo" className="form-label">Foto de perfil (opcional)</label>
                            <input
                                type="file"
                                className="form-control"
                                id="photo"
                                name="photo"
                                onChange={handleFileChange}
                                accept="image/*"
                            />
                        </div>
                        
                        <div className="d-grid gap-2">
                            <button 
                                type="submit" 
                                className="btn btn-primary btn-register"
                                disabled={loading}
                            >
                                {loading ? (
                                    <>
                                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                        Procesando...
                                    </>
                                ) : 'Crear cuenta'}
                            </button>
                        </div>
                        
                        <div className="mt-3 text-center">
                            <p>¿Ya tienes una cuenta? <a href="/login" className="login-link">Iniciar sesión</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}