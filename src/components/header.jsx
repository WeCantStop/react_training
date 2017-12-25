import React, {Component} from 'react';
import PropTypes from 'prop-types';
export class Header extends Component {

    static defaultProps = {
        emitDataToParent: () => {},
        title: '默认 Title'
    };
    static propTypes = {
        emitDataToParent: PropTypes.func,
        title: PropTypes.string
    };

    constructor(props) {
        super(props);
        this.state = this.props;
    }

    // react 相关的生命周期使用
    componentWillMount() {
        // console.log(this.props.title);
        // console.log(this.state);
    }

    // 渲染
    render() {
        return (
            <div>
                <header>{this.state.title}</header>
                <div>我是组件-{this.state.title}</div>
                <button onClick={this.props.emitDataToParent.bind(this, 'Hello, I am from Child')}>与父组件通信</button>
            </div>
        )
    }

    // DOM 挂载完成，可以获取DOM节点
    componentDidMount() {
        // console.log('component did mount');
    }

    // DOM将要更新的时候
    componentWillUpdate(nextState, nextProp) {
        // console.log(nextState);
        // console.log(nextProp);
    }

    // DOM更新完成
    componentDidUpdate(prevState) {
        // console.log(`componentDidUpdate`);
        // console.log(prevState);
    }

}
