import Link from "next/link";
import React from "react";
import { GradientButtonStyled } from "./GradientButtonStyled";

function GradientButton({
  title = "Nút ấn",
  type,
  onClick,
  disabled = false,
  style,
  isLink,
  link,
}) {
  return (
    <GradientButtonStyled>
      {isLink ? (
        <div className={`VDFKHCXTLJ`}>
          <Link target="_blank" href={link}>
            <button
              className="RBOSGVWWES"
              type={type}
              onClick={onClick}
              disabled={disabled}
              style={style}
            >
              {title}
            </button>
          </Link>
        </div>
      ) : (
        <div
          className="MLULNGVQNK"
          style={{
            backgroundImage: disabled
              ? "none"
              : "linear-gradient(to right, rgba(42, 208, 61, 0.3), transparent)",
          }}
        >
          <button
            className="RBOSGVWWES"
            type={type}
            onClick={onClick}
            disabled={disabled}
            style={style}
          >
            {title}
          </button>
        </div>
      )}
    </GradientButtonStyled>
  );
}

export default GradientButton;
