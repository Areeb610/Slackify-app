import "../Chatspage/Chatspage.css";
import { useState } from "react";
import CircleIcon from "@mui/icons-material/Circle";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import PhoneIcon from "@mui/icons-material/Phone";
import InfoIcon from "@mui/icons-material/Info";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ReactQuill from "react-quill";
const Chatspage = () => {
  const [editorContent, setEditorContent] = useState("");
  const handleEditorChange = (content) => {
    setEditorContent(content);
  };
  
  return (

    <>
      <div className="chatpage__top">
        <div className="chat__left">
          <CircleIcon className="green" />
          <span>Faizan</span>
          <StarBorderIcon />
        </div>
        <div className="chat__right">
          <PhoneIcon style={
            {
              cursor: "pointer"
          }
          }/>
          <InfoIcon style={
            {
              cursor: "pointer"
            }
          }/>
        </div>
      </div>
      <div className="chats__div">
        <div className="timestamp">
          <div className="left__hr"></div>
          <div className="timetext">
            Monday, March 1st <KeyboardArrowDownIcon />
          </div>
          <div className="right__hr"></div>
        </div>
        {/* Map the chats from database here */}
        {/* <div className="chat">
          <div className="img__div">
            <img src="" alt="profile-pic" className="profile_pic" />
          </div>
          <div className="right__text">
            <div className="sender">
              Salman &nbsp;<span>6:49 PM</span>
            </div>
            <div className="msg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
              deleniti provident dolorem eaque tempora voluptatem officiis in
              temporibus, libero optio debitis? Repudiandae ex mollitia in alias
              quae. In, magnam eaque.
            </div>
          </div>
        </div> */}
        <div>
        <div className="textBox">
        <ReactQuill value={editorContent} onChange={handleEditorChange} />
        <button className="send__btn">Send</button>
        </div>
        </div>
      </div>
    </>
  );
};
export default Chatspage;