// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Dashboard from "./pages/Dashboard";
// import VerifyPayment from "./pages/VerifyPayment";
// import AdminPanel from "./pages/AdminPanel";
// import ProtectedRoute from "./components/ProtectedRoutes";
// import { AuthProvider } from "./context/AuthContext";
// const App = () => (
//   <AuthProvider>
//     <BrowserRouter>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Dashboard />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/verify-payment" element={<VerifyPayment />} />
//         <Route
//           path="/admin"
//           element={
//             <ProtectedRoute adminOnly>
//               <AdminPanel />
//             </ProtectedRoute>
//           }
//         />
//       </Routes>
//     </BrowserRouter>
//   </AuthProvider>
// );

// export default App;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/about" element={<div>About Page</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
