// 高阶组件 本质就是一个函数，参数接受组件，返回一个新的组件
import React from 'react';

export default (WrapperWithComponent) => {
	return class NewComponent extends WrapperWithComponent {
		constructor(props) {
			super(props);
			this.state = props;
		}

		render() {
			return super.render();
		}
	};
};
