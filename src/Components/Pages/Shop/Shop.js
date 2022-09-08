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
    const [productsCount, setProductsCount] = useState(2);
    const [pageNumber, setPageNumber] = useState(0);
    const [allProductsCount, setAllProductsCount] = useState(0);
    const [products, setProducts] = useState([]);
    const [allProducts, setAllProducts] = useState(0)

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
                console.log(data.data.length)
                setAllProducts(data?.data.length)
            }, [])
    })

    useEffect(() => {
        fetch(`https://gym-management97.herokuapp.com/api/products?page=${pageNumber}&limit=${productsCount}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            }, [])
    })


    console.log(allProducts)
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

                <div className="btn-group my-10">
                    <button className="btn">1</button>
                    <button className="btn btn-active">2</button>
                    <button className="btn">3</button>
                    <button className="btn">4</button>
                </div>
            </div>
        </>
    );
};

export default Shop;