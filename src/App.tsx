import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import AppRoutes from "./pages/AppRoutes"; // Import your new routes file

const linkStyle: React.CSSProperties = {
  display: "block",
  padding: "8px 16px",
  textDecoration: "none",
  color: "black",
  cursor: "pointer",
};

const menu = [
  ["Dashboard", "/"],
  ["Orders", "/orders"],
  ["Customers", "/customers"],
  ["Reports", "/reports"],
  ["Integrations", "/integrations"],
  [
    ["Current month", "/current-month"],
    ["Last quarter", "/last-quarter"],
    ["Social engagement", "/social-engagement"],
    ["Year-end sale", "/year-end-sale"],
  ],
];

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <div style={{ display: "flex", height: "100vh", fontFamily: "Arial, sans-serif" }}>
          {/* Sidebar */}
          <aside style={{ width: "250px", background: "#f3f4f6", borderRight: "20px solid #ccc", display: "flex", flexDirection: "column",boxSizing: "border-box" }}>
            <div style={{ padding: "16px", fontWeight: "bold" }}>Menu</div>
            <nav style={{ flex: 1 }}>
              
              {menu.map((item, index) => {
                // Handle nested menu group (string[][])
                if (Array.isArray(item) && Array.isArray(item[0])) {
                  return (
                    <div key={index} style={{ padding: "8px 16px", fontWeight: "bold" }}>
                      Saved Reports
                      <div style={{ paddingLeft: "16px" }}>
                        {(item as string[][]).map((subItem, subIndex) => (
                          <Link key={subIndex} to={subItem[1]} style={linkStyle}>
                            {subItem[0]}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                }
                // Handle section title (string)
                if (typeof item === "string") {
                  return (
                    <div key={index} style={{ padding: "8px 16px", fontWeight: "bold" }}>
                      {item}
                    </div>
                  );
                }
                // Handle regular menu item (string[])
                if (Array.isArray(item)) {
                  const to = typeof item[1] === "string" ? item[1] : "/";
                  return (
                    <Link key={index} to={to} style={linkStyle}>
                      {item[0]}
                    </Link>
                  );
                }
                return null;
              })}
            </nav>
          </aside>

          {/* Main content */}
          <div style={{ height:"calc(100vh-56px)",flex:1, display: "flex", flexDirection: "column" }}>
            <header style={{ background: "#000",width:"100%", color: "#fff", padding: "16px", fontWeight: "bold",boxSizing: "border-box" }}>
              Company name
            </header>
            <main style={{ padding: "24px", background: "#fff", flex: 1 , overflowY: "auto", boxSizing: "border-box" }}>
              <AppRoutes />
            </main>
          </div>
        </div>
      </Router>
    </div>
  );
};

export default App;