import { createBrowserRouter } from 'react-router-dom';
import App from '@/App';
import MainPages from '@/pages/MainPages';
import DetailNews from '@/pages/DetailNews';
import ListNews from '@/pages/ListNews';
import ListAlbum from '@/pages/ListAlbum';
import News from '@/components/News';
import Gallery from '@/components/Gallery';
import SocialMedia from '@/components/SocialMedia';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <MainPages />,
      },
      {
        path: '/berita',
        element: <News />,
      },
      {
        path: '/galeri',
        element: <Gallery />,
      },
      {
        path: '/sosmed',
        element: <SocialMedia />,
      },
      {
        path: 'list-news',
        element: <ListNews />,
      },
      {
        path: '/news/:berita_id',
        element: <DetailNews />,
      },
      {
        path: 'full-album',
        element: <ListAlbum />,
      },
    ],
  },
  {
    path: '*',
    element: (
      <>
        <h1 className='text-center justify-center text-4xl text-red-800 h-screen'>404 - Halaman Tidak Ditemukan</h1>
      </>
    ),
  },

]);export default router;
