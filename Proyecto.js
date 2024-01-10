import React, { useEffect, useState } from 'react';
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, FacebookAuthProvider, TwitterAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAbdxqhL8jJjQutI2MKnxf4USx1s6fujfI",
  authDomain: "login1-12f59.firebaseapp.com",
  projectId: "login1-12f59",
  storageBucket: "login1-12f59.appspot.com",
  messagingSenderId: "245791262800",
  appId: "1:245791262800:web:a8fbafdc79b1eea9ef6955",
  measurementId: "G-CVZ0S5JV31"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    // Inicializar Firebase si aún no se ha hecho
    if (!firebase.apps.length) {
      initializeApp(firebaseConfig);
    }
  }, []);

  const handleLoginWithEmailAndPassword = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log('Inicio de sesión exitoso: ', userCredential.user);
      alert('Bienvenido');
    } catch (error) {
      console.error('Error durante el inicio de sesión: ', error.message);
      alert('Usuario y/o contraseña inválidos');
    }
  };

  const handleLoginWithProvider = async (provider) => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log('Inicio de sesión exitoso con proveedor: ', result.user);
      alert('Bienvenido');
    } catch (error) {
      console.error('Error durante el inicio de sesión con proveedor: ', error.message);
      alert('Error al iniciar sesión con el proveedor');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <label>Email: </label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <br />
      <label>Password: </label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLoginWithEmailAndPassword}>Iniciar Sesión con Email/Contraseña</button>
      <br />
      <button onClick={() => handleLoginWithProvider(new GoogleAuthProvider())}>Iniciar Sesión con Google</button>
      <button onClick={() => handleLoginWithProvider(new FacebookAuthProvider())}>Iniciar Sesión con Facebook</button>
      <button onClick={() => handleLoginWithProvider(new TwitterAuthProvider())}>Iniciar Sesión con Twitter</button>
    </div>
  );
};

export default Login;
