import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth, sendPasswordResetEmail } from "../services/FirebaseAuth";
import "./Reset.css";
function Reset() {
    const [email, setEmail] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (loading) return;
        if (user) navigate("/dashboard");
    }, [user, loading]);
    return (
        <div className="reset">
            <div className="reset__container">
                <input
                    type="text"
                    className="reset__textBox"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Correo electrónico"
                />
                <button
                    className="reset__btn"
                    onClick={() => sendPasswordResetEmail(email)}
                >
                    Mandar correo de inicio de contraseña
                </button>
                <div>
                    ¿No tienes cuenta? <Link to="/register">Registrate</Link> aquí.
                </div>
            </div>
        </div>
    );
}

export default Reset;
