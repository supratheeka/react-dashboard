import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashbord";
import Orders from "./Orders";
import Reports from "./Reports";
import Integrations from "./Integrations";
import SocialEngagement from "./SocialEngagement";
import YearEndSale from "./Year-endsale";
import Settings from "./Settings";
import SignOut from "./Sign out";
import Custemers from "./Custemers";
import Currentmonth from "./Currentmonth";
import Lastquarter from "./lastquarter";

const AppRoutes: React.FC = () => (
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
);

export default AppRoutes;