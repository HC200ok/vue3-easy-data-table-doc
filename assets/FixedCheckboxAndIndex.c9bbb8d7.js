import{D as o}from"./vue3-easy-data-table.es.8e591a1b.js";import{_ as s,f as d,I as r,o as l,q as u,h}from"./app.bfb27956.js";const c=d({__name:"FixedCheckboxAndIndex",setup(x){const e=r([]),n=[{text:"PLAYER",value:"player"},{text:"TEAM",value:"team"},{text:"NUMBER",value:"number"},{text:"POSITION",value:"position",width:200},{text:"HEIGHT",value:"height",width:200},{text:"WEIGHT (lbs)",value:"weight",sortable:!0,width:200},{text:"LAST ATTENDED",value:"lastAttended",width:200},{text:"COUNTRY",value:"country",width:200}],i=[{player:"Stephen Curry",team:"GSW",number:30,position:"G",height:"6-2",weight:185,lastAttended:"Davidson",country:"USA"},{player:"Lebron James",team:"LAL",number:6,position:"F",height:"6-9",weight:250,lastAttended:"St. Vincent-St. Mary HS (OH)",country:"USA"},{player:"Kevin Durant",team:"BKN",number:7,position:"F",height:"6-10",weight:240,lastAttended:"Texas-Austin",country:"USA"},{player:"Giannis Antetokounmpo",team:"MIL",number:34,position:"F",height:"6-11",weight:242,lastAttended:"Filathlitikos",country:"Greece"}];return(m,t)=>(l(),u(h(o),{"items-selected":e.value,"onUpdate:items-selected":t[0]||(t[0]=a=>e.value=a),"fixed-checkbox":"","checkbox-column-width":40,"show-index":"","fixed-index":"","index-column-width":40,headers:n,items:i},null,8,["items-selected"]))}});var b=s(c,[["__file","FixedCheckboxAndIndex.vue"]]);export{b as default};