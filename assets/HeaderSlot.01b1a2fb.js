import{D as c}from"./vue3-easy-data-table.es.8e591a1b.js";import{m}from"./mock.edb4688c.js";import{_ as d,f as u,I as i,o as n,q as w,w as r,h as v,b as A,d as o,t as g}from"./app.bfb27956.js";var h="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAutJREFUaEPt2EuoFUcQBuDPlQt1bRQUyUaIIBhBTIISV76iuDHZRFB8oijRqCgujCslERUfkGhCAgpiCAhqTBDxgSi4MLjxFUREwSi48wFZKQV9YDh47Zk7c+694mkYzmG6+q//7+qu7ppB3vE26B3nryugvyPYjUA3AjVnoLuEak5g7eGdiMAYrMR4fILH+Ad38F1txm0ATQtYiP0Y0gPREDEPt5sS0qSAL3AyEbuG33AXw/AhtqT/YTIaD5sQ0ZSASbiaCJ3AYjxtI/gZfsFYhMCpeFlXRFMCLuNT3Me09PsmbrF8jqeOndgwUAQ8w1Csw+4Mqd8xH2cwfSAI+Ag3EpFxuJkhFRnqAJ7gg4Eg4HOcT0TKLMmq9m/VWMZhbpKqEqpq3xWQi0AcWs+T0eRCOu1p3Ddpo19IGSuH3/EIhIM/MQvbSlwXTmMm1mJPLfY0VlKuxw8lMlHchbYmuwm4PlAERCqN/B5pNNocnGojtww/pXe78G1d8jG+iSzU4tEuIs6GixiFiRiZDEPoV02Qb1pA4LWLaOfZyMYtgjYVgblp2czGiMzs/ouj+KtExsoGqq6AOJRiU8Zvq8UV4UHhifdxfW49wwu2cbGL+uFclmkPBnUEFDNKwMfa/hV/Z8jMwCJ8WbCLcZHFblUV0lsBrRtl+Ps5FS9xpa7Soj6ICm5JGhRlZxRF/1UB6Y2AIvmNhfxfxW/RNmqC79OLs6nkfFEWrKqAIvkVhbxe1l9PdsvxY+r8I9ULpTCrCFiKgwk18niIabLFnjiWAOPQO1QGvKyAOIQupeL8CBaUAe+FzWF8jXuYgkc5jLIC9mI1/k+1b2y4TrSPcQWDsQ9rck7KCniVgHZgcw60Zv92bEoYWX5ZgwTUEhBfHOI60MlWqWJ77wREwdIXrVUzZCc4a9C2hPqCfNFHll/WIKHFd5y4Kvdli+9Lq3IOywrI4fRbf1dAv0192YOivwnm/HeXUG6GOt3fjUCnZziH/xp/0Hcxg/0DRAAAAABJRU5ErkJggg==",x="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAABFVJREFUaEPtmGvon2MYxz8ryzRMygstUTPkNCaMeeHQZLQyx2hOs0YZIQxZQ8lxzdiEnE8xxZKGF07ZNHKaxXIe5QVSmtpqaPrUdde9Z4/9nt/9PLb+9bvq7vn//vfp+72vw31d9zCGuAwb4vgZENjWGhxoYKCBlicwMKHKAY4E9gcOyL6/Al8CX8R3TctD32R6lxo4DngQ2KcHwIXAlcA/XRDpisB5wFMZoL+AD4EPgN2BwyrEvgJOC4204tEFgVeBUwLF18D1wJvA2gqyPYGzgTuz/98M3NKGQVsC1wJ3BYDHgIsbgDkEkPToGKu/6CNF0obAXsAPsesFFRNqAsa5rvFJmFiTOZuNaUNgMXAm8HLYc774hcAVwL7AH8D3wO3A0mzQfsDq+H0DcEcJg1ICRhodUZkQzpr2167n/geYy4AHsj5JLgA+BcZvTQLnAM8BnwPjso2PBd6O3y8CNm38jPh+BxwF/BZjDgRWAX8Do4B1/ZIo1cD8iOVPA+dnmz4SjvwO4L2QRJN6PH7MAB6Nv4cH6O1CA2qiLykl4EZGk8sBL6Yk3rq7AZcAD1eQJKdVK2dlfd8AewPeJc/0hR6KC5r1wIiI/7ljaj6a0RPARRkYL7KP4rdxXz9JsgI4Eihy5FINGD2MIlcB92ZgkgOb79i3JEKlJpQc+yTgjWzO78CugH71/NbSgA7shtUQujPwfjisWEzgdOIkmoimkkQzTHZvyPUm70tKNTA5i+kTA3Ta+ETgbuDgChLJenMbiZLcBtwIVJ2+MYlSAm6QnK8uhdgp/MOb1pzop0gfcmA7AMuBQ+PSu78x6mxgGwKzs9tzSg3AXnjmALcCP4YT/9JrQl1/GwLGbu39cODdiD5NMRwUp6+mrgHmNZ1YHdeGgGsZz1+IRasRaUuYnowL8LM4/Q3bioD7SkAiPwM6tCaxJZkKvBQDTL/1oWJpqwE31oQ0JU1qETCrBxod9+jImY4vRh4TuyDgUqbCOrVi1WWqXSfa+tXRcXqmiWIeXREwk3wrErJvgRMidObApmdJ3EPApcWos4ldEXBJ62JLReVZYFq2zxGRPuwSxb65TyfShsD2YS6nAjrm2EilLeqVlKn6VvQ6cAzga8UY4Kao4rydzZfyhLAvYqUETNrMhfI3oJRlvhdgBWJ0suy0KScDr4UDm7UmWQbcFwXQ/06gWjIKyJanAhtrUFwXOZJdgrelSi0NTwQbkyjRQCpMrL5849Fp6yQV/UkTFjJ14gOXp+8zS7WO6EmkhECK46bKkjC1thKrk5nAx9Hq+o1W5wJGKOWeyFh7Ak8DSgj4eGsRMykWsTozM1UTNgt2n1JSs3Iz+qTmC50lpE6fHrdcqunD2CbkSgikBbxxtes9Gh9X/UA16uveKyXrtCHgfjtGcW9l5fOKZaZVWd5M1P6MuiB9TeJWAn5txdKWQPHGXU0cEOjqJEvXGWig9OS6mjfQQFcnWbrOkNfAv+zwyjHFyXD0AAAAAElFTkSuQmCC";const E={class:"customize-header"},C=A("img",{src:h,class:"header-icon"},null,-1),p={class:"customize-header"},R=A("img",{src:x,class:"header-icon"},null,-1),F=u({__name:"HeaderSlot",setup(I){const t=i(m(100)),l=[{text:"Name",value:"name"},{text:"Address",value:"address"},{text:"Height",value:"height",sortable:!0},{text:"Weight",value:"weight",sortable:!0},{text:"Age",value:"age",sortable:!0},{text:"Favourite sport",value:"favouriteSport"},{text:"Favourite fruits",value:"favouriteFruits"}],s=i([t.value[14]]);return(Q,a)=>(n(),w(v(c),{"items-selected":s.value,"onUpdate:items-selected":a[0]||(a[0]=e=>s.value=e),"show-index":"",headers:l,items:t.value},{"header-name":r(e=>[A("div",E,[C,o(" "+g(e.text),1)])]),"header-address":r(e=>[A("div",p,[R,o(" "+g(e.text),1)])]),_:1},8,["items-selected","items"]))}});var B=d(F,[["__file","HeaderSlot.vue"]]);export{B as default};
