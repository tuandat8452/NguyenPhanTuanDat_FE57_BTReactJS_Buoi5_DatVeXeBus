import React, { Component } from 'react';
import GheItem from './gheItem';

class DanhSachGhe extends Component {
    renderDanhSachGhe = () => {
        return this.props.data.map((item) => {
            return (
                <div className="col-3" key={item.SoGhe}>
                    <GheItem addToArr={this.props.addToArr} data={item} />
                </div>
            );
        })
    }
    render() {
        return (
            <div className="container border-right">
                <h2 style={{
                    fontSize: 20,
                    height: 50,
                    lineHeight: 2.5,
                    backgroundColor: "#dddddd",
                }}>Tài xế</h2>
                <div className="row">
                    {this.renderDanhSachGhe()}
                </div>
            </div>
        );
    }
}

export default DanhSachGhe;