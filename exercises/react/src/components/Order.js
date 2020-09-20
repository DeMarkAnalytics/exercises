import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';
import {removeIngredient, submitOrder} from '../store/orders';
import { incrementCompletedOrders } from '../store/summaryPanel';

import './Order.css';

class Order extends React.Component {

  static propTypes = {
    order: PropTypes.shape({
      recipientName: PropTypes.string.isRequired,
      orderedAt: PropTypes.instanceOf(Date),
      quantity: PropTypes.number.isRequired,
      ingredients: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired
        })
      ).isRequired
    }),
    removeIngredient: PropTypes.func.isRequired,
    submitOrder: PropTypes.func.isRequired,
    incrementCompletedOrders: PropTypes.func.isRequired
  };

  submitOrder = () => {
    // Stub. This method needs to mark the order as submitted.
    const order = this.props.order;
    this.props.submitOrder(order.id);
    this.props.incrementCompletedOrders();
  };

  render() {
    console.log('render');
    const {order} = this.props;
    const sortedIngredients = order.ingredients.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    return (
      <div className="order">
        <div className="order-name">
          Order for <strong>{order.recipientName}</strong>
        </div>
        <div className="ordered-at">
          {order.orderedAt ? (
            <span>
              Ordered at{' '}
              <strong>{moment(order.orderedAt).format('MM/DD HH:mm')}</strong>
            </span>
          ) : (
            <span>Order not submitted</span>
          )}
        </div>
        <div className="order-details">
          <strong>Ingredients</strong>
          {sortedIngredients.map((ingredient, i) => (
            <div key={i} className="ingredient">
              {ingredient.name}
              <a
                className={`btn ${order.orderedAt ? 'hidden' : ''}`}
                title={`remove ${ingredient.name}`}
                onClick={() =>
                  this.props.removeIngredient({
                    orderId: order.id,
                    ingredientId: ingredient.id
                  })
                }>
                  x
              </a>
            </div>
          ))}
        </div>
        <div className="submit-order">
          <a className={`btn btn-sm btn-primary ${order.orderedAt ? 'hidden' : ''}`} onClick={this.submitOrder}>
            Submit order
          </a>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  removeIngredient,
  submitOrder,
  incrementCompletedOrders
};

export default connect(null, mapDispatchToProps)(Order);
