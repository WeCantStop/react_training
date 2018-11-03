import React, { Component } from 'react';
import { Button, InputItem } from 'antd-mobile';
import { Header } from '../../components/header';
import img from '../../assets/pkq.jpg';
import './home.scss';

export class Home extends Component {
  constructor(props) {
    super(props);
  }

    clickBtn = () => {
      console.log(this.headerRef);
    }

    render() {
      return (
        <div>
          <InputItem>姓名：</InputItem>
          {/* 比较好的方式使用ref */}
          <Header ref={(header => this.headerRef = header)} />
          <Button type="primary" onClick={this.clickBtn}>test btn1</Button>
          <img className={'full-width-img'} src={img} />
        </div>
      );
    }
}
