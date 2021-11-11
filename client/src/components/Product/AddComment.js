import { TextField, Typography } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import { Rating } from "@material-ui/lab";
import { useState } from "react";
import commentStore from "../../store/commentStore";
import userStore from "../../store/userStore";

const AddComment = () => {
  const [value, setValue] = useState(0);
  const [cmt, setCmt] = useState();

  const { user } = userStore();
  const { addComment } = commentStore();

  const createComment = () => {
    const info = {
      username: user.username,
      picture: user.picture,
      comment: cmt,
      rating: value,
    };
    addComment(info);
    setValue(0);
    setCmt("");
  };

  return (
    <div className="commentProduct">
      <div>
        <Typography component="legend">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rate:</Typography>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      </div>
      &nbsp; &nbsp; &nbsp;
      <TextField value={cmt} onChange={(e) => setCmt(e.target.value)} fullWidth id="standard-secondary" label=" Thêm bình luận" color="secondary" />
      <SendIcon onClick={(e) => createComment()} className="commentButton" />
    </div>
  );
};

export default AddComment;
