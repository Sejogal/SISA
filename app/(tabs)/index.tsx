// import Content_Area from '@/components/Content_Area';
// import Navbar from '@/components/Navbar';
// import Sidebar from '@/components/Sidebar';
// import React, { useState } from 'react';
import Login from '../pages/auth/login';

// export default function HomeScreen() {

//   const [auth, setAuth] = useState('login');

//   return(
//     auth === 'inicio' ?
//     <div style={{height:500}} >
//       <Navbar></Navbar>
//       <Sidebar></Sidebar>
//       <Content_Area></Content_Area>
//     </div>
//     :
//     <div>
//       <Login estado={setAuth}></Login>
//     </div>
//   )


// }

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Content_Area from "@/components/Content_Area";

export default function HomeScreen() {
  const [auth, setAuth] = useState("inicio");

  return (
    auth === "inicio" ? (
      <div className="layout">
        <Navbar title="Dashboard" />
        <div className="main">
          <Sidebar />
          <Content_Area />
        </div>
      </div>
    ) : (
      <Login estado={setAuth} />
    )
  );
}
