Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();





var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}






var appData=require('./config/appData');
var ListItem=require('./components/ListItem');var

VideoLightBox=function(_Component){_inherits(VideoLightBox,_Component);
function VideoLightBox(){_classCallCheck(this,VideoLightBox);var _this=_possibleConstructorReturn(this,(VideoLightBox.__proto__||Object.getPrototypeOf(VideoLightBox)).call(this));

var ds=new _reactNative.ListView.DataSource({rowHasChanged:function rowHasChanged(r1,r2){return r1!==r2;}});
_this.state={
dataSource:ds.cloneWithRows(appData)};return _this;

}_createClass(VideoLightBox,[{key:'render',value:function render()
{
return(
_react2.default.createElement(_reactNative.View,null,
_react2.default.createElement(_reactNative.ListView,{
dataSource:this.state.dataSource,
renderRow:function renderRow(rowData){return _react2.default.createElement(ListItem,{item:rowData});}})));


}}]);return VideoLightBox;}(_react.Component);exports.default=VideoLightBox;


var styles=_reactNative.StyleSheet.create({
container:{
flex:1,
justifyContent:'center',
alignItems:'center',
backgroundColor:'#F5FCFF'},

welcome:{
fontSize:20,
textAlign:'center',
margin:10},

instructions:{
textAlign:'center',
color:'#333333',
marginBottom:5}});



_reactNative.AppRegistry.registerComponent('VideoLightBox',function(){return VideoLightBox;});

//# sourceMappingURL=index.ios-compiled.js.map