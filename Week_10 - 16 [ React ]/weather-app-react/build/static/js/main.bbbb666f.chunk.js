(this["webpackJsonpweather-app-react"]=this["webpackJsonpweather-app-react"]||[]).push([[0],{17:function(e,t,a){},21:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a.n(s),i=a(10),r=a.n(i),n=(a(17),a(9)),l=a.n(n),o=a(11),h=a(2),d=a(3),u=a(5),j=a(4),b=a(0),m=function(){return Object(b.jsx)("header",{className:"App-header",children:Object(b.jsx)("section",{className:"content",children:Object(b.jsxs)("h1",{children:["Weather App ",Object(b.jsx)("span",{className:"tagline",children:" React "})]})})})};function p(){return Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"cloud-container",children:[Object(b.jsx)("span",{className:"cloud-main"}),Object(b.jsx)("span",{className:"cloud-one"}),Object(b.jsx)("span",{className:"cloud-two"})]}),Object(b.jsxs)("div",{className:"cloud-container2",children:[Object(b.jsx)("span",{className:"cloud-main"}),Object(b.jsx)("span",{className:"cloud-one"}),Object(b.jsx)("span",{className:"cloud-two"})]})]})}var x=a(7),O=a.n(x),f=(a(21),a(12));var g=function(e){return e.trigger?Object(b.jsxs)("div",{className:"popup",children:[Object(b.jsx)("button",{className:"btn--close-popup",onClick:function(){return e.setTrigger(!1)},children:Object(b.jsx)("p",{children:"x"})}),e.children]}):""},v=a(6),y=function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return Object(b.jsx)(w,{hiddenTexts:[{label:"Monday - 08 - 2021",value:"Temperature Details"},{label:"Tuesday - 08 - 2021",value:" Temperature Details"},{label:"Wednsday - 08 - 2021",value:"Temperature Details"},{label:"Thursday - 08 - 2021",value:"Temperature Details"},{label:"Fryday - 08 - 2021",value:"Temperature Details"}]})}}]),a}(c.a.Component),w=function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"collapsibleMenu",children:this.props.hiddenTexts.map((function(e){return Object(b.jsx)(N,{hiddenText:e},e.label)}))})}}]),a}(c.a.Component),N=function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(h.a)(this,a),(s=t.call(this,e)).handleToggleVisibility=s.handleToggleVisibility.bind(Object(v.a)(s)),s.state={visibility:!1},s}return Object(d.a)(a,[{key:"handleToggleVisibility",value:function(){this.setState((function(e){return{visibility:!e.visibility}}))}},{key:"render",value:function(){var e=this.state.visibility?"active":"";return Object(b.jsxs)("div",{children:[Object(b.jsxs)("button",{className:"collapsibleMenu--button",onClick:this.handleToggleVisibility,children:[this.props.hiddenText.label,Object(b.jsxs)("span",{className:"btn-icon",children:[this.state.visibility?"-":"+"," "]})]}),Object(b.jsx)("p",{className:"collapsibleMenu--content ".concat(e),children:this.props.hiddenText.value})]})}}]),a}(c.a.Component);var k=function(){var e=Object(s.useState)(!1),t=Object(f.a)(e,2),a=t[0],c=t[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("button",{className:"btn--open-popup",onClick:function(){return c(!0)},children:Object(b.jsx)("p",{children:" Forecast"})}),Object(b.jsx)(g,{trigger:a,setTrigger:c,children:Object(b.jsx)(y,{})})]})};function C(e,t,a){if(t&&e&&a)return Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:"weather",children:[Object(b.jsx)("p",{className:"txt-left txt-lg",children:" Min Temp:"}),Object(b.jsxs)("p",{className:"txt-right txt-lg",children:[e,"\xb0C"]}),Object(b.jsx)("span",{className:"clearfix",children:" "}),Object(b.jsx)("p",{className:"txt-left txt-lg",children:" Max Temp:"}),Object(b.jsxs)("p",{className:"txt-right txt-lg",children:[t,"\xb0C"]}),Object(b.jsx)("span",{className:"clearfix",children:" "}),Object(b.jsx)("p",{className:"txt-left txt-lg",children:" Humidity:"}),Object(b.jsxs)("p",{className:"txt-right txt-lg",children:[a," 0%"]}),Object(b.jsx)("span",{className:"clearfix",children:" "})]})})}var S=function(e){return Object(b.jsx)("div",{className:"weather-container ".concat(e.weatherBackground),children:Object(b.jsxs)("div",{className:"location-box",children:[Object(b.jsx)("p",{className:"city",children:e.cityName}),Object(b.jsx)("div",{className:"timestamp",children:Object(b.jsxs)("p",{className:"txt-sm",children:[O()().format("dddd")," | ",Object(b.jsx)("time",{children:O()().format("hh:mm")})," ","|",O()().format("LL")]})}),Object(b.jsxs)("div",{className:"tempContainer",children:[Object(b.jsx)("div",{className:"leftButton"}),Object(b.jsxs)("div",{className:"mainTemp",children:[Object(b.jsx)("i",{className:"wi ".concat(e.weatherIcon)}),e.tempCelsius?Object(b.jsxs)("p",{children:[e.tempCelsius," \xb0C"]}):null,Object(b.jsx)("p",{className:"conditions",children:e.description.charAt(0).toLowerCase()+e.description.slice(1).toLowerCase()})]}),Object(b.jsx)("div",{className:"rightButton"})]}),C(e.tempMin,e.tempMax,e.humidity),Object(b.jsx)(k,{})]})})},T=function(e){return Object(b.jsx)("div",{className:"alert-danger",role:"alert",children:Object(b.jsx)("p",{children:" OMG you are wrong again. Please, Enter the correct city name...!"})})},W=function(e){return Object(b.jsx)("div",{children:Object(b.jsxs)("form",{className:"margin",onSubmit:e.loadweather,children:[Object(b.jsx)("div",{children:e.error?T():""}),Object(b.jsx)("input",{type:"text",placeholder:"City",name:"city",autoComplete:"on"}),Object(b.jsx)("button",{className:"btn btn--submit",children:"Check Weather"})]})})},M=function(){var e=new Date;return Object(b.jsx)("footer",{className:"footer",children:Object(b.jsxs)("p",{children:["EPHREM | Copyright \xa9 ",e.getFullYear()," "]})})},B=function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(){var e;return Object(h.a)(this,a),(e=t.call(this)).checkWeather=function(){var t=Object(o.a)(l.a.mark((function t(a){var s,c,i;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),!(s=a.target.elements.city.value)){t.next=15;break}return t.next=5,fetch("http://api.openweathermap.org/data/2.5/weather?q=".concat(s,"&type=hour&appid=").concat("da1b504a959889b47a06cf25dcff8fe9"));case 5:return c=t.sent,t.next=8,c.json();case 8:i=t.sent,e.setState({city:"".concat(i.name),main:i.weather[0].main,celsius:e.calCelsius(i.main.temp),temp_max:e.calCelsius(i.main.temp_max),temp_min:e.calCelsius(i.main.temp_min),humidity:i.main.humidity,description:i.weather[0].description,error:!1}),e.weatherIcons(e.weatherIcon,i.weather[0].id),e.weatherBackgrounds(e.weatherBackground,i.weather[0].id),console.log(i),t.next=16;break;case 15:e.setState({error:!0});case 16:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.state={city:void 0,icon:void 0,main:void 0,celsius:void 0,tempMax:"",tempMin:"",humidity:"",description:"",error:!1,bg:void 0},e.weatherIcon={thunderstorm:"wi-thunderstorm",drizzle:"wi-sleet",rain:"wi-storm-showers",snow:"wi-snow",atmosphere:"wi-fog",clear:"wi-day-sunny",clouds:"wi-day-fog"},e.weatherBackground={thunderstormWeather:"bg-thunderstorm",drizzleWeather:"bg-sleet",rainWeather:"bg-storm-showers",snowWeather:"bg-snow",atmosphereWeather:"bg-fog",clearWeather:"bg-day-sunny",cloudsWeather:"bg-day-fog"},e}return Object(d.a)(a,[{key:"weatherIcons",value:function(e,t){switch(!0){case t>=200&&t<232:this.setState({icon:e.thunderstorm});break;case t>=300&&t<=321:this.setState({icon:e.drizzle});break;case t>=500&&t<=521:this.setState({icon:e.rain});break;case t>=600&&t<=622:this.setState({icon:e.snow});break;case t>=701&&t<=781:this.setState({icon:e.atmosphere});break;case 800===t:this.setState({icon:e.clear});break;case t>=801&&t<=804:this.setState({icon:e.clouds});break;default:this.setState({icon:e.clouds})}}},{key:"weatherBackgrounds",value:function(e,t){switch(!0){case t>=200&&t<232:this.setState({bg:e.thunderstormWeather});break;case t>=300&&t<=321:this.setState({bg:e.drizzleWeather});break;case t>=500&&t<=521:this.setState({bg:e.rainWeather});break;case t>=600&&t<=622:this.setState({bg:e.snowWeather});break;case t>=701&&t<=781:this.setState({bg:e.atmosphereWeather});break;case 800===t:this.setState({bg:e.clearWeather});break;case t>=801&&t<=804:this.setState({bg:e.cloudsWeather});break;default:this.setState({bg:e.cloudsWeather})}}},{key:"calCelsius",value:function(e){return Math.floor(e-273.15)}},{key:"render",value:function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(m,{}),Object(b.jsx)(p,{}),Object(b.jsx)(W,{loadweather:this.checkWeather,error:this.state.error}),Object(b.jsx)(S,{cityName:this.state.city,weatherIcon:this.state.icon,weatherBackground:this.state.bg,tempCelsius:this.state.celsius,tempMax:this.state.temp_max,tempMin:this.state.temp_min,humidity:this.state.humidity,description:this.state.description}),Object(b.jsx)(M,{})]})}}]),a}(c.a.Component);r.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(B,{})}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.bbbb666f.chunk.js.map