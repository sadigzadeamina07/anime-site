let trendDIV=document.getElementById('trendDIV')

trend.map((item)=>{
    trendDIV.innerHTML+=`
    <div class="card  w-full md:w-[25%]">
    <img src="${item.image}"  class="h-[50vh] object-cover bg-center" />
    <p></p>
    <h3 class="font-bold  text-2xl">${item.title} </h3>
    </div>
    `
})