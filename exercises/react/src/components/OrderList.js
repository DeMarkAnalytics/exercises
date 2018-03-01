import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Order from './Order';

import {getOrders} from '../store/orders';
import './OrderList.css';

class OrderList extends React.Component {
  static propTypes = {
    orders: PropTypes.object
  };

  render() {
    const {orders} = this.props;
    return (
      <div className="order-list">
        {Object.values(orders).map((order, i) => (
          <Order order={order} key={i} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  orders: getOrders(state)
});

export default connect(mapStateToProps)(OrderList);
