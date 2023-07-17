import { useState } from "react";
import CircleIcon from "@mui/icons-material/Circle";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import PhoneIcon from "@mui/icons-material/Phone";
import InfoIcon from "@mui/icons-material/Info";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
// import axios from "axios";
import "../Chatspage/Chatspage.css";

const Chatspage = () => {
  const [editorContent, setEditorContent] = useState("");
  const [messages, setMessages] = useState([]);

  // const fetchMessages = async () => {
  //   const sender = 'YourName'; // Replace with the appropriate sender name
  //   const recipient = 'OtherPerson'; // Replace with the appropriate recipient name

  //   try {
  //     const response = await axios.get(`/messages/${sender}/${recipient}`); // Adjust the endpoint URL as per your backend configuration
  //     setMessages(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const handleEditorChange = (content) => {
    setEditorContent(content);
  };

  const handleSend = () => {
    if (editorContent.trim() !== "") {
      const newMessage = {
        sender: 'YourName', // Replace with the appropriate sender name
        recipient: 'OtherPerson', // Replace with the appropriate recipient name
        content: editorContent.trim(),
      };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setEditorContent("");
    }
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
          <PhoneIcon style={{ cursor: "pointer" }} />
          <InfoIcon style={{ cursor: "pointer" }} />
        </div>
      </div>
      <div className="chats__div">
        <div className="timestamp">
          <div className="left__hr"></div>
          <div className="timetext">
            <span>Today</span>
            <KeyboardArrowDownIcon />
          </div>
          <div className="right__hr"></div>
        </div>
        <div className="chat">
          {messages.map((message, index) => (
            <div key={index} className="message">
              <div className="sender">
                {message.sender}&nbsp;
                <span>{message.timestamp}</span>
              </div>
              <div className="msg" dangerouslySetInnerHTML={{ __html: message.content }}></div>
            </div>
          ))}
        </div>
      </div>
      <div className="textBox">
        <ReactQuill value={editorContent} onChange={handleEditorChange} />
        <button className="send__btn" onClick={handleSend}>
          Send
        </button>
      </div>
    </>
  );
};

export default Chatspage;
