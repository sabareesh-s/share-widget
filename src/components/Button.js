import PropTypes from "prop-types";
import PublicIcon from '@mui/icons-material/Public';

function Button({ label, backgroundColor = "#FAFBFC", size = "sm", handleClick }) {
  let scale = 1;
  if (size === "sm") scale = 0.75;
  if (size === "lg") scale = 1.5;
  const style = {
    backgroundColor,
    padding: `${scale * 0.5}rem ${scale * 1}rem`,
    appearance: "none",
    border: "1px solid rgba(27, 31, 35, 0.15)",
    borderRadius: "6px",
    boxShadow:
      "rgba(27, 31, 35, 0.04) 0 1px 0, rgba(255, 255, 255, 0.25) 0 1px 0 inset",
    boxSizing: "border-box",
    color: "#24292E",
    cursor: "pointer",
    display: "inline-block",
    fontFamily: '"Roboto", sans-serif',
    fontSize: "13px",
    fontWeight: "500",
    lineHeight: "20px",
    listStyle: "none",
    position: "relative",
    transition: "background-color 0.2s cubic-bezier(0.3, 0, 0.5, 1)",
    userSelect: "none",
    WebkitUserSelect: "none",
    verticalAlign: "middle",
    touchAction: "manipulation",
    whiteSpace: "nowrap",
    wordWrap: "break-word",
"  &:hover " : {
      backgroundColor: "red",
      textDecoration: "none",
      transitionDuration: "0.1s",
    },
  };

  return (
    <div>
      <button onClick={handleClick} style={style}>
        {label}
      </button>
      <div>
      <PublicIcon/>
      </div>
    </div>
  );
}

Button.propTypes = {
  label: PropTypes.string,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  handleClick: PropTypes.func,
};

export default Button;
