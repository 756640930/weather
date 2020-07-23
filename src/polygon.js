import React, { Component } from 'react';
import axios from 'axios';



class PolygonData extends Component{
    constructor(props) {
        super(props);
        this.state = {
            datas: []
        }
    }


    componentDidMount(){
        const url = 'test.json'
        axios.get(url).then(
            response =>{
                console.log(response.data.features[0].geometry.coordinates[0])
                const {type,crs,features} = response.data
                const str = features.map((content) => {return content.geometry.coordinates})
                const strr = str.filter((value, index, array) => {
                    return value[1] == null;
                })
                const strrr3 = str.filter((value, index, array) => {
                    return value[0].length== 2;
                })
                const strrr4 = str.filter((value, index, array) => {
                    return value[0].length== 3;
                })
                const strrr5 = str.filter((value, index, array) => {
                    return value[0].length== 7;
                })
                const strrr1 = strr.filter((value, index, array) => {
                    return value[0].length == 1;
                })
                const strrr2 = strr.filter((value, index, array) => {
                    return value[0].length !== 1;
                })
                const data1 = strrr1.map((data11) => {return data11[0][0]})
                console.log(strr)
                console.log(str)
                console.log(strrr1)
                console.log(strrr2)
                console.log(strrr3)
                console.log(strrr4)
                console.log(strrr5)
                console.log(data1)
                this.setState({datas: data1})
                this.props.getPolygonValue(this.state.datas)
            }
        )
    }


    render(){
        return (
            null
        )
    }
}

export default PolygonData;

