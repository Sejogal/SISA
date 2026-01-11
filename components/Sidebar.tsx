import style from "@/assets/styles/style";
import { Link } from "expo-router";
import React from "react";
import logo from "@/assets/images/Logo.png";
import "../assets/styles/Sidebar.css";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="logo-container">
                <img src={logo} alt="Logo" className="logo" />
                <img src="https://via.placeholder.com/150" alt="Test" />
            </div>

            <div className="menu">
                <Link href="/" className="botao" >
                    <p style={style.texto} >Dashboard</p>
                </Link>
                <Link href="/pages/energia" className="botao" >
                    <p style={style.texto} >Energia</p>
                </Link>
                <Link href="/pages/energia" className="botao" >
                    <p style={style.texto} >Gestão da Bateria</p>
                </Link>
                <Link href="/pages/energia" className="botao" >
                    <p style={style.texto} >Alertas e Segurança</p>
                </Link>
                <Link href="/pages/energia" className="botao" >
                    <p style={style.texto} >Manutenção</p>
                </Link>
                <Link href="/pages/energia" className="botao" >
                    <p style={style.texto} >Edificio</p>
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;
