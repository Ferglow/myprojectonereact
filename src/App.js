import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Header from "./components/Header";

/* Se configuró el enrutamiento en la aplicación */
function App() {
  return (
    <Router>
      {/* Se agregó un componente de encabezado aquí */}
      <Header />
      <Routes>
        {/* Se configuró la ruta para la página de inicio */}
        <Route path="/" element={<Home />} />
        {/* Se configuró la ruta para la página del carrito */}
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
