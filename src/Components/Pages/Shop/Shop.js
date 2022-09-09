import React, { useEffect, useState } from 'react';
import SharedNav from '../Shared/SharedNav';
import img from '../../../assets/Image/HomeShop/glo-p-img.png'
import { TbCurrencyTaka } from 'react-icons/tb';
import banner from '../../../assets/Image/shopPage/banner.jpg'
import AuthUser from '../../../hooks/AuthUser/AuthUser';
import { useQuery } from 'react-query';
import Loading from '../../../hooks/Loading/Loading';
import Products from './Products';

const Shop = () => {
    const { token } = AuthUser()
    const [pageCount, setPageCount] = useState(0);
    const [productsCount, setProductsCount] = useState(4);
    const [pageNumber, setPageNumber] = useState(1);
    const [allProductsCount, setAllProductsCount] = useState(0);
    const [products, setProducts] = useState([]);
    // const [allProducts, setAllProducts] = useState(0)

    // const { data: products, isLoading, refetch } = useQuery('users', () =>
    //     fetch(`https://gym-management97.herokuapp.com/api/products`, {
    //         method: 'GET',
    //         headers: {
    //             'authorization': `Bearer ${token}`
    //         }
    //     }).then(res => res.json())
    // )
    // if (isLoading) {
    //     return <Loading />
    // }

    useEffect(() => {
        fetch(`https://gym-management97.herokuapp.com/api/products`)
            .then(res => res.json())
            .then(data => {
                // console.log(data.data.length)
                const count = Math.ceil(data.data.length / productsCount)
                setAllProductsCount(data.data.length)
                setPageCount(count)
            }, [])
    })

    useEffect(() => {
        fetch(`https://gym-management97.herokuapp.com/api/products?page=${pageNumber}&limit=${productsCount}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            }, [pageNumber, productsCount])
    })

    let active = pageNumber;
    let button = [];
    for (let number = 1; number <= pageCount; number++) {
        button.push(
            <div key={number}>
                <button onClick={() => setPageNumber(number)} className={` btn ${number === active ? ' btn-active' : ''}`}>{number}</button>
            </div>
        );
    }



    // console.log(allProducts)
    return (
        <>
            <SharedNav />
            <div className='mid-container h-[100vh]'>
                <div className='my-16 grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 sm:gap-6 gap-4'>
                    {
                        products?.data?.map(product => <Products
                            key={product._id}
                            product={product}
                        ></Products>)
                    }
                </div>

                <div className="flex btn-group">
                    <button disabled={pageNumber === 1 && true} onClick={() => setPageNumber(pageNumber - 1)} className="btn outline-0 border-none mx-2">PRE</button>
                    {
                        button.slice(0, 2).map(user => user)
                    }
                    {/* <li> */}
                    <button>.....</button>
                    {/* </li> */}
                    {
                        pageNumber > 2 &&
                        <div >
                            <button className={` btn ${active ? ' btn-active' : ''}`}>{pageNumber} </button>
                        </div>
                    }
                    <button onClick={() => setPageNumber(pageNumber + 1)} className="btn outline-0 border-none mx-2">NEX</button>

                    <div>
                        <select
                            onChange={(e) => {
                                setPageCount(e.target.value);
                                setProductsCount(e.target.value);
                                setPageNumber(1);
                            }}
                            className="md:text-lg md:ml-2 text-md mt-5 md:mt-0 text-center font-bold btn-active text-white px-2 py-2 md:px-2 md:py-[10px] rounded-lg"
                        >
                            <option value="4">4</option>
                            <option value="8">8</option>
                            <option value={allProductsCount}>All</option>
                        </select>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Shop;