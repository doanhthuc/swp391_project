import React from "react";
import Avatar from "@material-ui/core/Avatar";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import EditIcon from "@mui/icons-material/Edit";
import commentStore from "../../store/commentStore";
import { countingStarComment } from "../../Helper";

const Comment = () => {
  const { user_comment, deleteComment } = commentStore();

  return (
    <>
      <div className="commentProduct">
        <Avatar alt="Remy Sharp" src="https://nld.mediacdn.vn/2015/luyen2-1429410269773.jpg" />
        <div className="comment1">
          <h4>Lê Văn Luyện ⭐⭐⭐⭐⭐</h4>
          <span>Sản phẩm rất phù hợp cho người vừa ra tù</span>
        </div>
      </div>
      <br />
      <div className="commentProduct">
        <Avatar alt="Remy Sharp" src="https://media-cdn.laodong.vn/storage/newsportal/2019/4/2/666434/11.jpg?w=414&h=276&crop=auto&scale=both" />
        <div className="comment1">
          <h4>Khá Bảnh ⭐⭐⭐</h4>
          <span>Sản phẩm giao hàng trong giờ ngủ trưa, chất lượng đợi kiểm chứng</span>
        </div>
      </div>
      <br />
      <div className="commentProduct">
        <Avatar alt="Remy Sharp" src="https://image.thanhnien.vn/1080/uploaded/congnguyen/2019_09_09/huanhoahong-1_ugww.jpg" />
        <div className="comment1">
          <h4>Huấn Hoa Hồng ⭐⭐⭐⭐⭐</h4>
          <span>Sản phẩm tôi đánh giá rất cao, phải gọi là số 1</span>
        </div>
      </div>
      <br />
      {/* End Local Comment */}
      {user_comment?.map((x) => {
        return (
          <>
            <div key={x.id} className="commentProduct">
              <Avatar alt="Remy Sharp" src={x.picture} />
              <div className="comment1">
                <h4>
                  {x.username} {countingStarComment(x.rating)}
                </h4>
                <span>{x.comment}</span>
              </div>
              <>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <EditIcon style={{ width: "14px", cursor: "pointer" }} />
                &nbsp;&nbsp;
                <HighlightOffIcon onClick={() => deleteComment(x.id)} style={{ width: "14px", cursor: "pointer" }} />
              </>
            </div>
            <br />
          </>
        );
      })}
    </>
  );
};

export default Comment;
