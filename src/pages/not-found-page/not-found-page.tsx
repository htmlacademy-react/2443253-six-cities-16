
import Logo from '../../components/logo/logo';

function NotFoundPage(): JSX.Element {
  return (
    <div style={{height:'100vh', display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
      <h1 className="offer__name" >Page not found. Error 404.</h1>
      <Logo />
    </div>
  );

}
export default NotFoundPage;

