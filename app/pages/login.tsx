import "@/assets/styles/login.css";
import logo from '../../assets/images/logo.png';

export default function Login() {
  return (
    <div className="login-container">
      <div className="login-header">
        <img src="../../assets/images/logo_login.png" alt="Logo" />
        <h2>Bem-Vindo de Volta</h2>
        <p>Por favor faça login na tua conta.</p>
      </div>

      <div className="login-form">
        <label>Email</label>
        <input type="email" placeholder="exemplo123@gmail.com" />

        <label>Senha</label>
        <input type="password" placeholder="********" />

        <div className="login-options">
          <label>
            <input type="checkbox" />
            Lembrar de mim
          </label>

          <a href="#">Esqueceu a senha?</a>
        </div>

        <button>Entrar</button>
      </div>
    </div>
  );
}
