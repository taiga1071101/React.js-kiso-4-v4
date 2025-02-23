import { Link } from 'react-router';

const Home = () => {
  return (
    <div>
      <h1>ホーム</h1>
      <Link to='/self'>自己紹介ページへ</Link>
    </div>
  );
};

export default Home;
