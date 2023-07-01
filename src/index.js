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
import { myAnimeList, animeId } from './firebase';
import { db } from './firebase';
import {collection, doc, getDocs, getDoc} from 'firebase/firestore';


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
            const querySnapshot = await getDocs(collection(db, 'MyAnimeList'));
            return querySnapshot;
          },
          errorElement: <ErrorPage/>,
          element: <AllAnime />,
          children: [
            {
              path: "/mal/search/:animeid",
              element: <AnimeInfo/>,
              loader: async ({params}) => {
                const docRef = doc(db, "MyAnimeList", `${params.animeid}`);
                const docSnap = await getDoc(docRef);
                return docSnap;
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
