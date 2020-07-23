import React, { Component } from "react";
import axios from 'axios';

class WebMapDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            waveLevel: [{min:-50,max:0.25,val:"#0cecfa"},
                {min:0.25,max:0.5,val:"#0cd6fa"},
                {min:0.5,max:0.75,val:"#0cc5fa"},
                {min:0.75,max:1,val:"#0cb4fa"},
                {min:1,max:1.25,val:"#0ca3fa"},
                {min:1.25,max:1.5,val:"#0c98fa"},
                {min:1.5,max:1.75,val:"#0c8dfa"},
                {min:1.75,max:2,val:"#0c7cfa"},
                {min:2,max:2.25,val:"#0c71fa"},
                {min:2.25,max:2.5,val:"#0c60fa"},
                {min:2.5,max:2.75,val:"#0c49fa"},
                {min:2.75,max:3,val:"#f8fd30"},
                {min:3,max:3.25,val:"#faf123"},
                {min:3.25,max:3.5,val:"#fce515"},
                {min:3.5,max:3.75,val:"#fddf0f"},
                {min:3.75,max:4,val:"#ffcc00"},
                {min:4,max:4.25,val:"#ffba00"},
                {min:4.25,max:4.5,val:"#fe9e00"},
                {min:4.5,max:4.75,val:"#f78b00"},
                {min:4.75,max:5,val:"#f17700"},
                {min:5,max:5.25,val:"#ef7100"},
                {min:5.25,max:5.5,val:"#f56925"},
                {min:5.5,max:5.75,val:"#f55f16"},
                {min:5.75,max:6,val:"#f35508"},
                {min:6,max:6.25,val:"#e84c00"},
                {min:6.25,max:6.5,val:"#fd002a"},
                {min:6.5,max:6.75,val:"#f30128"},
                {min:6.75,max:7,val:"#ee0127"},
                {min:7,max:7.25,val:"#e40225"},
                {min:7.25,max:7.5,val:"#d60323"},
                {min:7.5,max:7.75,val:"#c50f2b"},
                {min:7.75,max:8,val:"#ac182b"},
                {min:8,max:8.25,val:"#9d1626"},
                {min:8.25,max:8.5,val:"#931522"},
                {min:8.5,max:8.75,val:"#8a141f"},
                {min:8.75,max:9,val:"#7c121a"},
                {min:9,max:9.25,val:"#6d1015"},
                {min:9.25,max:9.5,val:"#fe229a"},
                {min:9.5,max:9.75,val:"#f6209f"},
                {min:9.75,max:10,val:"#f01ea1"},
                {min:10,max:10.25,val:"#ed1ea3"},
                {min:10.25,max:10.5,val:"#e81ca5"},
                {min:10.5,max:10.75,val:"#e01aaa"},
                {min:10.75,max:11,val:"#d918ad"},
                {min:11,max:11.25,val:"#d317b1"},
                {min:11.25,max:11.5,val:"#ce16b3"},
                {min:11.5,max:11.75,val:"#c613b7"},
                {min:11.75,max:12,val:"#bd11bc"},
                {min:12,max:12.25,val:"#b610bf"},
                {min:12.25,max:12.5,val:"#b00ec2"},
                {min:12.5,max:12.75,val:"#ab0dc5"},
                {min:12.75,max:13,val:"#9e09cc"},
                {min:13,max:13.25,val:"#9507d0"},
                {min:13.25,max:13.5,val:"#8d08c4"},
                {min:13.5,max:13.75,val:"#8205b6"},
                {min:13.75,max:14,val:"#7b07ab"},
                {min:14,max:14.25,val:"#6f049b"},
                {min:14.25,max:14.5,val:"#690492"},
                {min:14.5,max:14.75,val:"#620389"},
                {min:14.75,max:15,val:"#550177"},
                {min:15,max:10000,val:"#490066"}],
            //多边形json数据
            polygonValue: {},
            //浪高数据对象
            waveDataHeight: {}
        }
    }

        componentDidMount() {
            //eslint-disable-next-line
            this.map = new AMap.Map('container', {
                zoom: 4,//地图初始化显示时候的缩放程度
                showLabel: false, //不显示地图文字标记
                center: [124.25, 26.25]//设置地图中心点坐标
            });


            const url = 'test.json'
            axios.get(url).then(
                response => {
                    this.setState({polygonValue :response.data})
                    console.log(this.state.polygonValue)
                    axios.get('wave-height.json').then(
                        res => {
                            this.setState({waveDataHeight :res.data})
                            console.log(res.data)
                            console.log(this.state.waveDataHeight)
                            console.log(this.state.waveLevel)
                        }
                    )

                    for ( let i=0 ; i < this.state.polygonValue.features.length; i++) {
                        var polygonArr = new Array();//创建多边形坐标数组
                        // var polygonNumberId = this.polygonValue.features[i].properties.Number;
                        polygonArr.push(this.state.polygonValue.features[i].geometry.coordinates[0]);
                            for (let j=0; j<61; j++) {
                                if (this.state.waveDataHeight.data[i].waveheightt >= this.state.waveLevel[j].min && this.state.waveDataHeight.data[i].waveheightt < this.state.waveLevel[j].max)
                                {
                                    let level = j;
                                    break;
                                }
                            }

                        //eslint-disable-next-line
                        var polygon = new AMap.Polygon({
                            path: polygonArr,
                            strokeColor: "#ff0000", //线颜色
                            strokeOpacity: 0.15, //线透明度
                            strokeWeight: 1,    //线宽
                            fillColor: "#26defa", //填充色
                            fillOpacity: 0.9 //填充透明度
                        })
                        this.map.add(polygon)
                    }
                }
            )


        };


        render()
        {
            return (
                <div>
                    null
                </div>
            )
        }
}

export default WebMapDemo;