import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { increaseNumber, decreaseNumber, addThing } from '../../redux/actions'
import './discovery.scss'

class Discovery extends Component {

    static defaultProps = {
        number: 0,
        todoList: []
    };

    static propsTypes = {
        number: PropTypes.number,
        todoList: PropTypes.array
    };

    constructor(props) {
        super(props);
        this.state = {
            title: 'I am Discovery Page',
            input: ''
        }
    }

    componentDidMount() {
        // 这里打印学习...扩展运算符   
        // console.log(...'abc');
        // console.log([...'abc']);
        // let arr1 = ['a', 'b', 'c'],
        //     arr2 = ['j', 'k', 'l'];
        // console.log([...arr1,...arr2]);
        let obj1 = {one: '1', two: '2', three: '3'};
        let obj2 = {four: '4'}
        
        let array = ['one', 'two', 'three'];

        let resultObj = {...obj1, ...obj2}; // 相当于 Object.assign({}, obj1, obj2);
        console.log(resultObj);

        console.log(...array);
    }

    render() {
        const {number} = this.props;
        return (
            <div>
                <h2>{this.state.title}</h2>
                <h2>{number}</h2>
                <button onClick={this.increaseNum.bind(this)}>+3</button>
                <button onClick={this.decreaseNum.bind(this)}>-2</button>
                <h2>A todo List:</h2>
                <div className="input-wrapper">
                    <input type="text" name="thing" value={this.state.input} onChange={this.handleChange.bind(this)} onKeyUp={this.addThing.bind(this)}/>
                </div>
                <button onClick={this.addThing.bind(this)}>增加</button>
                <ul className="todo-list">
                    {
                        this.props.todoList.map( (thing, index) => {
                            return <li className={'todo-list-item'} key={index}>
                                        <span>{index+1}</span>
                                        <span>.</span>
                                        <span>{thing}</span>
                                    </li>
                        })
                    }
                </ul>
            </div>
        )
    }

    increaseNum() {
        this.props.increaseNumber(3);
    }

    decreaseNum() {
        this.props.decreaseNumber(2);
    }

    handleChange(e) {
        this.setState({
            input: e.target.value
        })
    }

    addThing(e) {
        if (e.keyCode === 13 || e.type === 'click'){
            if (!this.state.input) return;
            this.props.addThing(this.state.input);
            this.setState({
                input: ''
            })
        }
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
        increaseNumber: bindActionCreators(increaseNumber, dispatch),
        decreaseNumber: bindActionCreators(decreaseNumber, dispatch),
        addThing: bindActionCreators(addThing, dispatch)
    }
}

// react-redux 特定的绑定 到store
export default connect(
    mapStateToProps, mapDispatchToProps
)(Discovery);
