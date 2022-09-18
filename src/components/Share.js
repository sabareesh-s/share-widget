import PropTypes from "prop-types";
import PublicIcon from '@mui/icons-material/Public';
import {TextField, Button} from '@mui/material';

function Share({ label, size: mode = "dark", handleClick }) {
  let darkMode = false;
  if (mode === "dark") darkMode = true;
  if (mode === "light") darkMode = false;

  return (
    <div>
      <Button onClick={handleClick}>
        {label}
      </Button>
      <div>
      <PublicIcon/>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </div>
    </div>
  );
}

Share.propTypes = {
  label: PropTypes.string,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  handleClick: PropTypes.func,
};

export default Share;
