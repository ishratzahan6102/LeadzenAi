import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import Loading from '../Loading';
import Pagination from '../Pagination';
import Card from './Card';
import Details from './Details';

const Dashboard = () => {

    const count = 10;
    // const [page, setPage] = useState(0) 
    // const [size, setSize] = useState(3)
    const [currentPage, setCurrentPage] = useState(1) 
    const [postPerPage, setPostPerPage] = useState(3)



    // const pages = Math.ceil(count/ size)

   


    const [information , setInformation] = useState([])
    const {data : users = [], refetch, isLoading} = useQuery({
        queryKey : ['users'],
        queryFn: async () => {
            const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
            const data = await res.json()

            console.log(data)
            return data;
        }
    })


    const lastPostIndex = Math.ceil(currentPage * postPerPage)
    const firstPostIndex = lastPostIndex - postPerPage
    const allUsers = users.slice(firstPostIndex, lastPostIndex)


    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            <h1 className='my-2 text-2xl font-extrabold p-4  text-gray-600'>Dashboard</h1>
            <div className='h-[auto] w-full p-4 grid grid-cols-1 gap-2 my-10'>
            {
                allUsers.map(user => <Card
                    user={user}
                    key={user.id}
                    setInformation={setInformation}
                ></Card>)
            }
            </div>
            




           <div className=' flex flex-col items-center my-10'>
           
           <Pagination
                totalPost={users.length}
                postPerPage={postPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            >
            </Pagination>
           </div>
            
            <Details 
           refetch={refetch}
           information={information}
           setInformation={setInformation}
           ></Details>
        </div>
    );
};

export default Dashboard;