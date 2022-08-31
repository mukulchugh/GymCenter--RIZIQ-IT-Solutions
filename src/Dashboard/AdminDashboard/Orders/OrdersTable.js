import React from 'react';

const OrdersTable = ({product, index}) => {
    // console.log(product.length)

    return (
        <tr>
            <th>{++index}</th>
            <td>{product?.email}</td>
            <td>{product?.order_date}</td>
            <td className='font-bold'>৳ {product?.total_price}</td>
            <td>{product?.payment_type_value}</td>
        </tr>
    );
};

export default OrdersTable;