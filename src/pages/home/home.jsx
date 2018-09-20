import {Component} from 'react';
import './home.scss';
import img from '../../assets/pkq.jpg';

export class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			homeTitle: 'Home Page!',
			clickStarName: '未点击star',
			starList: [
				{name: 'jay', age: 20},
				{name: 'Eason', age: 26},
				{name: 'Lily', age: 25},
				{name: 'Tom', age: 18},
			],
		};
	}

	shouldComponentUpdate() {
		// console.log(nextProps);
		return true;
	}

	componentWillUpdate() {
		// console.log(nextProps, nextState);
	}

	componentDidUpdate() {
		// console.log(prevProps);
		// console.log(prewState);
	}

	handleClick() {
		console.log('123');
	}

	clickStar(star) {
		this.setState({clickStarName: star.name});
	}

	fatherHandleClick(data) {
		console.log(data);
		this.setState({'homeTitle': data});
	}
	render() {
		return (
			<div>
				<Header emitDataToParent={this.fatherHandleClick.bind(this)}/>
				<h2 className="test" onClick={this.handleClick}>{this.state.homeTitle}</h2>
				<h3>{this.state.clickStarName}</h3>
				<ul className="star-list">
					{
						this.state.starList.map((star, index) => {
							return <li className="star" onClick={this.clickStar.bind(this, star)} key={index}>
								<span>{star.name}</span>
								<span>{star.age}</span>
							</li>;
						})
					}
				</ul>
				<img className={'full-width-img'} src={img} />
			</div>
		);
	}
}
