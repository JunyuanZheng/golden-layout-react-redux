import {incrementCount} from '../ActionCreators';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

// Pure react component. Should not be connected to redux store; its container
// should be connected to the store.
class IncrementButton extends React.Component {
    render() {
        return (
            <button onClick={() => this.props.incrementCount()}>Increment Count</button>
        );
    }
}

IncrementButton.PropTypes = {
    incrementCount: PropTypes.func.isRequired
}

export const IncrementButtonContainer = connect(
    incrementCount
)(IncrementButton);
