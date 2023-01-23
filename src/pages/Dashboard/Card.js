import React from 'react';
import Details from './Details';

const Card = ({ user, refetch, setInformation }) => {
    const { name, username, email, address, phone, website, company } = user


   



    return (
        <div>
            <div className="card w-full bg-gray-100 rounded-lg p-4  shadow-xl ">
                <div className="card-body w-full grid grid-cols-2  lg:grid-cols-5 gap-2 text-sm text-start items-start ">
                  
               
                      
                        <span>{company.name}</span>
                    
                    <div className='flex flex-col'>
                        <span className=' font-bold '>Username</span>
                        <span>{username}</span>
                    </div>
                    <div className='flex flex-col'>
                        <span className=' font-bold '>City</span>
                        <span>{address.city}</span>
                    </div>
                    <div className='flex flex-col'>
                        <span className=' font-bold '>Street</span>
                        <span>{address.street}</span>
                    </div>
                    <div className="card-actions justify-start lg:justify-end">
                        
                        <label 
                        onClick={()=>setInformation(user)} 
                        htmlFor="my-modal-5" 
                        className=" btn btn-primary btn-sm normal-case mt-10 lg:mt-0  rounded-2xl"
                        >
                        
                        View details</label>
                    </div>
                </div>
            </div>



            {/* The button to open modal */}
            
         
            {/* Put this part before </body> tag */}
           


        </div>
    );
};

export default Card;