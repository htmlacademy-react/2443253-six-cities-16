
import { Helmet } from 'react-helmet-async';
import { AppRoute } from '../../const';
import { Link } from 'react-router-dom';

function NotFoundPage(): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 Sities - page not found</title>
      </Helmet>

      <div style={{height:'100vh', display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        <h1 className="offer__name" >Page not found. Error 404.</h1>
        <Link
          to={AppRoute.Main}
        >
          <h2>
            {'>>>'} Go to Main Page {'<<<'}
          </h2>
        </Link>
      </div>
    </div>
  );

}
export default NotFoundPage;

