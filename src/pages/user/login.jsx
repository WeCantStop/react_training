import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { increaseNumber, decreaseNumber } from "../../redux/actions";
import { Header } from '../../components/header'
import { Container } from "../../components/container"
import './login.scss';

class Login extends Component {

    static defaultProps = {
        number: 0
    };
    static propTypes = {
        number: PropTypes.number,
        todoList: PropTypes.array
    };

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const { number } = this.props;
        return (
            <div>
                <h2 className="login-title">Login Page!444444</h2>
                <Header title="Login Page"/>
                <Container>
                    <h1>container内容</h1>
                    <h2>container内容2</h2>
                    <h3>container内容3</h3>
                    <h4>{number}</h4>
                    <button onClick={this.logger.bind(this)}>打印Store</button>
                    <button onClick={this.addNum.bind(this)}>+1</button>
                    <button onClick={this.decreaseNum.bind(this)}>-1</button>
                    <ul>
                        {
                            this.props.todoList.map( (thing, index) => {
                                return <li key={index}>
                                            <span>{index+1}</span>
                                            <span>.</span>
                                            <span>{thing}</span>
                                        </li>
                            })
                        }
                    </ul>

                </Container>
            </div>
        );
    }

    logger() {
        console.log(this.props.number);
    }

    addNum() {
        this.props.addNum(1);
    }

    decreaseNum() {
        this.props.decreaseNum(1);
    }
}

function mapStateToProps(state) {
    return {
        number: state.count,
        todoList: state.todoList
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addNum: bindActionCreators(increaseNumber,dispatch),
        decreaseNum: bindActionCreators(decreaseNumber,dispatch)
    }
}

// react-redux 特定的绑定 到store
export default connect(
    mapStateToProps, mapDispatchToProps
)(Login);
