import React, { Component } from 'react';

class DanhSachGheDangDat extends Component {
    renderGheDaDat = () => {
        return this.props.danhSachGheDangDat.map((item) => {
            return (
                <div className="text-left mb-2" key={item.ghe.SoGhe}>
                    <span>Ghế : {item.ghe.TenGhe} $ {item.ghe.Gia}</span>
                    <a href="#" style={{
                        color: "red",
                        marginLeft: 10,
                    }}>[Hủy]</a >
                </div>
            );
        });
    }
    render() {
        return (
            <div>
                <h1 style={{
                    color: "d0b800",
                    fontSize: 25,
                }}>Danh sách ghế đã đặt ({this.props.totalItem})</h1>
                {this.renderGheDaDat()}
            </div>
        );
    }
}

export default DanhSachGheDangDat;