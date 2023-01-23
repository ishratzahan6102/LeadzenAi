import React from 'react';

const Pagination = ({totalPost, postPerPage, setCurrentPage,currentPage }) => {
    let pages =[]

    for (let i = 1 ; i <= Math.ceil(totalPost / postPerPage) ; i++ ){
        pages.push(i);
    }
    return (
        <div>
            {
                pages.map((page, index) => {
                    return (<button className={page === currentPage ? "btn btn-neutral mx-1 btn-sm " : "btn btn-primary mx-1 btn-sm "} key={index} onClick={() => setCurrentPage(page)}>{page}</button>)
                })
            }
        </div>
    );
};

export default Pagination;