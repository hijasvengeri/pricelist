import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import '../styles/CreatePage.css';

const CreatePage =() =>{

const[name, setName]=useState();
const[address, setAddress]=useState();
const[gst, setGst]=useState();
const[contactno, setContact]=useState();
const[isLoading, setIsLoading]=useState(false)
const navigate=useNavigate();


const saveCustomer= async(e)=>{
    e.preventDefault();
    if (name===""|| address===""){
        alert('Name and Address is mandatory');
        return
    }
    try {
        setIsLoading(true)
         await axios.post("http://localhost:3000/api/products",{name:name, address:address, gst:gst, contactno:contactno}) ;
        // await axios.post("https://stoic-wind-00345.pktriot.net/api/products",{name:name, address:address, gst:gst, contactno:contactno}) ;  
        // alert('Saved Successfully');
        setIsLoading(false);
        navigate("/")

    } catch (error) {
        console.log(error);
        setIsLoading(false)
    }
}

    return(
        <div className="max-w-lg bg-gray-300 shadow-lg mx-auto p-7 rounded mt-6">
        
            <h2 className="font-semibold text-2xl mb-4 block tex-center">
                Create a customer
            </h2>
            <form onSubmit={saveCustomer}> 
                {/* <div className="space-y-2"> */}
                    {/* <div>
                        <label>PartyName</label>
                        <input type="text" value={name} onChange={(e)=> setName(e.target.value)} className="w-full block border p-3 text-black 600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400" placeholder="Enter Name"></input>
                    </div> */}

                    <div className="body">
                    <div className="inputBox">
                    <input type="text" required="required" value={name} onChange={(e)=> setName(e.target.value)}></input>
                    <span>Party Name</span> 
                    </div>
                    
                  
                    <div className="inputBox">
                    <input type="text" required="required" value={address} onChange={(e)=> setAddress(e.target.value)}></input>
                    <span>Address</span> 
                    </div>
                    
                   
                    <div className="inputBox">
                    <input type="text" required="required" value={gst} onChange={(e)=> setGst(e.target.value)}></input>
                    <span>GST No</span> 
                    </div>
                    

                    <div className="inputBox">
                    <input type="text" required="required" value={contactno} onChange={(e)=> setContact(e.target.value)}></input>
                    <span>Contact No</span> 
                    </div>


                    <div>
                        {!isLoading  && (
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Save Data
                        </button>
                        )}
                    </div>

                </div>
            </form>


        </div>
    )
}

export default CreatePage;


