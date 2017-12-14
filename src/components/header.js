import React from 'react';
export class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props;
    }

    // react 相关的生命周期使用
    componentWillMount() {
        console.log(this.props.title);
        console.log(this.state);
    }

    // 渲染
    render() {
        return (
            <div>
                <header>{this.state.title}</header>
                <div>我是组件-{this.state.title}</div>
            </div>
        )
    }

    // DOM 挂载完成，可以获取DOM节点
    componentDidMount() {
        console.log('component did mount');
        // this.setState({title: 'again'});
    }

    // DOM将要更新的时候
    componentWillUpdate(prev, next) {
        console.log(prev);
        console.log(next);        
    }

    // DOM更新完成
    componentDidUpdate(state) {
        console.log(`componentDidUpdate-${state}`);
    }

}
