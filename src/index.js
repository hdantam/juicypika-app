import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MyAnimeList from './routes/MAL/myanimelist';
import LeagueOfLegends from './routes/leagueoflegends';
import GenshinImpact from './routes/genshin/genshinimpact';
import Art from './routes/art';
import AllAnime from './routes/MAL/allanime';
import ErrorPage from './routes/errorpage';
import reportWebVitals from './reportWebVitals';
import AnimeInfo from './components/animeinfo';
import { createBrowserRouter, defer, RouterProvider } from 'react-router-dom';
import { myAnimeList, animeId } from './firebase';
import { db } from './firebase';
import {collection, doc, getDocs, getDoc, get} from 'firebase/firestore';
import GenshinChar from './routes/genshin/genshinchar';
import GenshinHome from './routes/genshin/genshinhome';

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
            let ret = await getDoc(doc(db, 'MyAnimeListFinal', '1')).then(resp => {
              return resp;
            })
            return ret;
          },
          errorElement: <ErrorPage/>,
          element: <AllAnime />,
          children: [
            {
              path: "/mal/search/:animeid",
              element: <AnimeInfo/>,
              loader: async ({params}) => {
                const docRef = doc(db, 'MyAnimeListFinal', '1');
                const snap = await getDoc(docRef).then(resp => {
                  const ret = resp.data()[params.animeid]
                  return ret;
                })
                return snap;
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
      element: <GenshinHome/>,
      errorElement: <ErrorPage/>,
    },

    {
      path: "/genshin/:server",
      element: <GenshinImpact/>,
      loader: async({params}) => {
        const body = {server: params.server};  
        let ret = await fetch('https://userinfo-fhegirjy4a-uc.a.run.app ', {
          method: "POST",
          /*
          headers: {
            "Content-Type": "application/json"
          },*/
          body: params.server
        }).then(resp =>  {
          return resp.json();
        });
        return ret;
      },
      /*
      children: [
        {
          path: "/genshin/:server/:id",
          element: <GenshinChar/>,
          loader: async({params}) => {
            console.log(params.id);
            const body = {id: params.id, server: params.server};
            return await fetch('http://localhost:3006/genshin', {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(body),
            }).then(resp => resp.json()).then((resp) => console.log(resp))
          },
        },
      ]
      */
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
