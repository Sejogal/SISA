import "@/assets/styles/login.css";
import React from "react";
// import logo from '../../assets/images/logo.png';

export default function Login({ estado }) {

  function mudarEstado() {
    estado('inicio');
  }

  return (
    <div className="login-container">
      <div className="login-header">
        <img src="../../assets/images/logo_login.png" alt="Logo" />
        <h2>Bem-Vindo de Volta</h2>
        <p>Por favor faça login na tua conta.</p>
      </div>

      <div className="login-form">
        <label >Email</label>
        <input type="email" placeholder="exemplo123@gmail.com" id="email" />

        <label>Senha</label>
        <input type="password" placeholder="********" id="senha" />

        <div className="login-options">
          <label>
            <input type="checkbox" />
            Lembrar de mim
          </label>

          <a href="#">Esqueceu a senha?</a>
        </div>

        <button onClick={mudarEstado}>Entrar</button>
      </div>
    </div>
  );
}
