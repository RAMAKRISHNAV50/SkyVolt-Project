import React from "react";
import { Suspense } from "react";
let Home=React.lazy(()=>import('./pages/Home'))
let About=React.lazy(()=>import('./pages/About'))
let Dashboard=React.lazy(()=>import("./pages/Dashboard"))
let Contact=React.lazy(()=>import("./pages/Contact"))
let Login=React.lazy(()=>import("./pages/Login"))
let Signup=React.lazy(()=>import("./pages/Signup"))
let AdminDashboard=React.lazy(()=>import("./pages/AdminDashboard"))
import ClientDashboard from "./pages/ClientDashboard";
 let ProtectedRoute=React.lazy(()=>import("./routes/ProtectedRoute"))
 let PageNotFound=React.lazy(()=>import("./routes/ProtectedRoute"))
import Navbar from "./components/Navbar";
import { Routes,Route } from "react-router-dom";
import Footer from "./components/Footer";


function App() {
return (
<>
<Suspense fallback={<span>loading...</span>}>
<Navbar />
<Routes>
<Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
<Route path="/dashboard" element={<Dashboard />} />
<Route path="/contact" element={<Contact />} />
<Route path="/login" element={<Login />} />
<Route path="/signup" element={<Signup />} />
<Route path="/admin-dashboard" element={<ProtectedRoute allowedRole="admin"><AdminDashboard /></ProtectedRoute>}/>
 <Route path="/client-dashboard" element={<ProtectedRoute allowedRole="client"><ClientDashboard /></ProtectedRoute>}/>

<Route path="/admin-dashboard" element={<ProtectedRoute/>}/>
<Route path="/*" element={<PageNotFound/>}/>    
</Routes>
<Footer />
</Suspense>
</>
);
}
export default App;