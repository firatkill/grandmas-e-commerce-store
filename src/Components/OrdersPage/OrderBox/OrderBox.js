import React from "react";
import OrderBoxCSS from "./OrderBox.module.css";

function OrderBox(props) {
  const styled = OrderBoxCSS;
  let totalPrice = 0;

  props.order.items.forEach((elem) => (totalPrice += elem.price * elem.amount));

  return (
    <div className={styled.OrderBoxContainer}>
      <p className={styled.time}>
        <strong>Time:</strong> {props.order.time}
      </p>
      <p>
        <strong>Address:</strong>
      </p>
      <p>
        {props.order.address.building}, {props.order.address.street}
      </p>
      <p>
        {props.order.address.city}, {props.order.address.state},{" "}
        {props.order.address.country}
      </p>
      <p>{props.order.address.pin}</p>
      <div className={styled.itemsTable}>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Item</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {props.order.items.map((item) => {
              return (
                <tr>
                  <td>{props.order.items.indexOf(item) + 1}</td>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <td>{item.amount}</td>
                  <td>${item.price * item.amount}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <p>
        <strong>Price:</strong> ${totalPrice}
      </p>
      <p>
        <strong>GST:</strong> ${(totalPrice * 2) / 100}
      </p>
      <p>
        <strong>Total Price:</strong> ${totalPrice + (totalPrice * 2) / 100}
      </p>
    </div>
  );
}

export default OrderBox;
