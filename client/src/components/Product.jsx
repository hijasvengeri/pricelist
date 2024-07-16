import { Link } from "react-router-dom"

const Product = ({product}) =>{
    return(

        
        <div className="bg-white rounded shadow-1g overflow-hidden">

            <div className="text font-semibold">{product.name}</div>
            <div className="text font-semibold">{product.address}</div>
            <div className="text font-semibold">{product.gst}</div>
            <div className="text font-semibold">{product.contactno}</div>



            <div className="mt-2 flex gap-4">
                <Link to = {'/create'} className="inline-block w-full text-center shadow-md text-sm bg-gray-700 text-white rounded-sm px-4 py-1 font-bold hover:bg-gray-600 hower:cursor-pointer">Create</Link>
            </div>



        </div>


)
    }
export default Product 






