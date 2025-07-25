import React from "react";
import { Routes, Route } from "react-router-dom";

import MainPage from "@/pages/MainPage/MainPage";

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        {/* Сюда добавлять маршруты */}
      </Routes>
    </>
  );
};

export default App;
