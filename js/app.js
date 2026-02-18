const trendDIV=document.getElementById('trendDIV')
const popularDIV=document.getElementById('popularDIV')
trend.map((item)=>{
    trendDIV.innerHTML+=`
    <div class="card  w-full md:w-[30%]">
    <img src="${item.image}"  class="h-[90vh] md:h-[40vh] md:w-full bg-cover bg-top" />
  <div class="pt-[20px]" >
  <div class="flex  text-[10px] text-white  font-semibold gap-2 mb-[10px]" > 
   <button class="bg-[#ffffff33] px-3 py-0.5 rounded-xl">Active</button>
         <button class="bg-[#ffffff33] px-3 py-0.5 rounded-xl">Movie</button>
  </div>
    <h3 class="font-bold  text-lg">${item.title} </h3>
  </div>
    </div>
    `
})
Popularshows.map((item)=>{
    popularDIV.innerHTML+=`
    <div class="card  w-full md:w-[30%] px-[15px] md:text-left text-center">
    <img src="${item.image}"  class="h-[90vh] md:h-[40vh] md:w-fit object-cover bg-top" />
  <div class="pt-[20px]" >
  <div class="flex  text-[10px] text-white  font-semibold gap-2 mb-[10px]" > 
   <button class="bg-[#ffffff33] px-3 py-0.5 rounded-xl">Active</button>
         <button class="bg-[#ffffff33] px-3 py-0.5 rounded-xl">Movie</button>
  </div>
    <h3 class="font-bold  text-lg">${item.title} </h3>
  </div>
    </div>
    `
})