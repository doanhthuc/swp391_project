import { Button } from "@material-ui/core";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { checkLengthOrderHeader, checkTotalPriceToOrder, convertToListOrder, formatVND } from "../../Helper";
import CreateOrder from "../../hook/CreateOrder";
import orderStore from "../../store/orderStore";
import "./ILoveYou3Ngan.css";

const Index = () => {
  const history = useHistory();
  const [fullName, setFullName] = useState();
  const [email, setEmail] = useState();
  const [address, setAddress] = useState();
  const [city, setCity] = useState();
  const [creditCard, setCreditCard] = useState("6969 - 0123 - 5672 - 6969");
  const [expYear, setExpYear] = useState("Monday, December 6, 2069");

  const { products, clearAllProducts } = orderStore();
  const { payOrder, loading, error } = CreateOrder();

  const createOrder = (e) => {
    e.preventDefault();
    const lstOfProduct = convertToListOrder(products);
    payOrder({
      variables: {
        input: {
          fullName: fullName,
          email: email,
          shipAddress: address,
          city: city,
          nameOnCard: fullName,
          creditCardNumber: creditCard,
          expiredYear: expYear,
          orderDetails: lstOfProduct,
        },
      },
    });
    clearAllProducts();
    history.push("/");
  };

  if (loading) return <>Loading...</>;
  if (error) return <>Something went wrong...</>;

  return (
    <>
      <div class="rowsssssss">
        <div class="col-75">
          <div class="cvsdas8d8s88">
            <form id="validate" action="/action_page.php">
              <div class="rowsssssss">
                <div class="col-50">
                  <h3>Billing Address</h3>
                  <br />
                  <label for="fname">
                    <i class="fa fa-user"></i> Full Name
                  </label>
                  <input
                    onChange={(e) => setFullName(e.target.value)}
                    class="ddddddddd44444444sssssss"
                    id="fname"
                    name="fullname"
                    placeholder="Tap Can Binh"
                    required
                  />
                  <label for="email">
                    <i class="fa fa-envelope"></i> Email
                  </label>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    class="ddddddddd44444444sssssss"
                    id="email"
                    name="email"
                    placeholder="tapcanbinh_thekiller@weibo.com"
                    required
                  />
                  <label for="adr">
                    <i class="fa fa-address-card-o"></i> Address
                  </label>
                  <input
                    onChange={(e) => setAddress(e.target.value)}
                    class="ddddddddd44444444sssssss"
                    id="adr"
                    name="address"
                    placeholder="Alice In Borderland"
                    required
                  />
                  <label for="city">
                    <i class="fa fa-institution"></i> City
                  </label>
                  <input
                    onChange={(e) => setCity(e.target.value)}
                    class="ddddddddd44444444sssssss"
                    id="city"
                    name="city"
                    placeholder="Ho Nam"
                    required
                  />
                </div>

                <div class="col-50">
                  <h3>Payment</h3>
                  <label for="fname">Accepted Cards: Visa, Credit, Debit</label>
                  <br />
                  <div class="icon-cvsdas8d8s88">
                    <i class="fa fa-cc-visa" style={{ color: "navy" }}></i>
                    <i class="fa fa-cc-amex" style={{ color: "blue" }}></i>
                    <i class="fa fa-cc-mastercard" style={{ color: "red" }}></i>
                    <i class="fa fa-cc-discover" style={{ color: "orange" }}></i>
                  </div>

                  <label for="cname">Name on Card</label>
                  <input value={fullName} class="ddddddddd44444444sssssss" id="cname" name="cardname" placeholder="Soeng Souy" required />
                  <label for="ccnum">Credit card number</label>
                  <input
                    onChange={(e) => setCreditCard(e.target.value)}
                    class="ddddddddd44444444sssssss"
                    id="ccnum"
                    name="cardnumber"
                    value={creditCard}
                    required
                  />
                  <label for="expmonth">Exp Year</label>
                  <input
                    onChange={(e) => setExpYear(e.target.value)}
                    class="ddddddddd44444444sssssss"
                    id="expmonth"
                    name="expmonth"
                    value={expYear}
                    required
                  />
                </div>
              </div>
              <label>
                <input type="checkbox" checked="checked" name="sameadr" /> Shipping address same as billing
              </label>
              <br />
              <br />
              <button onClick={(e) => createOrder(e)} className="xxxwwwxxx">
                Pay Now
              </button>
            </form>
          </div>
        </div>
        <div class="col-25">
          <div class="cvsdas8d8s88">
            <h4>
              Items
              <span class="price" style={{ color: "black" }}>
                <i class="fa fa-shopping-cart"></i> <b>({checkLengthOrderHeader(products)})</b>
              </span>
            </h4>
            {products.map((x) => {
              return (
                <>
                  <p className="prices12dsa2d1as2d1as2d1a2sd">
                    <span>{x.productName}</span>
                  </p>
                </>
              );
            })}
            <hr />
            <hr className="prxxxxx" />
            <p>
              Total
              <span class="price" style={{ color: "black" }}>
                &nbsp;&nbsp;<b>{formatVND(checkTotalPriceToOrder(products))}</b>
                <br />
                <br />
                <Button
                  style={{ backgroundColor: "#f46d41", fontWeight: "bold" }}
                  onClick={() => history.push("/shoping/cart")}
                  fullWidth
                  size="small"
                  variant="contained"
                >
                  See All
                </Button>
              </span>
            </p>
          </div>
        </div>
      </div>
      <br />
      <br />
    </>
  );
};

export default Index;
