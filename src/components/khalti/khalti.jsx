import KhaltiCheckout from "khalti-checkout-web";
import { KhaltiWrapper } from "./khaltiStyle";
import QRCODE from "../../common/img/QRCODE.jpg";
import config from "./khaltiConfig";

export const Payment = () => {
  const checkout = new KhaltiCheckout(config);
  return (
    <KhaltiWrapper>
      <div className="firstContainer">
        <h1>Secure</h1>

        <h2>Payment</h2>

        <p>Book Your Court</p>

        <div className="button">
          <button onClick={() => checkout.show({ amount: 10000 })}>
            {" "}
            Pay via Khalti{" "}
          </button>
        </div>
      </div>
      <div className="secondContainer">
        <img src={QRCODE} alt="futsalCourt" />
      </div>
    </KhaltiWrapper>
  );
};
