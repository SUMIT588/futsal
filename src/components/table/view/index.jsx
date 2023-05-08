import Button from "../../button/button";
import KhaltiCheckout from "khalti-checkout-web";
import { TableWrapper } from "../tableStyle";

export const Table = (props) => {
  return (
    <TableWrapper>
      <table>
        <caption>Booking Time : {props.date}</caption>
        <thead>
          <tr>
            <th> Start Time </th>
            <th>End Time</th>
            <th>Date</th>
            <th>Book</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              <input type="time" />
            </td>
            <td>
              <input type="time" />
            </td>
            <td>
              <input value={props.date} />
            </td>
            <td>
              <Button
                name="Book"
                onClick={() => checkout.show({ amount: 100000 })}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </TableWrapper>
  );
};
