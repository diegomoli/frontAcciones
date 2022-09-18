import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AccionesPage } from '../acciones/pages/AccionesPage';
import { useAuthStore } from '../hooks/useAuthStore';
import { LoginPage } from '../auth/pages/LoginPage'
import { CotizacionPage } from '../acciones/pages/CotizacionPage';



export const AppRouter = () => {

    const { status, checkAuthToken } = useAuthStore();
    // const authStatus = 'not-authenticated'; // 'authenticated'; // 'not-authenticated';

    useEffect(() => {
        checkAuthToken();
    }, [])

    if ( status === 'checking' ) {
        return (
            <div className="spinner-grow" role="status">
              <span className="sr-only">Loading...</span>
            </div>
        )
    }

    
    return (
        <Routes>
            {
                ( status === 'not-authenticated')  
                    ? (
                        <>
                            <Route path="/auth/*" element={ <LoginPage /> } />
                            <Route path="/*" element={ <Navigate to="/auth/login" /> } />
                        </>
                    )
                    : (
                        <>
                            <Route path="/" element={ <AccionesPage /> } />
                            <Route path="/cotizacion" element={ <CotizacionPage /> } />
                            <Route path="/*" element={ <Navigate to="/" /> } />
                        </>
                    )
            }

        </Routes>
    )
}