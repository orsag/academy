import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import RootLayout from './RootLayout';
import Home from './pages/Home/Home';
import FileUploader from './pages/FileUploader/FileUploader';
import TooltipPage from './pages/TooltipPage/TooltipPage';
import AccordionPage from './pages/AccordionPage/AccordionPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="file-uploader" element={<FileUploader />} />
        <Route path="tooltip" element={<TooltipPage />} />
        <Route path="accordion" element={<AccordionPage />} />
        {/* <Route path="about" element={<About />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="*" element={<NoMatch />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
