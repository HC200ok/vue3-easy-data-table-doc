const k=(s=100)=>{const a=[],o=["basketball","football","running","swimming"],n=["banana","apple","orange","peach"];for(let e=1;e<s+1;e+=1)a.push({name:`name-${e}`,address:`address-${e}`,height:e,weight:e,age:e,favouriteSport:o[e%4],favouriteFruits:n[e%4]});return a},b=async(s,a=501)=>{const{page:o,rowsPerPage:n,sortBy:e,sortType:r}=s,i=k(a);return e&&r&&i.sort((t,l)=>t[e]<l[e]?r==="desc"?1:-1:t[e]>l[e]?r==="desc"?-1:1:0),await new Promise(t=>setTimeout(t,3e3)),{serverCurrentPageItems:i.slice((o-1)*n,o*n),serverTotalItemsLength:a}},c=async s=>(await new Promise(o=>setTimeout(o,2e3)),{"Stephen Curry":"Wardell Stephen Curry II is an American professional basketball player for the Golden State Warriors of the National Basketball Association (NBA).","Lebron James":"LeBron Raymone James Sr is an American professional basketball player for the Los Angeles Lakers of the National Basketball Association (NBA).","Kevin Durant":"Kevin Wayne Durant also known by his initials KD, is an American professional basketball player for the Brooklyn Nets of the National Basketball Association (NBA).","Giannis Antetokounmpo":"Giannis Sina Ugo Antetokounmpo (n\xE9 Adetokunbo; December 6, 1994) is a Greek-Nigerian professional basketball player for the Milwaukee Bucks of the National Basketball Association (NBA).","Stephen Curry JR":"Wardell Stephen Curry II is an American professional basketball player for the Golden State Warriors of the National Basketball Association (NBA).","Lebron James JR":"LeBron Raymone James Sr is an American professional basketball player for the Los Angeles Lakers of the National Basketball Association (NBA).","Kevin Durant JR":"Kevin Wayne Durant also known by his initials KD, is an American professional basketball player for the Brooklyn Nets of the National Basketball Association (NBA).","Giannis Antetokounmpo JR":"Giannis Sina Ugo Antetokounmpo (n\xE9 Adetokunbo; December 6, 1994) is a Greek-Nigerian professional basketball player for the Milwaukee Bucks of the National Basketball Association (NBA)."}[s]);export{b as a,c as b,k as m};