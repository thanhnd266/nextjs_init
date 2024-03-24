import { OutlineButtonStyled } from "./OutlineButtonStyled";

function OutlineButton({ title, onClick, color, borderColor, isLinearGradientBorder, bgColor, disabled }) {
  return (
    <OutlineButtonStyled color={color} $borderColor={borderColor} bgColor={bgColor}>
      <button 
        disabled={disabled} 
        className={`
          ${isLinearGradientBorder ? "outline-button-gradient" : "outline-button"}
          ${disabled ? " outline-button-disabled" : ""}
        `} 
          onClick={onClick}
        >
        {title}
      </button>
    </OutlineButtonStyled>
  );
}

export default OutlineButton;
