// JavaScript Document
$(search).click(function(){
  
      cityWeather($(city).val());
  
})
  
// vue展示
var vmWeather = new Vue({
     el:"#weather",
     data:{
         weatherData:{}
     }
})

// 默认显示天津
cityWeather("深圳");

// 天气接口
function cityWeather(city) {
 
     // 清空对象
     vmWeather.weatherData = {};
 
     $.ajax({
 
         type: "POST",//默认是GET
 
         url: "https://api.map.baidu.com/telematics/v3/weather?",
 
         dataType: "jsonp",
 
         data: {
 
             location: city, // 城市
 
             output: "json", // 格式
 
             ak: "ohA7QHfg0BBrpiY4kyuIAAsD" // 百度地图ak
 
         },
 
         success: function (data) {
 
             console.log(data);
 
			 vmWeather.weatherData = data;
         }
 
     });
 
}