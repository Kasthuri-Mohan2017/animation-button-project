// src/components/OrderSummary.js
import React from 'react';

const OrderSummary = ({ order }) => {
  return (
    <div className="order-summary">
      <h2>Your Order</h2>
      {order.length === 0 ? (
        <p>No items added yet.</p>
      ) : (
        <ul>
          {order.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
      )}
      {order.length > 0 && <button className="place-order-btn">Place Order</button>}
    </div>
  );
};

export default OrderSummary;
