import React, { Component } from 'react'

const Km = (props) =>{
    return(
        <div className="clu-wrap">
            <input type="number" min="0" onChange={(e) => {
                props.onChangeData({
                    km: e.target.value,
                    hm: e.target.value * 10,
                    dam: e.target.value* 100,
                    m: e.target.value * 1000,
                    dm: e.target.value * 10000,
                    cm: e.target.value * 100000,
                    mm: e.target.value * 1000000,
                })
            }} className="clu-input" unit="Kilometer" value={props.value.km} />
            <span className="clu-label">Kilometer</span>
        </div>
    )
}
const Hm = (props) =>{
    return(
        <div className="clu-wrap">
            <input type="number" min="0" onChange={(e) => {
                props.onChangeData({
                    km: e.target.value / 10,
                    hm: e.target.value,
                    dam: e.target.value * 10,
                    m: e.target.value * 100,
                    dm: e.target.value * 1000,
                    cm: e.target.value * 10000,
                    mm: e.target.value * 100000,
                })
            }} className="clu-input" value={props.value.hm} />
            <span className="clu-label">Hectometer</span>
        </div>
    )
}
const Dam = (props) =>{
    return(
        <div className="clu-wrap">
            <input type="number" min="0" onChange={(e) => {
                props.onChangeData({
                    km: e.target.value / 100,
                    hm: e.target.value / 10,
                    dam: e.target.value,
                    m: e.target.value * 10,
                    dm: e.target.value * 100,
                    cm: e.target.value * 1000,
                    mm: e.target.value * 10000,
                })
            }} className="clu-input" value={props.value.dam} />
            <span className="clu-label">Decameter</span>
        </div>
    )
}
const M = (props) =>{
    return(
        <div className="clu-wrap">
            <input type="number" min="0" onChange={(e) => {
                props.onChangeData({
                    km: e.target.value / 1000,
                    hm: e.target.value / 100,
                    dam: e.target.value / 10,
                    m: e.target.value,
                    dm: e.target.value * 10,
                    cm: e.target.value * 100,
                    mm: e.target.value * 1000,
                })
            }} className="clu-input" value={props.value.m} />
            <span className="clu-label">Meter</span>
        </div>
    )
}
const Dm = (props) =>{
    return(
        <div className="clu-wrap">
            <input type="number" min="0" onChange={(e) => {
                props.onChangeData({
                    km: e.target.value / 10000,
                    hm: e.target.value / 1000,
                    dam: e.target.value / 100,
                    m: e.target.value / 10,
                    dm: e.target.value,
                    cm: e.target.value * 10,
                    mm: e.target.value * 100,
                })
            }} className="clu-input" value={props.value.dm} />
            <span className="clu-label">Decimeter</span>
        </div>
    )
}
const Cm = (props) =>{
    return(
        <div className="clu-wrap">
            <input type="number" min="0" onChange={(e) => {
                props.onChangeData({
                    km: e.target.value / 100000,
                    hm: e.target.value / 10000,
                    dam: e.target.value / 1000,
                    m: e.target.value /100,
                    dm: e.target.value / 10,
                    cm: e.target.value,
                    mm: e.target.value * 10,
                })
            }} className="clu-input" value={props.value.cm} />
            <span className="clu-label">Centimeter</span>
        </div>
    )
}
const Mm = (props) =>{
    return(
        <div className="clu-wrap">
            <input type="number" min="0" onChange={(e) => {
                props.onChangeData({
                    km: e.target.value / 1000000,
                    hm: e.target.value / 100000,
                    dam: e.target.value / 10000,
                    m: e.target.value / 1000,
                    dm: e.target.value / 100,
                    cm: e.target.value / 10,
                    mm: e.target.value,
                })
            }} className="clu-input" value={props.value.mm} />
            <span className="clu-label">Millimeter</span>
        </div>
    )
}

class CLU extends Component {
    constructor(props) {
        super(props)
        this.state = {
            km: 0,
            hm: 0,
            dam: 0,
            m: 0,
            dm: 0,
            cm: 0,
            mm: 0,
        }
    }

    changeData(data) {
        this.setState(data)
    }

    render() {
        return (
            <div className="clu">
                <Km onChangeData={this.changeData.bind(this)} value={this.state} />
                <Hm onChangeData={this.changeData.bind(this)} value={this.state} />
                <Dam onChangeData={this.changeData.bind(this)} value={this.state} />
                <M onChangeData={this.changeData.bind(this)} value={this.state} />
                <Dm onChangeData={this.changeData.bind(this)} value={this.state} />
                <Cm onChangeData={this.changeData.bind(this)} value={this.state} />
                <Mm onChangeData={this.changeData.bind(this)} value={this.state} />
            </div>
        )
    }
}

export default CLU