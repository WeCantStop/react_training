import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { increaseNumber, decreaseNumber, addThing } from '../../redux/actions';
import './discovery.scss';

class Discovery extends Component {

	constructor(props) {
		super(props);
		this.state = {
			title: 'I am Discovery Page',
			input: ''
		};
	}

	render() {
		const { number } = this.props;
		return (
			<div>
				<h2>{this.state.title}</h2>
				<h2>{number}</h2>
				<button onClick={this.increaseNum.bind(this)}>+3</button>
				<button onClick={this.decreaseNum.bind(this)}>-2</button>
				<h2>A todo List:</h2>
				<div className="input-wrapper">
					<input type="text" name="thing" value={this.state.input} onChange={this.handleChange.bind(this)} onKeyUp={this.addThing.bind(this)} />
				</div>
				<button onClick={this.addThing.bind(this)}>增加</button>
				<ul className="todo-list">
					{
						this.props.todoList.map((thing, index) => {
							return <li className={'todo-list-item'} key={index}>
								<span>{index + 1}</span>
								<span>.</span>
								<span>{thing}</span>
							</li>;
						})
					}
				</ul>
			</div>
		);
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
		});
	}

	addThing(e) {
		if (e.keyCode === 13 || e.type === 'click') {
			if (!this.state.input) return;
			this.props.addThing(this.state.input);
			this.setState({
				input: ''
			});
		}
	}
}

function mapStateToProps(state) {
	return {
		number: state.count,
		todoList: state.todoList
	};
}

function mapDispatchToProps(dispatch) {
	return {
		increaseNumber: bindActionCreators(increaseNumber, dispatch),
		decreaseNumber: bindActionCreators(decreaseNumber, dispatch),
		addThing: bindActionCreators(addThing, dispatch)
	};
}

// react-redux 特定的绑定 到store
export default connect(
	mapStateToProps, mapDispatchToProps
)(Discovery);
