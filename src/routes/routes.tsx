import { createBrowserRouter } from 'react-router-dom';
import App from '@/App';
import MainPages from '@/pages/MainPages';
import DetailNews from '@/pages/DetailNews';
// import NewsList from '@/pages/ListNews';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
        {
            path: '/',
            element: <MainPages />,
        },
    ],
    },
    {
        path: '/news/:id',
        element: <DetailNews />,
        // children: [
        //     {
        //         path: '/news/:id',
        //         element: <DetailNews />,
        //     },
        // ],
    },
    {
    path: "*",
    element: (
      <>
        <h1 className='text-center justify-center text-4xl text-red-800'>404 - Halaman Tidak Ditemukan</h1>
      </>
    ),
  },
]);

export default router;
