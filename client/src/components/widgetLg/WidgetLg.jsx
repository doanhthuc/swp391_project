import "./widgetLg.css";

const WidgetLg = () => {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };

  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://nld.mediacdn.vn/2015/luyen2-1429410269773.jpg" alt="" className="widgetLgImg" />
            <span className="widgetLgName">Lê Văn Luyện</span>
          </td>
          <td className="widgetLgDate">2 Nov 2021</td>
          <td className="widgetLgAmount">544.000đ</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://image.thanhnien.vn/1080/uploaded/congnguyen/2019_09_09/huanhoahong-1_ugww.jpg" alt="" className="widgetLgImg" />
            <span className="widgetLgName">Huấn Hoa Hồng</span>
          </td>
          <td className="widgetLgDate">8 Nov 2021</td>
          <td className="widgetLgAmount">982.000đ</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://media-cdn.laodong.vn/storage/newsportal/2019/4/2/666434/11.jpg?w=414&h=276&crop=auto&scale=both"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Khá Bảnh</span>
          </td>
          <td className="widgetLgDate">4 Nov 2021</td>
          <td className="widgetLgAmount">437.000đ</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://image.thanhnien.vn/1080/uploaded/congnguyen/2019_09_09/huanhoahong-1_ugww.jpg" alt="" className="widgetLgImg" />
            <span className="widgetLgName">Huấn Hoa Hồng</span>
          </td>
          <td className="widgetLgDate">11 Nov 2021</td>
          <td className="widgetLgAmount">699.000đ</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default WidgetLg;
