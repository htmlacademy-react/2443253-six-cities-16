
import { Helmet } from 'react-helmet-async';
import Logo from '../../components/logo/logo';

function NotFoundPage(): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 Sities - page not found</title>
      </Helmet>

      <div style={{height:'100vh', display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        <h1 className="offer__name" >Page not found. Error 404.</h1>
        <Logo />
      </div>
    </div>
  );

}
export default NotFoundPage;

