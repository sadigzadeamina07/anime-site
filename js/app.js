let trendDIV=document.getElementById('trendDIV')

trend.map((item)=>{
    trendDIV.innerHTML+=`
    <div class="card  w-full md:w-[30%]">
    <img src="${item.image}"  class="h-[90vh] md:h-[50vh] md:w-fit object-cover bg-top" />
    <p></p>
    <h3 class="font-bold  text-2xl">${item.title} </h3>
    </div>
    `
})