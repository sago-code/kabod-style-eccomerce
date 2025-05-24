import axios from 'axios';

// Funciones de utilidad para manejar autenticación

export const getToken = () => {
    return localStorage.getItem('authToken') || sessionStorage.getItem('authToken');
};

export const getUserData = () => {
    const userData = localStorage.getItem('userData') || sessionStorage.getItem('userData');
    return userData ? JSON.parse(userData) : null;
};

export const getUserId = () => {
    return localStorage.getItem('userId');
};

export const getUserRole = () => {
    return localStorage.getItem('userRole');
};

export const getUserEmail = () => {
    return localStorage.getItem('userEmail');
};

export const getUserName = () => {
    return localStorage.getItem('userName');
};

export const logout = () => {
    // Limpiar localStorage
    localStorage.removeItem('authToken');
    localStorage.removeItem('userData');
    localStorage.removeItem('userId');
    localStorage.removeItem('userRole');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userName');
    
    // Limpiar sessionStorage
    sessionStorage.removeItem('authToken');
    sessionStorage.removeItem('userData');
    
    // Limpiar header de autorización de axios
    delete axios.defaults.headers.common['Authorization'];
};

export const isAuthenticated = () => {
    return !!getToken();
};

export const isAdmin = () => {
    return getUserRole() === 'admin';
};

export const isClient = () => {
    return getUserRole() === 'cliente';
};

// Función para configurar axios con el token almacenado (útil al cargar la app)
export const setupAxiosAuth = () => {
    const token = getToken();
    if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
};