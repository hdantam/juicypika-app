import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MyAnimeList from './routes/MAL/myanimelist';
import LeagueOfLegends from './routes/leagueoflegends';
import GenshinImpact from './routes/genshinimpact';
import Art from './routes/art';
import AllAnime from './routes/MAL/allanime';
import WatchingAnime from './routes/MAL/watchinganime';
import ErrorPage from './routes/errorpage';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const router = createBrowserRouter([
    {
      path : "/",
      element: <App/>,
      errorElement: <ErrorPage/>
    },
    {
      path: "/mal",
      element: <MyAnimeList/>,
      errorElement: <ErrorPage/>,
      children: [
        {
          path: "/mal/all",
          element: <AllAnime />,
        },
        {
          path: "/mal/watching",
          element: <WatchingAnime />,
        },
      ]
    },
    {
      path: "/lol",
      element: <LeagueOfLegends/>,
      errorElement: <ErrorPage/>
    },
    {
      path: "/genshin",
      element: <GenshinImpact/>,
      errorElement: <ErrorPage/>
    },
    {
      path: "/art",
      element: <Art/>,
      errorElement: <ErrorPage/>
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
