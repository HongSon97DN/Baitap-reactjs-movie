import React, { Component } from 'react';
import danhSachGheData from "../data/danhSachGhe.json";
import HangGhe from './HangGhe';
import ThongTinDatGhe from './ThongTinDatGhe';

export default class MovieProject extends Component {
    renderHangGhe = () => {
        return danhSachGheData.map((hangGhe,index) => {
            return(
                <div key={index}>
                    <HangGhe hangGhe={hangGhe} soHangGhe={index}/>
                </div>
            )
        })
    }

    render() {
        return (
            <div className='bg-overlay'>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-8 text-center ">
                            <h3 className='mt-3'>ĐẶT VÉ XEM PHIM CYBER-MOVIE</h3>
                            <h5 className='pt-0'>Màn hình</h5>
                            <div className='screen mt-3'></div>
                            <div className='text-left fs-ghe ml-5 mt-2'>
                                {this.renderHangGhe()} 
                            </div>
                        </div>
                        <div className="col-4">
                            <ThongTinDatGhe/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
