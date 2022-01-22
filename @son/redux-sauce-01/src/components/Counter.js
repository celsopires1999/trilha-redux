import { Component } from "react";
import Proptypes from 'prop-types';

class Counter extends Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        console.log('component ==>> props: ', this.props);
        const { value, increment, decrement } = this.props;
        return (
            <div>
                <button
                    onClick={increment}
                >
                    Increment
                </button>
                <button
                    onClick={decrement}
                >
                    Decrement
                </button>
                <p>
                    {value}
                </p>
            </div>
        )
    }
}

Counter.propTypes = {
    value: Proptypes.number.isRequired,
    increment: Proptypes.func.isRequired,
    decrement: Proptypes.func.isRequired,
}

export default Counter