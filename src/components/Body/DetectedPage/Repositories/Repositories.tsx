import React, { useEffect, useState } from 'react';
import ReactPaginate, { ReactPaginateProps } from "react-paginate";
import style from './Repositories.module.css';

import { UserRepositoryType } from '../../../../api/git-api';
import { ButtonArrow } from './ButtonArrow/ButtonArrow';

type ElementType = {
    currentItems: UserRepositoryType[]
}

const Element = ({ currentItems }: ElementType) => {
    return (
        <div>
            {currentItems &&
                currentItems.map((el, index) => (
                    <div className={style.element} key ={index} >
                        <a href={el.html_url} target="_blank" rel="noreferrer">{el.name}</a>
                        <div className={style.description}>{el.description ? el.description : ''}</div>
                    </div>
                ))}
        </div>
    );
}

type RepositoriesType = {
    repos: UserRepositoryType[]
}

export function Repositories({ repos }: RepositoriesType) {

    const [currentItems, setCurrentItems] = useState<UserRepositoryType[] | null>(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 4;

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(repos.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(repos.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, repos]);

    const handlePageClick = (e: { selected: number }) => {
        const newOffset = (e.selected * itemsPerPage) % repos.length;
        setItemOffset(newOffset);
    };

    return (
        <div className={style.container}>
            <div className={style.elementsContainer} >
                <div className={style.title}>Repositories ({repos.length})</div>
                {(currentItems !== null) && <Element currentItems={currentItems} />}
            </div>
            <div className={style.paginationContainer}>
                <div>{repos.length > 4 ? <>{itemOffset + 1}-{itemOffset + itemsPerPage} of {repos.length} items</>
                    : <> {itemOffset + 1} of {repos.length} items </>} </div>
                <ReactPaginate
                    breakLabel="..."
                    marginPagesDisplayed={1}
                    nextLabel={<ButtonArrow transform={{ transform: 'rotate(180deg)' }} />}
                    disabledClassName={style.disabled}
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={2}
                    pageCount={pageCount}
                    pageClassName={style.page}
                    previousLabel={<ButtonArrow />}
                    renderOnZeroPageCount={(props: ReactPaginateProps) => null}
                    containerClassName={style.pagination}
                    activeClassName={style.active}
                />
            </div>
        </div>
    );
}





