import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import EMAIL from "./pages/EMAIL";
import SMS from "./pages/SMS";
import PUSH from "./pages/PUSH";

render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="EMAIL" element={<EMAIL />} />
            <Route path="SMS" element={<SMS />} />
            <Route path="PUSH" element={<PUSH />} />
        </Routes>
    </BrowserRouter>,
    document.getElementById("root")
);
