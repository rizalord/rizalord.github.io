import React, { useState } from 'react';

interface PaginationProps {
    totalPage: number;
    initialPage: number;
    handlePagination: (page: number) => void;
}

const DefaultPagination: React.FC<PaginationProps> = ({ totalPage, initialPage, handlePagination }) => {
    const [currentPage, setCurrentPage] = useState(initialPage);

    const getPages = () => {
        const pages = [];
        if (totalPage <= 5) {
            for (let i = 1; i <= totalPage; i++) {
                pages.push(i);
            }
        } else {
            if (currentPage <= 3) {
                pages.push(1, 2, 3, '...', totalPage);
            } else if (currentPage >= totalPage - 2) {
                pages.push(1, '...', totalPage - 2, totalPage - 1, totalPage);
            } else {
                pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPage);
            }
        }
        return pages;
    };

    const handlePageClick = (page: number) => {
        setCurrentPage(page);
        handlePagination(page);
    };

    return (
        <nav className="mt-10 flex items-center justify-center gap-1.5">
            <button
                type="button"
                onClick={() => handlePageClick(currentPage - 1)}
                disabled={currentPage === 1}
                className="inline-flex min-h-9 min-w-9 items-center justify-center rounded-lg border border-light text-center text-dark transition hover:border-primary hover:text-primary focus:outline-none focus:ring-2 disabled:pointer-events-none disabled:opacity-50 dark:border-dark dark:text-muted dark:hover:border-primary dark:hover:text-primary"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="h-4 w-4"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                    />
                </svg>
                <span aria-hidden="true" className="sr-only">Previous</span>
            </button>
            {getPages().map((page, index) => (
                <button
                    key={index}
                    type="button"
                    onClick={() => typeof page === 'number' && handlePageClick(page)}
                    className={`inline-flex min-h-9 min-w-9 items-center justify-center rounded-lg border border-light text-center text-dark transition hover:border-primary hover:text-primary focus:outline-none focus:ring-2 disabled:pointer-events-none disabled:opacity-50 dark:border-dark dark:text-muted dark:hover:border-primary dark:hover:text-primary ${currentPage === page ? 'border-primary text-primary' : ''}`}
                    aria-current={currentPage === page ? 'page' : undefined}
                    disabled={typeof page !== 'number'}
                >
                    {page}
                </button>
            ))}
            <button
                type="button"
                onClick={() => handlePageClick(currentPage + 1)}
                disabled={currentPage === totalPage}
                className="inline-flex min-h-9 min-w-9 items-center justify-center rounded-lg border border-light text-center text-dark transition hover:border-primary hover:text-primary focus:outline-none focus:ring-2 disabled:pointer-events-none disabled:opacity-50 dark:border-dark dark:text-muted dark:hover:border-primary dark:hover:text-primary"
            >
                <span aria-hidden="true" className="sr-only">Next</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="h-4 w-4"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    />
                </svg>
            </button>
        </nav>
    );
};

export default DefaultPagination;