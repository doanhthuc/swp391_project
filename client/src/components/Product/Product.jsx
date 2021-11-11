import { Link } from 'react-router-dom';
import './product.css';
import Chart from '../../components/chart/Chart';
import { productData1 } from '../../dummyData';
import { DeleteOutline, Publish } from '@material-ui/icons';
import { GetProductQuery } from '../../graphql/query';
import { useParams } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import { DataGrid } from '@material-ui/data-grid';
import {
    DeleteCommentMutation,
    UpdateProductMutation,
} from '../../graphql/mutation';
import { Box, CircularProgress } from '@material-ui/core';
import { useState } from 'react';

export default function Product() {
    const { id } = useParams();

    const [
        deleteComment,
        { loading: deletingComment, error: errorDeleteComment },
    ] = useMutation(DeleteCommentMutation);

    const [
        updateProduct,
        { loading: updatingProduct, error: errorUpdateProduct },
    ] = useMutation(UpdateProductMutation);

    const [updateProductForm, setProductForm] = useState({
        name: '',
        price: 0,
        stock: 0,
    });

    const {
        loading: productLoading,
        error: productError,
        data: productData,
    } = useQuery(GetProductQuery, {
        variables: { id },
        onCompleted: (data) => {
            console.log(data.product);
            setProductForm({
                name: data.product.name,
                price: data.product.price,
                stock: data.product.stock,
            });
        },
    });

    if (productLoading || deletingComment)
        return (
            <div className='loadingWrapper'>
                <Box sx={{ display: 'flex' }}>
                    <CircularProgress />
                </Box>
            </div>
        );
    if (productError || errorDeleteComment) return <p>Error Loading </p>;

    const onChangeProductForm = (e) => {
        setProductForm({
            ...updateProductForm,
            [e.target.name]: e.target.value,
        });
    };

    const onUpdateClick = (e) => {
        e.preventDefault();
        const imagePaths = [];
        productData.product.productImages.forEach((image) => {
            imagePaths.push(image.imagePath);
        });
        console.log({
            id,
            stock: Number(updateProductForm.stock),
            price: Number(updateProductForm.price),
            name: updateProductForm.name,

            imagePaths,
        });
        updateProduct({
            variables: {
                input: {
                    id,
                    name: updateProductForm.name,
                    stock: Number(updateProductForm.stock),
                    price: Number(updateProductForm.price),
                    imagePaths,
                },
            },
            refetchQueries: [{ query: GetProductQuery }],
        });
    };

    const handleDelete = (id) => {
        deleteComment({
            variables: { id },
            refetchQueries: [{ query: GetProductQuery }],
        });

        console.log(productData.product.comments);
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 150 },
        {
            field: 'username',
            headerName: 'Username',
            width: 200,
            renderCell: (params) => {
                return (
                    <div className='productListItem'>
                        <img className='productListImg' src='aaassa' alt='' />
                        {params.row.user.username}
                    </div>
                );
            },
        },
        { field: 'comment', headerName: 'Comment', width: 580 },
        // {
        //     field: 'createdAt',
        //     headerName: 'Created At',
        //     width: 120,
        // },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <DeleteOutline
                            className='productListDelete'
                            onClick={handleDelete.bind(this, params.row.id)}
                        />
                    </>
                );
            },
        },
    ];

    return (
        <div className='productWrapper'>
            <div className='product'>
                <div className='productTitleContainer'>
                    <h1 className='productTitle'>Product</h1>
                    <Link to='/newproduct'>
                        <button className='productAddButton'>Create</button>
                    </Link>
                </div>
                <div className='productTop'>
                    <div className='productTopLeft'>
                        <Chart
                            data={productData1}
                            dataKey='Sales'
                            title='Sales Performance'
                        />
                    </div>
                    <div className='productTopRight'>
                        <div className='productInfoTop'>
                            <img
                                src='https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
                                alt=''
                                className='productInfoImg'
                            />
                            <span className='productName'>
                                {productData.product.name}
                            </span>
                        </div>
                        <div className='productInfoBottom'>
                            <div className='productInfoItem'>
                                <span className='productInfoKey'>id:</span>
                                <span className='productInfoValue'>
                                    {productData.product.id}
                                </span>
                            </div>
                            <div className='productInfoItem'>
                                <span className='productInfoKey'>sales:</span>
                                <span className='productInfoValue'>
                                    {productData.product.sold}
                                </span>
                            </div>
                            <div className='productInfoItem'>
                                <span className='productInfoKey'>active:</span>
                                <span className='productInfoValue'>
                                    {productData.product.stock > 0
                                        ? 'Yes'
                                        : 'No'}
                                </span>
                            </div>
                            <div className='productInfoItem'>
                                <span className='productInfoKey'>
                                    in stock:
                                </span>
                                <span className='productInfoValue'>
                                    {productData.product.stock}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='productBottom'>
                    <form className='productForm'>
                        <div className='productFormLeft'>
                            <label>Product Name</label>
                            <input
                                type='text'
                                value={updateProductForm.name}
                                onChange={onChangeProductForm}
                                name='name'
                            />
                            <label>Product Price</label>
                            <input
                                type='number'
                                value={updateProductForm.price}
                                onChange={onChangeProductForm}
                                name='price'
                            />
                            <label>Stock</label>
                            <input
                                type='number'
                                value={updateProductForm.stock}
                                onChange={onChangeProductForm}
                                name='stock'
                            />
                            <label>In Stock</label>
                            <select name='inStock' id='idStock'>
                                <option value='yes'>Yes</option>
                                <option value='no'>No</option>
                            </select>
                        </div>
                        <div className='productFormRight'>
                            <div className='productUpload'>
                                <img
                                    src='https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
                                    alt=''
                                    className='productUploadImg'
                                />
                                <label for='file'>
                                    <Publish />
                                </label>
                                <input
                                    type='file'
                                    id='file'
                                    style={{ display: 'none' }}
                                />
                            </div>
                            <button
                                className='productButton'
                                onClick={onUpdateClick}
                            >
                                Update
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            {/* <div className='productBottom'> */}
            <div className='productList'>
                <DataGrid
                    rows={productData.product.comments}
                    disableSelectionOnClick
                    columns={columns}
                    pageSize={8}
                    rowsPerPage={8}
                    checkboxSelection
                />
            </div>
            {/* </div> */}
        </div>
    );
}
