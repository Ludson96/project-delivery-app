import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function CardOrders({ id, status, date, price }) {
  return (
    <Link to={ `/customer/orders/${id}` }>
      <div>
        <p>Pedido</p>
        <p
          data-testid={ `customer_orders__element-order-id-${id}` }
        >
          { id }
        </p>
      </div>
      <div>
        <div>
          <h2
            data-testid={ `customer_orders__element-delivery-status-${id}` }
          >
            { status }
          </h2>
        </div>
        <div>
          <h3
            data-testid={ `customer_orders__element-order-date-${id}` }
          >
            { date }
          </h3>
          <h3
            data-testid={ `customer_orders__element-card-price-${id}` }
          >
            { price.toString().replace('.', ',') }
          </h3>
        </div>
      </div>
    </Link>
  );
}

CardOrders.propTypes = {
  id: PropTypes.number.isRequired,
  // sellerId: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  // index: PropTypes.number.isRequired,
};

export default CardOrders;
