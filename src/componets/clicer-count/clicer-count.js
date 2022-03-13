import {connect} from "react-redux";
import {increment, decrement, reset} from '../../store';
import {Component} from "react";

export default class ClicerCount extends Component {
    render() {
        return (
            <div>
                <h1>Counter:</h1>
                <Counter/>
            </div>
        )
    }
}

class _Counter extends Component {

    render() {
        return (
            <div>
                <h2>0</h2>
                <button>-</button>
                <button>+</button>
                <button>reset</button>
            </div>
        );
    }
};

const mapStateToProps = () => {};
const mapDispatchToProps = () => {};

const Counter = connect(
    mapStateToProps,
    mapDispatchToProps,
)(_Counter)
