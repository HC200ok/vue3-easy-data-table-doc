import{D as s}from"./vue3-easy-data-table.es.8e591a1b.js";import{_ as o,f as r,I as l,o as u,q as d,h}from"./app.bfb27956.js";const m=r({__name:"FixedColumns",setup(p){const e=l([]),i=[{text:"PLAYER",value:"player",fixed:!0,width:200},{text:"TEAM",value:"team",fixed:!0,width:100},{text:"NUMBER",value:"number",width:200},{text:"POSITION",value:"position",width:200},{text:"HEIGHT",value:"height",width:200},{text:"WEIGHT (lbs)",value:"weight",sortable:!0,width:200},{text:"LAST ATTENDED",value:"lastAttended",width:200},{text:"COUNTRY",value:"country",width:200}],n=[{player:"Stephen Curry",team:"GSW",number:30,position:"G",height:"6-2",weight:185,lastAttended:"Davidson",country:"USA"},{player:"Lebron James",team:"LAL",number:6,position:"F",height:"6-9",weight:250,lastAttended:"St. Vincent-St. Mary HS (OH)",country:"USA"},{player:"Kevin Durant",team:"BKN",number:7,position:"F",height:"6-10",weight:240,lastAttended:"Texas-Austin",country:"USA"},{player:"Giannis Antetokounmpo",team:"MIL",number:34,position:"F",height:"6-11",weight:242,lastAttended:"Filathlitikos",country:"Greece"}];return(c,t)=>(u(),d(h(s),{"items-selected":e.value,"onUpdate:items-selected":t[0]||(t[0]=a=>e.value=a),"show-index":"",headers:i,items:n},null,8,["items-selected"]))}});var v=o(m,[["__file","FixedColumns.vue"]]);export{v as default};
