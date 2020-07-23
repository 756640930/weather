浪高数据和多边形数据分别在public中的wave-height.json和test.json中
画图的代码在src下map-demo.js







问题：运行map-demo存在报错：     ×
Unhandled Rejection (TypeError): Cannot read property '0' of undefined
(anonymous function)
src/map-demo.js:104
  101 | // var polygonNumberId = this.polygonValue.features[i].properties.Number;
  102 | polygonArr.push(this.state.polygonValue.features[i].geometry.coordinates[0]);
  103 |     for (let j=0; j<61; j++) {
> 104 |         if (this.state.waveDataHeight.data[i].waveheightt >= this.state.waveLevel[j].min && this.state.waveDataHeight.data[i].waveheightt < this.state.waveLevel[j].max)
      | ^  105 |         {
  106 |             let level = j;
  107 |             break;
View compiled
This screen is visible only in development. It will not appear if the app crashes in production.
Open your browser’s developer console to further inspect this error.  Click the 'X' or hit ESC to dismiss this message.






原因：104行的this.state.waveDataHeight.data[i]无数据








说明：在94行中的console.log(this.state.waveDataHeight) 可以打印出数据，但在104行中数据为空








解决：未解决
