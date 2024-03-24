import { LoadingScreenStyled } from "./LoadingScreenStyled.js";

const LoadingScreen = ({ isLoading, text }) => {
  return (
    <LoadingScreenStyled>
      <div className={`loading-screen ${isLoading ? "visible" : "hidden"}`}>
        <div className="loading-spinner"></div>
        <p>{text}</p>
      </div>
    </LoadingScreenStyled>
  );
};

export default LoadingScreen;
