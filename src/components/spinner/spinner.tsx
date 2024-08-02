import './spinner.css';
export default function Spinner ():JSX.Element{

  return (
    <>
      <div className="loader">
        <div className="inner one"></div>
        <div className="inner two"></div>
        <div className="inner three"></div>
      </div>
      <span className="span-text">
          Loading...
      </span>

    </>
  );

}
