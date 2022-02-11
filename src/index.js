import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import EMAIL from "./EMAIL";
import SMS from "./SMS";
import PUSH from "./PUSH";

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
