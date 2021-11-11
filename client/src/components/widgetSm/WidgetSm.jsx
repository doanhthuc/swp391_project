import { Visibility } from "@material-ui/icons";
import DangNgan from "../../static/DangNgan.jpg";
import "./widgetSm.css";

const WidgetSm = () => {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Member</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img src="https://nld.mediacdn.vn/2015/luyen2-1429410269773.jpg" alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Lê Văn Luyện</span>
            <span className="widgetSmUserTitle">Customer annually</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src="https://image.thanhnien.vn/1080/uploaded/congnguyen/2019_09_09/huanhoahong-1_ugww.jpg" alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Huấn Hoa Hồng</span>
            <span className="widgetSmUserTitle">Customer annually</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://media-cdn.laodong.vn/storage/newsportal/2019/4/2/666434/11.jpg?w=414&h=276&crop=auto&scale=both"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Khá Bảnh</span>
            <span className="widgetSmUserTitle">Customer annually</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src="https://file.vfo.vn/hinh/2014/11/admin.png" alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Admin </span>
            <span className="widgetSmUserTitle">ADMIN SHOP</span>
          </div>
          <button style={{ background: "orange" }} className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Prohibit
          </button>
        </li>
      </ul>
    </div>
  );
};

export default WidgetSm;
