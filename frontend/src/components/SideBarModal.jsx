import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";  
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import GroupIcon from "./../assets/Group.png";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import Collapse from "@mui/material/Collapse";
import TagOutlinedIcon from "@mui/icons-material/TagOutlined";
import "./SideBarModal.css";
import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded";
import Avatar from "@mui/material/Avatar";
import person1 from "./../assets/person1.jpg";
import person2 from "./../assets/person2.jpg";
import person3 from "./../assets/person3.jpg";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

const SideBarModal = () => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "#ffff",
    border: "2px solid #05317E",
    boxShadow: 24,
    p: 4,

  };
  const [isChannelsOpen, setIsChannelsOpen] = React.useState(false);
  const [isWorkSpaceOpen, setIsWorkSpaceOpen] = React.useState(false);
  const [isMessageOpen, setIsMessageOpen] = React.useState(false);
  const [channels, setChannels] = React.useState(["Channel 1", "Channel 2", "Channel 3"]);
  const [newChannel, setNewChannel] = React.useState("");
  const handleAddChannel = () => {
    if (newChannel.trim() !== "") {
      setChannels([...channels, newChannel.trim()]);
      setNewChannel("");
    }
  };
  const handleChannelsToggle = () => {
    setIsChannelsOpen(!isChannelsOpen);
  };
  const handleWorkSpaceToggle = () => {
    setIsWorkSpaceOpen(!isWorkSpaceOpen);
  };
  const handleMessageToggle = () => {
    setIsMessageOpen(!isMessageOpen);
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const list = (
    <Box sx={{ width: 250}} role="presentation" onClick={() => {}} onKeyDown={() => {}}>
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={handleWorkSpaceToggle}>
            <ListItemText primary="UI Designer" style={{ color: "white" }} />
            <ArrowDropDownOutlinedIcon style={{ color: "white" }} />
          </ListItemButton>
        </ListItem>
      </List>

      <Collapse in={isWorkSpaceOpen} timeout="auto" unmountOnExit>
        <List>
          {["Create Channel", "Add workspace", "Settings", "Sign In", "Sign Out"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Collapse>

      <List>
        {/* channels */}
        <ListItem disablePadding>
          <ListItemButton onClick={handleChannelsToggle}>
            <ArrowDropDownOutlinedIcon style={{ color: "white", opacity: "0.6" }} />
            <ListItemText primary="Channels" style={{ color: "white", opacity: "0.6" }} />
          </ListItemButton>
        </ListItem>
        <Collapse in={isChannelsOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {channels.map((channel) => (
              <ListItem key={channel} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <TagOutlinedIcon style={{ color: "white", opacity: "0.6" }} />
                  </ListItemIcon>
                  <ListItemText primary={channel} style={{ color: "white", opacity: "0.6" }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Collapse>

        <ListItem disablePadding>
          <div>
            {/* <AddBoxRoundedIcon style={{ color: "white", opacity: "0.3" }} /> */}

            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <CloseRoundedIcon
                    onClick={handleClose}
                    style={{ color: "#05317E", cursor: "pointer" }}
                  />
                </div>
                <ListItem disablePadding>
                  <div className="d-flex">
                    <div>
                      <TextField
                        style={{ height: "140px" }}
                        label="New Channel"
                        value={newChannel}
                        onChange={(e) => setNewChannel(e.target.value)}
                        variant="outlined"
                        InputProps={{
                          style: { color: "#000" },
                        }}
                        InputLabelProps={{
                          style: { color: "#000", opacity: "0.6" },
                        }}
                      />
                    </div>
                    <div>
                      <Button
                        onClick={handleAddChannel}
                        variant="contained"
                        style={{ backgroundColor: "#05317E" }}
                      >
                        Add Channel
                      </Button>
                    </div>
                  </div>
                </ListItem>
              </Box>
            </Modal>
          </div>
        </ListItem>

        {/* add channel */}
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AddBoxRoundedIcon style={{ color: "white", opacity: "0.3" }} />
            </ListItemIcon>
            <ListItemText
              primary="Add Channel"
              //   onClick={handleAddChannel}
              onClick={handleOpen}
              style={{ color: "white", opacity: "0.6" }}
            />
          </ListItemButton>
        </ListItem>

        {/* direct message */}
        <ListItem disablePadding>
          <ListItemButton onClick={handleMessageToggle}>
            <ArrowDropDownOutlinedIcon style={{ color: "white", opacity: "0.6" }} />
            <ListItemText
              primary="Direct Message"
              style={{ color: "white", opacity: "0.6" }}
            />
          </ListItemButton>
        </ListItem>

        <Collapse in={isMessageOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Avatar alt="User 1" src={person2} sx={{ width: 50, height: 50 }} />
                </ListItemIcon>
                <ListItemText primary="User 1" style={{ color: "white", opacity: "0.6" }} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Avatar alt="User 2" src={person1} sx={{ width: 50, height: 50 }} />
                </ListItemIcon>
                <ListItemText primary="User 2" style={{ color: "white", opacity: "0.6" }} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Avatar alt="Remy Sharp" src={person3} sx={{ width: 50, height: 50 }} />
                </ListItemIcon>
                <ListItemText primary="User 3" style={{ color: "white", opacity: "0.6" }} />
              </ListItemButton>
            </ListItem>
          </List>
        </Collapse>
      </List>
      <List>
        <ListItemButton>
          <ListItemText primary="New Message" style={{ color: "white" }} />
          <ListItemIcon>
            {/* navigates to new message */}
            <img src={GroupIcon} alt="GroupIcon" />
          </ListItemIcon>
        </ListItemButton>
      </List>
    </Box>
  );

  return (
    <div className="boxModel">
      
       <Drawer
        anchor="left"
        open={true}
        BackdropProps={{ invisible: true}}
        PaperProps={{ style: { position: "absolute" } }}
      >
        {list}
      </Drawer> 
    </div>
  );
};

export default SideBarModal;
