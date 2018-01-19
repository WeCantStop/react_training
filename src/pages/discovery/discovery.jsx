import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { increaseNumber, decreaseNumber } from '../../redux/actions'

class Discovery extends Component {

    static defaultProps = {
        number: 0
    };

    static propsTypes = {
        number: PropTypes.number
    };

    constructor(props) {
        super(props);
        this.state = {title: 'I am Discovery Page'}
    }

    render() {
        const {number} = this.props;
        return (
            <div>
                <h2>{this.state.title}</h2>
                <h2>{number}</h2>
                <button onClick={this.increaseNum.bind(this)}>+3</button>
                <button onClick={this.decreaseNum.bind(this)}>-2</button>
            </div>
        )
    }

    increaseNum() {
        this.props.increaseNumber(3);
    }

    decreaseNum() {
        this.props.decreaseNumber(2);
    }
}

function mapStateToProps(state) {
    return {
        number: state.count
    }
}

function mapDispatchToProps(dispatch) {
    return {
        increaseNumber: bindActionCreators(increaseNumber, dispatch),
        decreaseNumber: bindActionCreators(decreaseNumber, dispatch)
    }
}

// react-redux 特定的绑定 到store
export default connect(
    mapStateToProps, mapDispatchToProps
)(Discovery);