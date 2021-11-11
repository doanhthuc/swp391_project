import { useState } from 'react';
import { CreateProductMutation } from '../../graphql/mutation';
import './newProduct.css';
import { useMutation, useQuery } from '@apollo/client';
import { GetCategoriesQuery, GetProductsQuery } from '../../graphql/query';
import { useHistory } from 'react-router-dom';

const initialState = {
    name: '',
    oldPrice: 0.0,
    price: 0.0,
    stock: 0,
    brand: '',
    material: '',
    origin: '',
    sendFrom: '',
    categoryName: 'laptop',
    star: 0,
    imagePaths: '',
};

export default function NewProduct() {
    const history = useHistory();
    const [productForm, setProductForm] = useState(initialState);
    const {
        loading: categoriesLoading,
        error: categoriesError,
        data: categoriesData,
    } = useQuery(GetCategoriesQuery);
    
    const [createProduct, { loading, error }] = useMutation(
        CreateProductMutation,
        {
            onCompleted: (data) => {
                console.log(data);
                history.push('/products');
            },
        }
    );

    const onProductFormChange = (event) => {
        setProductForm({
            ...productForm,
            [event.target.name]: event.target.value,
        });
    };

    const onCreateProductClick = (event) => {
        event.preventDefault();
        // setProductForm(initialState);
        createProduct({
            variables: {
                input: {
                    ...productForm,
                    imagePaths: [productForm.imagePaths],
                },
            },
            refetchQueries: [{ query: GetProductsQuery }],
        });
    };

    if (categoriesLoading || loading) return <p>Loading...</p>;
    if (categoriesError || error) return <p>Error Loading !</p>;

    return (
        <div className='newProduct'>
            <h1 className='addProductTitle'>New Product</h1>
            <form className='addProductForm'>
                {/* <div className='addProductItem'>
                    <label>Image</label>
                    <input type='file' id='file' />
                </div> */}
                <div className='addProductItem'>
                    <label>Product name</label>
                    <input
                        type='text'
                        placeholder='name'
                        name='name'
                        onChange={onProductFormChange}
                        value={productForm.name}
                    />
                </div>
                <div className='addProductItem'>
                    <label>Old Price</label>
                    <input
                        type='number'
                        placeholder='0.0'
                        name='oldPrice'
                        value={productForm.oldPrice}
                        onChange={onProductFormChange}
                    />
                </div>
                <div className='addProductItem'>
                    <label>Price</label>
                    <input
                        type='number'
                        placeholder='0.0'
                        name='price'
                        onChange={onProductFormChange}
                        value={productForm.price}
                    />
                </div>
                <div className='addProductItem'>
                    <label>Stock</label>
                    <input
                        type='number'
                        placeholder='0'
                        name='stock'
                        value={productForm.stock}
                        onChange={onProductFormChange}
                    />
                </div>
                <div className='addProductItem'>
                    <label>Images</label>
                    <input
                        type='text'
                        placeholder=''
                        name='imagePaths'
                        value={productForm.imagePaths}
                        onChange={onProductFormChange}
                    />
                </div>
                <div className='addProductItem'>
                    <label>Star</label>
                    <input
                        type='number'
                        placeholder='0'
                        name='star'
                        value={productForm.star}
                        onChange={onProductFormChange}
                    />
                </div>
                <div className='addProductItem'>
                    <label>Brand</label>
                    <input
                        type='text'
                        placeholder='brand'
                        name='brand'
                        value={productForm.brand}
                        onChange={onProductFormChange}
                    />
                </div>
                <div className='addProductItem'>
                    <label>Category</label>

                    <select
                        name='categoryName'
                        onChange={onProductFormChange}
                        value={productForm.categoryName}
                    >
                        {categoriesData.categories.map((category) => (
                            <option value={category.name} key={category.id}>
                                {category.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className='addProductItem'>
                    <label>Material</label>
                    <input
                        type='text'
                        placeholder='material'
                        name='material'
                        onChange={onProductFormChange}
                        value={productForm.material}
                    />
                </div>
                <div className='addProductItem'>
                    <label>Origin</label>
                    <input
                        type='text'
                        placeholder='origin'
                        name='origin'
                        onChange={onProductFormChange}
                        value={productForm.origin}
                    />
                </div>
                <div className='addProductItem'>
                    <label>Send From</label>
                    <input
                        type='text'
                        placeholder='sendFrom'
                        name='sendFrom'
                        onChange={onProductFormChange}
                        value={productForm.sendFrom}
                    />
                </div>
                <button
                    className='addProductButton'
                    onClick={onCreateProductClick}
                >
                    Create
                </button>
            </form>
        </div>
    );
}
