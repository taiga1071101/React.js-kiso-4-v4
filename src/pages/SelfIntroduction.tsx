import { Link } from 'react-router';

const SelfIntroduction = () => {
  return (
    <>
      <div>
        <h1>自己紹介</h1>
        <p>名前：中山大雅</p>
        <p>所属：株式会社FPC</p>
      </div>
      <Link to='/'>ホーム画面へ</Link>
    </>
  );
};

export default SelfIntroduction;
