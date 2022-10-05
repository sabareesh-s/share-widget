import * as React from "react";

import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";
import PublicIcon from "@mui/icons-material/Public";

import "../styles/styles.css";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import InsertLinkOutlinedIcon from "@mui/icons-material/InsertLinkOutlined";
import CancelIcon from "@mui/icons-material/Cancel";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Face3Icon from "@mui/icons-material/Face3";
import ShareIcon from "@mui/icons-material/Share";

function Share({ label, button = "primary", backgroundColor = "#ffffff" }) {
  const [popoverShare, setPopoverShare] = React.useState(false);
  const [selected, setSelected] = React.useState("Choose One");

  const [names, setNames] = React.useState([
    { id: 1, name: "Tim Cook", type: "person" },
    { id: 2, name: "Kim Brooks", type: "person" },
    { id: 3, name: "Erika Gonzalez", type: "person" },
    { id: 4, name: "Margarita Patterson ", type: "person" },
    { id: 5, name: "Percy French", type: "person" },
    { id: 6, name: "Engineering", type: "group" },
    { id: 7, name: "Product", type: "group" },
  ]);

  const handleShareClick = () => {
    setPopoverShare(!popoverShare);
    setFirstPopover(!firstPopover);
  };

  const [listPopover, setListPopover] = React.useState(false);

  const handleSearchClick = () => {
    setListPopover(!listPopover);
    setPermissionPopover(!permissionPopover);
  };

  const [value, setValue] = React.useState();
  // const [inputValue, setInputValue] = React.useState("");
  const [userList, setUserList] = React.useState();
  const [isActive, setIsActive] = React.useState(false);
  // const [selectedUsers, setSelectedUsers] = React.useState([]);
  const [permissionIsActive, setPermissionIsActive] = React.useState(false);
  const options = ["Full access", "Can edit", "Can view", "No access"];
  const [permission, setPermission] = React.useState("Permission");
  const [mouseEnteredUserId, setMouseEnteredUserId] = React.useState();
  const [placeholder, setPlaceholder] = React.useState(false);
  const [firstPopover, setFirstPopover] = React.useState();
  const [permissionPopover, setPermissionPopover] = React.useState();

  React.useEffect(() => {
    if (value) {
      setValue([...value, selected]);
      console.log("value", value.length);
    } else {
      setValue([selected]);
    }
  }, [selected]);

  // const [permission, setPermission] = React.useState("");

  // const handlePermissionChange = (event) => {
  //   setPermission(event.target.value);
  // };

  const handleInvite = () => {
    setUserList(value);
    setValue();
    setPermissionPopover(!permissionPopover);
  };

  return (
    <div
      style={{ backgroundColor: `${backgroundColor}` }}
      onClick={() => {
        if (permissionIsActive) {
          setPermissionIsActive(!permissionIsActive);
        }
      }}
    >
      <button
        onClick={handleShareClick}
        class="button-4"
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "5px",
          alignItems: "center",
        }}
      >
        {label}
        <ShareIcon
          style={{
            fontSize: "15px",
          }}
        />
      </button>
      {/* first popover open */}
      {firstPopover ? (
        <div
          class="popover"
          style={{
            zIndex: "999",
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
                  color: "#6B7280",
                }}
              />
              <div>
                <div style={{}}>Share to web</div>
                <div style={{ fontSize: "13px" }}>
                  Publish and share to anyone
                </div>
              </div>
            </div>
            <label class="toggle" for="myToggle">
              <input
                class="toggle__input"
                name=""
                type="checkbox"
                id="myToggle"
              />
              <div class="toggle__fill"></div>
            </label>
          </div>
          <hr class="solid" />
          <div
            style={{
              margin: "10px",
              padding: "auto",
              display: "flex",
              alignItems: "center",
              gap: "-1px",
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
                // boxSizing: "border-box",
                color: "#24292E",
                cursor: "pointer",
                display: "inline-block",
                lineHeight: "20px",
                listStyle: "none",
                // padding: "6px 16px",
                // position: "relative",
                transition:
                  "background-color 0.2s cubic-bezier(0.3, 0, 0.5, 1)",
                userSelect: "none",
                WebkitUserSelect: "none",
                touchAction: "manipulation",
                // verticalAlign: "middle",
                alignItems: "flex-start",
                // whiteSpace: "nowrap",
                // wordWrap: "break-word",
                height: "35px",
                width: "100%",
              }}
              onClick={handleSearchClick}
            >
              <div
                style={{
                  fontSize: "13px",
                  display: "flex",
                  alignSelf: "flex-start",
                  marginLeft: "5px",
                }}
              >
                People, emails, groups{" "}
              </div>
            </button>
            <button
              onClick={handleSearchClick}
              style={{
                appearance: "none",
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
                transition:
                  "background-color 0.2s cubic-bezier(0.3, 0, 0.5, 1)",
                userSelect: "none",
                WebkitUserSelect: "none",
                touchAction: "manipulation",
                verticalAlign: "middle",
                whiteSpace: "nowrap",
                wordWrap: "break-word",
                height: "35px",
                backgroundColor:
                  mouseEnteredUserId === "invitebutton2"
                    ? "#e8e8e8"
                    : "#F3F4F6",
              }}
              onMouseEnter={() => setMouseEnteredUserId("invitebutton2")}
              onMouseLeave={() => setMouseEnteredUserId()}
            >
              <div>Invite</div>
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
              <div
                style={{
                  height: "35px",
                  width: "35px",
                  marginRight: "8px",
                  backgroundColor: "#fc2339",
                  fontSize: "19px",
                  borderRadius: "50%",
                  display: "flex",
                  color: "#fff",
                }}
              >
                <div
                  style={{
                    margin: "auto",
                  }}
                >
                  <Face3Icon
                    style={{
                      fontSize: "19px",
                    }}
                  />
                </div>
              </div>
              <div>
                <div>Everyone at OSlash</div>
                <div style={{ fontSize: "13px" }}>25 workspace members</div>
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
              <div style={{ fontSize: "13px" }}>No access</div>
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
                marginBottom: "5px",
              }}
            >
              <div style={{ fontSize: "13px" }}>Selected users</div>
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
                    // width: "320px",
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
                        <div
                          style={{
                            height: "35px",
                            width: "35px",
                            marginRight: "8px",
                            backgroundColor: "#b8b6b6",
                            fontSize: "19px",
                            borderRadius: "50%",
                            display: "flex",
                            color: "#fff",
                          }}
                        >
                          <div
                            style={{
                              margin: "auto",
                            }}
                          >
                            {item.name.substring(0, 1)}
                          </div>
                        </div>
                        <div>
                          <div style={{ fontSize: "14px" }}>{item.name}</div>
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
                        <div style={{ fontSize: "13px" }}>
                          {permission === "Permission"
                            ? "not configured"
                            : permission}
                        </div>
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
              <div style={{ fontSize: "13px" }}>Selected groups</div>
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
                    // width: "320px",
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
                        <div
                          style={{
                            height: "35px",
                            width: "35px",
                            marginRight: "8px",
                            backgroundColor: "#b8b6b6",
                            fontSize: "19px",
                            borderRadius: "8px",
                            display: "flex",
                            color: "#fff",
                          }}
                        >
                          <div
                            style={{
                              margin: "auto",
                            }}
                          >
                            {item.name.substring(0, 1)}
                          </div>
                        </div>
                        <div>
                          <div style={{ fontSize: "14px" }}>{item.name}</div>
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
                        <div style={{ fontSize: "13px" }}>
                          {permission === "Permission"
                            ? "not configured"
                            : permission}
                        </div>
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

          <hr class="solid" />

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
              <div style={{ fontSize: "13px" }}>learn about sharing</div>
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
              <div style={{ fontSize: "13px" }}>Copy link</div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {/* second popover open */}
      {permissionPopover ? (
        <div
          class="popoverList"
          style={{
            zIndex: "999",
          }}
        >
          <div
            style={{
              display: "flex",
              // width: "600px",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                margin: "15px",
                flexDirection: "row",
                // gap: "10px",
                // backgroundColor: "yellow",
                justifyContent: "space-between",
                boxShadow:
                  "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
                borderRadius: "6px",
              }}
            >
              {/* <Autocomplete
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
            /> */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  // gap: "3px",
                  borderRadius: "6px",
                }}
              >
                {" "}
                {placeholder === true ? (
                  <div className="dropdown">
                    <div
                      className="dropdown-btn"
                      onClick={(e) => setIsActive(!isActive)}
                    >
                      {value &&
                        value?.map((item) => {
                          return (
                            <div
                              style={{
                                display: "inline-block",
                              }}
                            >
                              {item.name ? (
                                <div
                                  style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    padding: 4,
                                    backgroundColor: "#e8e8e8",
                                    margin: "5px",
                                    alignItems: "center",
                                    gap: "3px",
                                    borderRadius: "7px",
                                    fontSize: "13px",
                                  }}
                                >
                                  <div>{item.name}</div>
                                  <CancelIcon
                                    style={{
                                      fontSize: "16px",

                                      color:
                                        mouseEnteredUserId === item.name
                                          ? "red"
                                          : "#bababa",
                                    }}
                                    onClick={() => {
                                      const newPeople = value.filter(
                                        (person) => person.id !== item.id
                                      );
                                      setNames([...names, item]);
                                      setValue(newPeople);
                                    }}
                                    onMouseEnter={() =>
                                      setMouseEnteredUserId(item.name)
                                    }
                                    onMouseLeave={() => setMouseEnteredUserId()}
                                  />
                                </div>
                              ) : (
                                ""
                              )}
                            </div>
                          );
                        })}
                    </div>
                  </div>
                ) : (
                  <div
                    style={{
                      marginLeft: "30px",
                    }}
                  >
                    Choose users and groups from the list below
                  </div>
                )}
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <div className="permission-dropdown">
                  <div
                    className="dropdown-btn"
                    onClick={(e) => setPermissionIsActive(!permissionIsActive)}
                  >
                    {permission}
                    {permissionIsActive ? (
                      <KeyboardArrowUpIcon />
                    ) : (
                      <KeyboardArrowDownIcon />
                    )}
                  </div>
                  {permissionIsActive && (
                    <div className="dropdown-content">
                      {options.map((option) => (
                        <div
                          onClick={(e) => {
                            setPermission(option);
                            setPermissionIsActive(false);
                          }}
                          className="dropdown-item"
                        >
                          {option}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <button
                  onClick={handleInvite}
                  style={{
                    border: "1px solid rgba(27, 31, 35, 0.15)",
                    borderRadius: "6px 6px 6px 6px",
                    boxShadow:
                      "rgba(27, 31, 35, 0.04) 0 1px 0, rgba(255, 255, 255, 0.25) 0 1px 0 inset",

                    color: "#24292E",
                    cursor: "pointer",
                    display: "inline-block",
                    fontSize: "14px",
                    fontWeight: "500",
                    marginRight: "10px",
                    padding: "6px 16px",
                    position: "relative",
                    transition:
                      "background-color 0.2s cubic-bezier(0.3, 0, 0.5, 1)",

                    height: "100%",
                    backgroundColor:
                      mouseEnteredUserId === "invitebutton1"
                        ? "#e8e8e8"
                        : "#F3F4F6",
                  }}
                  onMouseEnter={() => setMouseEnteredUserId("invitebutton1")}
                  onMouseLeave={() => setMouseEnteredUserId()}
                >
                  <div>Invite</div>
                </button>
              </div>
            </div>
            {/* {value && (
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
          )} */}

            <div
              className="dropdown-content"
              onClick={() => setPlaceholder(true)}
            >
              {names.map(function (name) {
                return (
                  <div
                    onClick={(e) => {
                      setSelected(name);
                      setIsActive(false);
                      const newPeople = names.filter(
                        (person) => person.id !== name.id
                      );
                      setNames(newPeople);
                    }}
                    className="dropdown-item"
                  >
                    {name.type === "person" ? (
                      <>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            padding: 10,
                            paddingLeft: "18px",
                            alignItems: "center",
                            backgroundColor:
                              mouseEnteredUserId === name.id ? "#e8e8e8" : "",
                          }}
                          onMouseEnter={() => setMouseEnteredUserId(name.id)}
                          onMouseLeave={() => setMouseEnteredUserId()}
                        >
                          <div
                            style={{
                              height: "35px",
                              width: "35px",
                              marginRight: "8px",
                              backgroundColor: "#b8b6b6",
                              fontSize: "19px",
                              borderRadius: "50%",
                              display: "flex",
                              color: "#fff",
                            }}
                          >
                            <div
                              style={{
                                margin: "auto",
                              }}
                            >
                              {name.name.substring(0, 1)}
                            </div>
                          </div>

                          <div style={{ fontSize: "13px" }}>{name.name}</div>
                        </div>
                      </>
                    ) : (
                      ""
                    )}

                    {name.type === "group" ? (
                      <>
                        {" "}
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            padding: 10,
                            alignItems: "center",
                            paddingLeft: "18px",

                            backgroundColor:
                              mouseEnteredUserId === name.id ? "#e8e8e8" : "",
                          }}
                          onMouseEnter={() => setMouseEnteredUserId(name.id)}
                          onMouseLeave={() => setMouseEnteredUserId()}
                          className="userStyle"
                        >
                          <div
                            style={{
                              height: "35px",
                              width: "35px",
                              marginRight: "8px",
                              backgroundColor: "#b8b6b6",
                              fontSize: "19px",
                              borderRadius: "8px",
                              display: "flex",
                              color: "#fff",
                            }}
                          >
                            <div
                              style={{
                                margin: "auto",
                              }}
                            >
                              {name.name.substring(0, 1)}
                            </div>
                          </div>

                          <div style={{ fontSize: "13px" }}>{name.name}</div>
                        </div>
                      </>
                    ) : (
                      ""
                    )}
                  </div>
                );
              })}
            </div>

            {/* {value &&
            value?.map((item) => {
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
            })} */}

            <div style={{
  
            }} />

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "7px",
                backgroundColor: "#F9FAFB",
  borderTop: "border-top: 1px solid #CCC" 

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
                <div style={{ fontSize: "13px" }}>learn about sharing</div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {/* second popover close */}
    </div>
  );
}

Share.propTypes = {
  label: PropTypes.string,
  backgroundColor: PropTypes.string,
  button: PropTypes.oneOf(["success", "error", "primary"]),
  handleClick: PropTypes.func,
};

export default Share;
