import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const NewsList = () => {
  const news = [
    { id: 1, title: 'News 1' },
    { id: 2, title: 'News 2' },
    { id: 3, title: 'News 3' },
  ];

  return (
    <>
        <Header />
      <h1>Daftar Berita</h1>
        <ul>
            {news.map((item) => (
            <li key={item.id}>
                <Link to={`/news/${item.id}`}>{item.title}</Link>
            </li>
            ))}
        </ul>
      <Footer />
    </>
  );
};

export default NewsList;
