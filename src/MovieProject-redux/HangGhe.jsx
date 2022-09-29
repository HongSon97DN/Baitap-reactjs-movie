import React, { Component } from 'react';
import { connect } from "react-redux";

class HangGhe extends Component {
  renderGhe = () => {
    return this.props.hangGhe.danhSachGhe.map((ghe, index) => {
      let cssGheDaDat = "";
      let disabled = false;
      if (ghe.daDat) {
        cssGheDaDat = "gheDuocChon";
        disabled = true;
      }
      let cssGheDangDat = "";
      let indexGheDangDat = this.props.danhSachGheDangDat.findIndex(gheDangDat => gheDangDat.soGhe === ghe.soGhe)
      if (indexGheDangDat !== -1) {
        cssGheDangDat = "gheDangChon";
      }
      return (
        <button key={index} disabled={disabled} className={`ghe ${cssGheDaDat} ${cssGheDangDat}`} onClick={() => {
          this.props.datGhe(ghe)
        }}  >
          {ghe.soGhe}
        </button>
      )
    })
  }

  renderHangGhe = () => {
    if (this.props.soHangGhe === 0) {
      return this.props.hangGhe.danhSachGhe.map((ghe,index) => {
        return (
          <button key={index} className='rowNumber'>{ghe.soGhe}</button>
        )
      })
    } else {
      return (
        <>
          {this.props.hangGhe.hang} {this.renderGhe()}
        </>
      )
    }
  }

  render() {
    return (
      <>
        {this.renderHangGhe()}
      </>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    danhSachGheDangDat: state.ThongTinDatVeReducer.danhSachGheDangDat
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    datGhe: (ghe) => {
      dispatch({
        type: "DAT_GHE",
        ghe
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HangGhe);