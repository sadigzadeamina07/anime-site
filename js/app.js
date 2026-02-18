const trendDIV=document.getElementById('trendDIV')
const popularDIV=document.getElementById('popularDIV')
const TopviewsDIV=document.getElementById('TopviewsDIV')
trend.map((item)=>{
    trendDIV.innerHTML+=`
    <div class="  px-[15px]   mb-[20px]   w-[75%] sm:w-[40%] lg:w-[33%]">
    <img src="${item.image}"  class=" h-[60vh] lg:h-[45vh] w-full  rounded-lg  object-cover object-center" />
  <div class="pt-[20px]" >
  <div class="flex  text-[10px] text-white  font-semibold gap-2 mb-[10px]" > 
   <button class="bg-[#ffffff33] px-3 py-0.5 rounded-xl">Active</button>
         <button class="bg-[#ffffff33] px-3 py-0.5 rounded-xl">Movie</button>
  </div>
    <h3 class="font-semibold  text-[18px]">${item.title} </h3>
  </div>
    </div>
    `
})
Popularshows.map((item)=>{
    popularDIV.innerHTML+=`
    <div class=" mb-[20px]  w-[75%] sm:w-[40%] lg:w-[33%]  px-[15px] ">
    <img src="${item.image}"  class="h-[60vh] lg:h-[45vh] rounded-lg  w-full object-cover object-top " />
  <div class="pt-[20px]" >
  <div class="flex  text-[10px] text-white  font-semibold gap-2 mb-[10px]" > 
   <button class="bg-[#ffffff33] px-3 py-0.5 rounded-xl">Active</button>
         <button class="bg-[#ffffff33] px-3 py-0.5 rounded-xl">Movie</button>
  </div>
    <h3 class="font-semibold  text-[18px]">${item.title} </h3>
  </div>
    </div>
    `
})
Topviews.map((item)=>{
    TopviewsDIV.innerHTML+=`
    <div class="col-span-2 relative  mx-auto lg:mx-0  w-[80%] sm:w-[55%] lg:w-full    mb-[20px]">
    <img src="${item.image}"  class=" rounded-lg  w-full object-cover object-top " />
    <h3 class="font-semibold absolute bottom-5 left-5  text-[18px]">${item.title} </h3>
    </div>
    `
})
