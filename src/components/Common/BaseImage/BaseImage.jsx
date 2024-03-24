import { useEffect, useState } from "react";
import "./BaseImageStyled.scss";
const BaseImage = ({ src, alt, onClick }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
        setImageLoaded(true);
    };
  }, [src]);
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <div
      className={`image-container ${imageLoaded ? "loaded" : ""}`}
      onClick={handleClick}
    >
      {imageLoaded ? (
        <img src={src} alt={alt} />
      ) : (
        <div className="image-placeholder">
        </div>
      )}
    </div>
  );
};

export default BaseImage;
