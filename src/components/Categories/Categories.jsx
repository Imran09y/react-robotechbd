import { useEffect, useState } from "react";
import Categorylist from "../Categorylist/Categorylist";


const Categories = () => {
  const [catag, setCatag] = useState([]);
  const [dataLength, setDataLength] = useState(12);

  useEffect(() => {
    fetch('public/CataData.json')
      .then(res => res.json())
      .then(data => setCatag(data))

  }, []),
    console.log(catag);

  return (
    <div>
      <div className="mb-4 mt-6 flex flex-row">
        <input type="text" placeholder="Search here" className="input input-bordered w-full" />
        <button className="btn btn-secondary -ml-20">Search</button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-32">
        {
          catag.slice(0, dataLength).map(cate => <Categorylist key={cate.id} cate={cate}></Categorylist>)
        }
      </div>
      <div className={dataLength === catag.length && 'hidden'}>
        <div className="text-center mt-4 mb-4">
        <button onClick={()=>setDataLength(catag.length)} className="btn btn-active btn-secondary">Show All Components</button> 
        </div>
      </div>
      <div className="flex felx-row gap-4  justify-center mt-8 mb-8">
        <button className="btn btn-warning ">First Page</button>
        <button className="btn btn-warning ">2</button>
        <button className="btn btn-warning ">3</button>
        <button className="btn btn-warning ">...</button>
        <button className="btn btn-warning ">Last Page</button>
      </div>

    </div>
  );
};

export default Categories;