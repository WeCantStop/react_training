import React, { Component } from 'react';
import { Button, InputItem } from 'antd-mobile';
import img from '../../assets/pkq.jpg';
import './home.scss';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  clickBtn = () => {
    console.log('clicked btn');
  }

  render() {
    return (
      <div>
        <InputItem>姓名:</InputItem>
        <InputItem>年龄:</InputItem>
        <Button type="primary" onClick={this.clickBtn}>Test Btn</Button>
        <img className={'full-width-img'} src={img} />
      </div>
    );
  }
}
