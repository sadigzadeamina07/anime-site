let trendDIV=document.getElementById('trendDIV')
fetch('data.js')
.then(res => res.json())
.then(data=>
    trenddata=data
)
trendata.map((item)=>{
    trendDIV.innerHTML+=`
    <div class="">
    
    
    </div>
    `
})