import React, { Component } from 'react';
import { Button, InputItem } from 'antd-mobile';
import img from '../../assets/pkq.jpg';
import './home.scss';

export class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <InputItem>姓名:</InputItem>
        <Button type="primary" onClick={this.clickBtn}>Test Btn</Button>
        <img className={'full-width-img'} src={img} />
      </div>
    );
  }
}
