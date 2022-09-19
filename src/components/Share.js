import * as React from "react";

import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";
import PublicIcon from "@mui/icons-material/Public";
import {
  Button,
  Typography,
  Popover,
  Divider,
  Switch,
  Avatar,
  Autocomplete,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  TextField,
} from "@mui/material";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import InsertLinkOutlinedIcon from "@mui/icons-material/InsertLinkOutlined";
import ShareIcon from '@mui/icons-material/Share';

const names = [
  { name: "Tim Cook", type: "person" },
  { name: "Kim Brooks", type: "person" },
  { name: "Erika Gonzalez", type: "person" },
  { name: "Margarita Patterson ", type: "person" },
  { name: "Percy French", type: "person" },
  { name: "Engineering", type: "group" },
  { name: "Product", type: "group" },
];

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: "flex",
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 15,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(9px)",
    },
  },
  "& .MuiSwitch-switchBase": {
    padding: 2,
    "&.Mui-checked": {
      transform: "translateX(12px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#177ddc" : "#1890ff",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(["width"], {
      duration: 200,
    }),
  },
  "& .MuiSwitch-track": {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,.35)"
        : "rgba(0,0,0,.25)",
    boxSizing: "border-box",
  },
}));

function Share({ label, size: mode = "dark" }) {
  // let darkMode = false;
  // if (mode === "dark") darkMode = true;
  // if (mode === "light") darkMode = false;

  const [popoverAnchor, setPopoverAnchor] = React.useState(null);

  const handleShareClick = (event) => {
    setPopoverAnchor(event.currentTarget);
  };

  const handleShareClose = () => {
    setPopoverAnchor(null);
  };

  const openPopover = Boolean(popoverAnchor);
  const id = openPopover ? "simple-popover" : undefined;

  const [listAnchorEl, setListAnchorEl] = React.useState(null);

  const handleSearchClick = (event) => {
    setListAnchorEl(event.currentTarget);
  };

  const handleListClose = () => {
    setListAnchorEl(null);
  };

  const openList = Boolean(listAnchorEl);

  const [value, setValue] = React.useState();
  const [inputValue, setInputValue] = React.useState("");
  const [userList, setUserList] = React.useState();

  React.useEffect(() => {
    console.log("value", value);
  }, [value]);

  const [permission, setPermission] = React.useState("");

  const handlePermissionChange = (event) => {
    setPermission(event.target.value);
  };

  const handleInvite = () => {
    setUserList(value);
    setListAnchorEl(null);
    setValue();
  };

  return (
    <div>
 
      <Button onClick={handleShareClick} variant="contained" endIcon={<ShareIcon />}>
  {label}
</Button>
      <Popover
        id={id}
        open={openPopover}
        anchorEl={popoverAnchor}
        onClose={handleShareClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        sx={{
          marginTop: "10px"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "5px",
            alignItems: "center",
            margin: "18px",
            justifyContent: "space-between",
            width: "320px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "5px",
              alignItems: "center",
            }}
          >
            <PublicIcon
              p={5}
              sx={{
                fontSize: "30px",
                marginRight: "10px",
              }}
            />
            <div>
              <Typography variant="subtitle2">Share to web</Typography>
              <Typography variant="caption">
                Publish and share to anyone
              </Typography>
            </div>
          </div>

          <AntSwitch
            defaultChecked
            inputProps={{ "aria-label": "ant design" }}
          />
        </div>
        <Divider />
        <div
          style={{
            margin: "10px",
            padding: "auto",
            display: "flex",
            alignItems: "center",
            gap: "-1px"
          }}
        >
          <button
            style={{
              appearance: "none",
              backgroundColor: "#FAFBFC",
              border: "1px solid rgba(27, 31, 35, 0.15)",
              borderRadius: "6px 0px 0px 6px",
              boxShadow:
                "rgba(27, 31, 35, 0.04) 0 1px 0, rgba(255, 255, 255, 0.25) 0 1px 0 inset",
              boxSizing: "border-box",
              color: "#24292E",
              cursor: "pointer",
              display: "inline-block",
              lineHeight: "20px",
              listStyle: "none",
              // padding: "6px 16px",
              position: "relative",
              transition: "background-color 0.2s cubic-bezier(0.3, 0, 0.5, 1)",
              userSelect: "none",
              WebkitUserSelect: "none",
              touchAction: "manipulation",
              // verticalAlign: "middle",
              alignItems: "flex-start",
              whiteSpace: "nowrap",
              // wordWrap: "break-word",
              height: "35px",
              width: "100%",
            }}
            onClick={handleSearchClick}
          >
            <Typography variant="caption">People, emails, groups </Typography>
          </button>
          <button
            onClick={handleSearchClick}
            style={{
              appearance: "none",
              backgroundColor: "#F3F4F6",
              border: "1px solid rgba(27, 31, 35, 0.15)",
              borderRadius: "0px 6px 6px 0px",
              boxShadow:
                "rgba(27, 31, 35, 0.04) 0 1px 0, rgba(255, 255, 255, 0.25) 0 1px 0 inset",
              boxSizing: "border-box",
              color: "#24292E",
              cursor: "pointer",
              display: "inline-block",
              fontSize: "14px",
              fontWeight: "500",
              lineHeight: "20px",
              listStyle: "none",
              padding: "6px 16px",
              position: "relative",
              transition: "background-color 0.2s cubic-bezier(0.3, 0, 0.5, 1)",
              userSelect: "none",
              WebkitUserSelect: "none",
              touchAction: "manipulation",
              verticalAlign: "middle",
              whiteSpace: "nowrap",
              wordWrap: "break-word",
              height: "35px",
            }}
          >
            <Typography variant="caption">Invite</Typography>
          </button>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "5px",
            alignItems: "center",
            marginTop: "10px",
            marginBottom: "10px",
            marginLeft: "18px",
            marginRight: "18px",
            justifyContent: "space-between",
            width: "320px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "5px",
              alignItems: "center",
            }}
          >
            <Avatar
              sx={{
                height: "35px",
                width: "35px",
                marginRight: "8px",
              }}
              src="/broken-image.jpg"
            />
            <div>
              <Typography variant="subtitle2">Everyone at OSlash</Typography>
              <Typography variant="caption">25 workspace members</Typography>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "3px",
              alignItems: "center",
            }}
          >
            <Typography variant="caption">No access</Typography>
            <KeyboardArrowDownIcon
              sx={{
                fontSize: "15px",
              }}
            />
          </div>
        </div>

        {userList && (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              paddingLeft: "15px",
              marginBottom: "5px"
            }}
          >
            <Typography variant="caption">Selected users</Typography>
          </div>
        )}

        {userList &&
          userList.map((item) => {
            return (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "5px",
                  alignItems: "center",
                  // marginTop: "10px",
                  marginBottom: "5px",
                  marginLeft: "18px",
                  marginRight: "18px",
                  justifyContent: "space-between",
                  width: "320px",
                }}
              >
                {item.type === "person" ? (
                  <>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "5px",
                        alignItems: "center",
                      }}
                    >
                      <Avatar
                        sx={{
                          height: "35px",
                          width: "35px",
                          marginRight: "8px",
                        }}
                      >
                        {" "}
                        {item.name.substring(0, 1)}
                      </Avatar>
                      <div>
                        <Typography variant="subtitle2">{item.name}</Typography>
                      </div>
                    </div>{" "}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "3px",
                        alignItems: "center",
                      }}
                    >
                      <Typography variant="caption">
                        {permission ? permission : "not configured"}
                      </Typography>
                      <KeyboardArrowDownIcon
                        sx={{
                          fontSize: "15px",
                        }}
                      />
                    </div>{" "}
                  </>
                ) : (
                  ""
                )}
              </div>
            );
          })}

        {userList && (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              
              alignItems: "center",
              paddingLeft: "15px",
            }}
          >
            <Typography variant="caption">Selected groups</Typography>
          </div>
        )}

        {userList &&
          userList.map((item) => {
            return (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "5px",
                  alignItems: "center",
                  // marginTop: "-3px",
                  marginBottom: "10px",
                  marginLeft: "18px",
                  marginRight: "18px",
                  justifyContent: "space-between",
                  width: "320px",
                }}
              >
                {item.type === "group" ? (
                  <>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "5px",
                        alignItems: "center",
                      }}
                    >
                      <Avatar
                       variant="rounded"
                        sx={{
                          height: "35px",
                          width: "35px",
                          marginRight: "8px",
                          
                        }}
                      >
                        {" "}
                        {item.name.substring(0, 1)}
                      </Avatar>
                      <div>
                        <Typography variant="subtitle2">{item.name}</Typography>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "3px",
                        alignItems: "center",
                      }}
                    >
                      <Typography variant="caption">
                        {permission ? permission : "not configured"}
                      </Typography>
                      <KeyboardArrowDownIcon
                        sx={{
                          fontSize: "15px",
                        }}
                      />
                    </div>{" "}
                  </>
                ) : (
                  ""
                )}
              </div>
            );
          })}

        <Divider />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "7px",
            backgroundColor: "#F9FAFB",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "3px",
              alignItems: "center",
            }}
          >
            <InfoOutlinedIcon
              sx={{
                fontSize: "15px",
              }}
            />
            <Typography variant="caption">learn about sharing</Typography>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "3px",
              alignItems: "center",
            }}
          >
            <InsertLinkOutlinedIcon
              sx={{
                fontSize: "15px",
              }}
            />
            <Typography variant="caption">Copy link</Typography>
          </div>
        </div>
      </Popover>

      <Popover
        id={id}
        anchorReference="anchorPosition"
        open={openList}
        anchorEl={listAnchorEl}
        onClose={handleListClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        anchorPosition={{ top: 200, left: 420 }}
      >
        <div
          style={{
            display: "flex",
            width: "600px",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              margin: "15px",
              flexDirection: "row",
              gap: "10px",
            }}
          >
            <Autocomplete
              fullWidth
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              inputValue={inputValue}
              onInputChange={(event, newInputValue) => {
                setInputValue(newInputValue);
              }}
              multiple
              id="tags-outlined"
              options={names}
              getOptionLabel={(option) => option.name}
              filterSelectedOptions
              renderInput={(params) => (
                <TextField {...params} label="Search names or groups" />
              )}
              size="small"
            />

            <FormControl sx={{ minWidth: 130 }} size="small">
              <InputLabel id="demo-simple-select-label">Permission</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={permission}
                label="Permission"
                onChange={handlePermissionChange}
              >
                <MenuItem value={"Full access"}>Full access</MenuItem>
                <MenuItem value={"Can edit"}>Can edit</MenuItem>
                <MenuItem value={"Can view"}>Can view</MenuItem>
                <MenuItem value={"No access"}>No access</MenuItem>
              </Select>
            </FormControl>

            <Button onClick={handleInvite}>invite</Button>
          </div>
          {value && (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "5px",
                alignItems: "center",
                paddingLeft: "15px",
                paddingBottom: "8px",
              }}
            >
              <Typography variant="caption">Selected users</Typography>
            </div>
          )}

          {value &&
            value.map((item) => {
              return (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "5px",
                    alignItems: "center",
                    paddingLeft: "15px",
                    marginBottom: "5px",
                  }}
                >
                  {item.type === "person" ? (
                    <>
                      {" "}
                      <Avatar
                        sx={{
                          height: "28px",
                          width: "28px",
                          marginRight: "8px",
                        }}
                      >
                        {" "}
                        {item.name.substring(0, 1)}
                      </Avatar>
                      <div>
                        <Typography variant="caption">{item.name}</Typography>
                      </div>
                    </>
                  ) : (
                    ""
                  )}
                </div>
              );
            })}

          {value && (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "5px",
                alignItems: "center",
                paddingLeft: "15px",
              }}
            >
              <Typography variant="caption">Selected groups</Typography>
            </div>
          )}

          {value &&
            value.map((item) => {
              return (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "5px",
                    alignItems: "center",
                    paddingLeft: "15px",
                    marginBottom: "5px",
                  }}
                >
                  {item.type === "group" ? (
                    <>
                      {" "}
                      <Avatar
                        variant="rounded"
                        sx={{
                          height: "28px",
                          width: "28px",
                          marginRight: "8px",
                        }}
                      >
                        {" "}
                        {item.name.substring(0, 1)}
                      </Avatar>
                      <div>
                        <Typography variant="caption">{item.name}</Typography>
                      </div>
                    </>
                  ) : (
                    ""
                  )}
                </div>
              );
            })}

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "7px",
              backgroundColor: "#F9FAFB",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "3px",
                alignItems: "center",
              }}
            >
              <InfoOutlinedIcon
                sx={{
                  fontSize: "15px",
                }}
              />
              <Typography variant="caption">learn about sharing</Typography>
            </div>
          </div>
        </div>
      </Popover>
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