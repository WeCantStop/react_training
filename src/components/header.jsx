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

    // 渲染
    render() {
      return (
        <div>
          <header>{this.state.title}</header>
          <div>我是组件-{this.state.title}</div>
          <button onClick={this.props.emitDataToParent.bind(this, 'Hello, I am from Child')}>与父组件通信</button>
        </div>
      );
    }
}
