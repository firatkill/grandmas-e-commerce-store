import React from "react";
import OrdersPageContainerCSS from "./OrdersPageContainer.module.css";
import OrderBox from "../OrderBox/OrderBox";
import { useSelector } from "react-redux";
function OrdersPageContainer() {
  const styled = OrdersPageContainerCSS;
  const orders = useSelector((state) => state.user.userOrders);
  console.log(orders);
  return (
    <div className={styled.OrdersPageContainer}>
      <div className={styled.header}>
        <h1>ORDERS</h1>
        <hr />
      </div>
      <div className={styled.orderBoxes}>
        {orders.length > 0 &&
          orders.map((order) => (
            <OrderBox key={orders.indexOf(order)} order={order} />
          ))}
        {orders.length < 1 && (
          <div className={styled.errorBox}>
            <p>No Orders Yet !</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default OrdersPageContainer;
