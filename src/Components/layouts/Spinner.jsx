// import css styles
import "./spinner.css";

const Spinner = () => {
  return (
    <div className="spin-wrapper">
      <div className="loader">
        <div className="inner one"></div>
        <div className="inner two"></div>
        <div className="inner three"></div>
      </div>
    </div>
  );
};

export default Spinner;
