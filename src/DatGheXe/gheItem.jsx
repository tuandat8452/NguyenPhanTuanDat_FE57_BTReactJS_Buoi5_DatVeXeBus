import React, { Component } from 'react';
import classNames from "classnames";


class GheItem extends Component {
    state = {
        isBooking: false,
    }

    datGhe = () => {
        this.props.addToArr(this.props.data);
        this.setState({
            isBooking: !this.state.isBooking,
        })
    }
   
    render() {
        return (
            <div className="mb-2">
                <button style={{
                    width: 42,
                }} 

                //{this.props.data.TrangThai ? 'btn-danger' : {!this.state.isBooking ? :'btn-second' : 'btn-success' } : ''}
                className={
                    classNames({
                        btn: true,
                        'btn-secondary' : !this.state.isBooking,
                        'btn-success': this.state.isBooking,
                        'btn-danger': this.props.data.TrangThai,
                    })
                }
                 onClick={this.datGhe}
                 disabled={this.props.data.TrangThai}>{this.props.data.SoGhe}</button>
            </div>
        );
    }

}

export default GheItem;