import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MyAnimeList from './routes/MAL/myanimelist';
import LeagueOfLegends from './routes/leagueoflegends';
import GenshinImpact from './routes/genshinimpact';
import Art from './routes/art';
import AllAnime from './routes/MAL/allanime';
import ErrorPage from './routes/errorpage';
import reportWebVitals from './reportWebVitals';
import AnimeInfo from './components/animeinfo';
import { createBrowserRouter, defer, RouterProvider } from 'react-router-dom';


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
          path: "/mal/search",
          loader: async () => {
            return fetch('http://localhost:3007/animelist/all');
          },
          errorElement: <ErrorPage/>,
          element: <AllAnime />,
          children: [
            {
              path: "/mal/search/:animeid",
              element: <AnimeInfo/>,
              loader: async ({params}) => {
                console.log(`params.animeid is: ${params.animeid}`)
                return fetch('http://localhost:3007/animeid', {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    "Content-Length": "<calculated when request is sent>"
                  },
                  body: JSON.stringify({
                    "animeid": params.animeid,
                  })
                })
              },
              errorElement: <ErrorPage/>,
            },
          ]
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

async function loadAnimeList() {
  fetch('http://localhost:3007/animelist')
  .then(result => {
    return result;
  });
}

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
