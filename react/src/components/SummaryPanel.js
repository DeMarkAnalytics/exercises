import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getCompletedOrders} from '../store/summaryPanel';

class SummaryPanel extends React.Component {
  static propTypes = {
    completedOrders: PropTypes.number.isRequired,
  }
  render() {
    return (
      <div className="summary-panel">
        Number of completed orders: {this.props.completedOrders}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  completedOrders: getCompletedOrders(state)
});
export default connect(mapStateToProps)(SummaryPanel);
