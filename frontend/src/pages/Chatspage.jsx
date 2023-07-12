import "./Chatspage.css";
import CircleIcon from "@mui/icons-material/Circle";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import PhoneIcon from "@mui/icons-material/Phone";
import InfoIcon from "@mui/icons-material/Info";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
const Chatspage = () => {
  return (
    <>
      <div className="chatpage__top">
        <div className="chat__left">
          <CircleIcon className="green" />
          <span>Faizan</span>
          <StarBorderIcon />
        </div>
        <div className="chat__right">
          <PhoneIcon />
          <InfoIcon />
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
        <div className="chat">
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
        </div>
        <div className="message-textarea">
          <textarea
            className="message-textarea__input"
            rows={4}
            placeholder="Message"
          />
          <div className="message-icons">
            <button className="slack-message-textarea__editor-button">
              Speed
            </button>
            <button className="slack-message-textarea__editor-button">
              Bold
            </button>
            <button className="slack-message-textarea__editor-button">
              Italic
            </button>
            <button className="slack-message-textarea__editor-button">
              Strikethrough
            </button>
            <button className="slack-message-textarea__editor-button">
              Attachments
            </button>
            <button className="slack-message-textarea__editor-button">
              Number_bullets
            </button>
            <button className="slack-message-textarea__editor-button">
              Bullets
            </button>
            <button className="slack-message-textarea__editor-button">
              Font_Size
            </button>
            <button className="slack-message-textarea__editor-button">
              Mention
            </button>
            <button className="slack-message-textarea__editor-button">
              Emoji
            </button>
            <button className="slack-message-textarea__editor-button">
              Send{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Chatspage;
