import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './App.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './RootLayout';
import Home from './pages/Home/Home';
import FileUploader from './pages/FileUploader/FileUploader';
import TooltipPage from './pages/TooltipPage/TooltipPage';
import AccordionPage from './pages/AccordionPage/AccordionPage';
import FormsPage from './pages/FormsPage/FormsPage';
import ImageCropperPage from './pages/ImageCropperPage/ImageCropperPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/file-uploader',
        element: <FileUploader />,
      },
      {
        path: '/tooltip',
        element: <TooltipPage />,
      },
      {
        path: '/accordion',
        element: <AccordionPage />,
      },
      {
        path: '/forms',
        element: <FormsPage />,
      },
      {
        path: '/cropper',
        element: <ImageCropperPage />,
      }
    ]
  }
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
