import{D as o}from"./vue3-easy-data-table.es.8e591a1b.js";import{_ as r,f as u,I as c,o as m,c as d,a as p,h,d as a,t as g,F as v,b as n}from"./app.bfb27956.js";const A=n("br",null,null,-1),S=n("br",null,null,-1),_=u({__name:"MultipleSelecting",setup(x){const e=c([]),l=[{text:"PLAYER",value:"player"},{text:"TEAM",value:"team"},{text:"NUMBER",value:"number"},{text:"POSITION",value:"position"},{text:"HEIGHT",value:"height"},{text:"WEIGHT (lbs)",value:"weight",sortable:!0},{text:"LAST ATTENDED",value:"lastAttended"},{text:"COUNTRY",value:"country"}],s=[{player:"Stephen Curry",team:"GSW",number:30,position:"G",height:"6-2",weight:185,lastAttended:"Davidson",country:"USA"},{player:"Lebron James",team:"LAL",number:6,position:"F",height:"6-9",weight:250,lastAttended:"St. Vincent-St. Mary HS (OH)",country:"USA"},{player:"Kevin Durant",team:"BKN",number:7,position:"F",height:"6-10",weight:240,lastAttended:"Texas-Austin",country:"USA"},{player:"Giannis Antetokounmpo",team:"MIL",number:34,position:"F",height:"6-11",weight:242,lastAttended:"Filathlitikos",country:"Greece"}];return(y,t)=>(m(),d(v,null,[p(h(o),{"items-selected":e.value,"onUpdate:items-selected":t[0]||(t[0]=i=>e.value=i),headers:l,items:s},null,8,["items-selected"]),A,a(" items selected:"),S,a(" "+g(e.value),1)],64))}});var f=r(_,[["__file","MultipleSelecting.vue"]]);export{f as default};