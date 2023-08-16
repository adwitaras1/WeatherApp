
function TopBar(cityStateChanger){
    const data=[
        {title:"Mumbai",id:"1"},
        {title:"Delhi",id:"2"},
        {title:"Lucknow",id:"3"},
        {title:"Hyderabad",id:"4"},
        {title:"Chennai",id:"5"},
    ]

    function handleClick(event){
      
        cityStateChanger(event.target.value)
    }
    return(
    <>
    <h1 className="font-thin text-2xl text-center shadow-sm shadow-slate-900">TOP SEARCHES</h1>
    <div className="flex mt-5 font-bold text-sm md:text-2xl justify-around">
     {data.map(city=>(
         <button value={city.title} onClick={handleClick} className="hover:text-red-500" key={city.id}>{city.title}</button>
     
        ))}
    </div>
    </>
)
    }
    export default TopBar