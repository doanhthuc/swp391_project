import "./productList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from "../../dummyData";
import { Link, useHistory } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";
import { GetProductsQuery } from "../../graphql/query";
import { useState } from "react";
import { DeleteProductMutation } from "../../graphql/mutation";
import { Box, CircularProgress } from "@material-ui/core";

export default function ProductList() {
  const history = useHistory();

  const [deleteProduct, { loading: deletingProduct, error: errorDeleteProduct }] = useMutation(DeleteProductMutation, {
    refetchQueries: [{ query: GetProductsQuery }],
  });

  const { loading, error, data } = useQuery(GetProductsQuery, {
    variables: {
      page: 1,
      limit: 100,
      order: "ASC",
      field: "price",
    },
  });

  const handleDelete = (id) => {
    deleteProduct({
      variables: { id },
    });
    history.go();
  };

  if (loading || deletingProduct)
    return (
      <div className="loadingWrapper">
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      </div>
    );
  if (error || errorDeleteProduct) return <div className="productList">Error Loading </div>;

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "product",
      headerName: "Product",
      width: 450,
      renderCell: (params) => {
        return <div className="productListItem">{params.row.name}</div>;
      },
    },
    { field: "stock", headerName: "Stock", width: 120 },
    {
      field: "sold",
      headerName: "Sold",
      width: 120,
    },
    {
      field: "price",
      headerName: "Price",
      width: 120,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row.id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline className="productListDelete" onClick={handleDelete.bind(this, params.row.id)} />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <Link to="/newproduct">
        <button className="productAddButton">Create</button>
      </Link>
      <DataGrid
        rows={data.products.products}
        disableSelectionOnClick
        columns={columns}
        rowsPerPage={8}
        // pageSize={8}
        checkboxSelection
      />
    </div>
  );
}
