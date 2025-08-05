import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashbord";
import Orders from "./pages/Orders";
import Reports from "./pages/Reports";
import Integrations from "./pages/Integrations";
import SocialEngagement from "./pages/SocialEngagement";
import YearEndSale from "./pages/Year-endsale";
import Settings from "./pages/Settings";
import SignOut from "./pages/Sign out";
import Custemers from "./pages/Custemers";
import Currentmonth from "./pages/Currentmonth";
import Lastquarter from "./pages/lastquarter";


// Move linkStyle above App
const linkStyle: React.CSSProperties = {
  display: "block",
  padding: "8px 16px",
  textDecoration: "none",
  color: "black",
  cursor: "pointer",
};

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <div style={{ display: "flex", height: "100vh", fontFamily: "Arial, sans-serif" }}>
          {/* Sidebar */}
          <aside style={{ width: "250px", background: "#f3f4f6", borderRight: "1px solid #ccc", display: "flex", flexDirection: "column" }}>
            <div style={{ padding: "16px", fontWeight: "bold" }}>Menu</div>
            <nav style={{ flex: 1 }}>
              {menuItems.map((val) => (
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  <li><Link to="/" style={linkStyle}>{title}</Link></li>
                  
                </ul>
              ))}

             
            </nav>
            <div style={{ borderTop: "1px solid #ccc" }}>
              <Link to="/settings" style={linkStyle}>Settings</Link>
              <Link to="/sign-out" style={linkStyle}>Sign out</Link>
            </div>
          </aside>

          {/* Main content */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
            <header style={{ background: "#000", color: "#fff", padding: "16px", fontWeight: "bold" }}>
              Company name
            </header>
            <main style={{ padding: "24px", background: "#fff", flex: 1 }}>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/customers" element={<Custemers />} />
                <Route path="/reports" element={<Reports />} />
                <Route path="/integrations" element={<Integrations />} />
                <Route path="/current-month" element={<Currentmonth />} />
                <Route path="/last-quarter" element={<Lastquarter />} />
                <Route path="/social-engagement" element={<SocialEngagement />} />
                <Route path="/year-end-sale" element={<YearEndSale />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/sign-out" element={<SignOut />} />
              </Routes>
            </main>
          </div>
        </div>
      </Router>
    </div>
  );
};

export default App;


