import React from 'react';

const Details = ({ information , setInformation , refetch}) => {
    const { name, username, email, suite, phone, website, zipcode, company } = information

    const setChange = () => {
        refetch()
    }

    return (
        <div>
            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-11/12 max-w-5xl p-10  ">
                    <h3 className="font-bold text-lg">Description</h3>
                    <h4 className='w-full'>{company?.catchPhrase?.catchPhrase}</h4>

                    <div className='grid grid-cols-2 gap-4 mt-10'>

                    <div className='flex flex-col '>
                        <span className=' font-bold '>Contact Person</span>
                        <span>{name}</span>
                    </div>
                    <div className='flex flex-col'>
                        <span className=' font-bold '>Username</span>
                        <span>{username}</span>
                    </div>
                    <div className='flex flex-col'>
                        <span className=' font-bold '>Suite</span>
                        <span>{suite}</span>
                    </div>
                    <div className='flex flex-col'>
                        <span className=' font-bold '>Zipcode</span>
                        <span>{zipcode}</span>
                    </div>
                    <div className='flex flex-col'>
                        <span className=' font-bold '>Email</span>
                        <span>{email}</span>
                    </div>
                    <div className='flex flex-col'>
                        <span className=' font-bold '>Phone</span>
                        <span>{phone}</span>
                    </div>
                    <div className='flex flex-col'>
                        <span className=' font-bold '>Website</span>
                        <span>{website}</span>
                    </div>

                    </div>




                    <div className="modal-action">
                        <label onClick={setChange} htmlFor="my-modal-5" className="btn rounded-2xl  normal-case text-black btn-sm btn-primary">Hide information</label>
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default Details;