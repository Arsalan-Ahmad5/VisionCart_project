import { Search, Plus, MoreVertical, Package } from "lucide-react";
import { products } from "../../data/landingdata";
import { useState } from "react";
function Products() {
const [isModalOpen, setIsModalOpen] = useState(false);
const [productName, setProductName] = useState("");
const [sku, setSku] = useState("");
const [category, setCategory] = useState("");
const [price, setPrice] = useState("");
const [stock, setStock] = useState("");
const [location, setLocation] = useState("");
const [quantity, setQuantity] = useState("");
const [productList, setProductList] = useState(products);
const [editingProduct, setEditingProduct] = useState(null);
const handleDelete = (id) => {
  setProductList((prevProducts) =>
    prevProducts.filter((product) => product.id !== id)
  );
}; 
const handleEdit = (product) => {
  setEditingProduct(product);

  setProductName(product.name);
  setSku(product.sku);
  setCategory(product.category);
  setPrice(product.price);
  setStock(product.stock);
  setLocation(product.location);

  setIsModalOpen(true);
};
const handleSubmit = (e) => {
  e.preventDefault();

  const productData = {
    id: editingProduct ? editingProduct.id : productList.length + 1,
    name: productName,
    sku: sku,
    category: category,
    price: Number(price),
    stock: Number(stock),
    location: location,
  };

  if (editingProduct) {
    setProductList((prevProducts) =>
      prevProducts.map((product) =>
        product.id === editingProduct.id ? productData : product
      )
    );
  } else {
    setProductList((prevProducts) => [...prevProducts, productData]);
  }

  setIsModalOpen(false);
  setEditingProduct(null);

  setProductName("");
  setSku("");
  setCategory("");
  setPrice("");
  setStock("");
  setLocation("");
};
const getStockStatus=(stock)=>{
  if(stock==0)return "Out of Stock";
  if(stock<10)return "Low Stock";

  return "In Stock";
}
  return (
    <div className="space-y-6">

      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

        <div>
          <h1 className="text-2xl font-semibold text-slate-900">
            Products
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Manage your product catalog and pricing
          </p>
        </div>

        <button className="flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-4 py-2.5 rounded-lg text-sm font-medium w-full sm:w-auto"
        onClick={() => setIsModalOpen(true)}>
          <Plus size={18} />
          Add Product
        </button>

      </div>

      {isModalOpen && (
  <div className="fixed inset-0 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs z-50 p-4 overflow-y-auto">

    <form
      onSubmit={handleSubmit}
      className="w-full max-w-lg bg-white rounded-xl border border-slate-200 p-6 shadow-xl max-h-[90vh] overflow-y-auto my-auto"
    >

      <div className="mb-5">
        <h2 className="text-lg font-semibold text-slate-900">
          {editingProduct ? "Edit Product" : "Add Product"}
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Add a new product to your catalog
        </p>
      </div>

      <div className="space-y-4">

        <label className="block text-sm font-medium text-slate-700">
          Product Name
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className="mt-1.5 w-full px-3 py-2.5 border border-slate-200 rounded-lg outline-none focus:border-teal-500"
          />
        </label>

        <label className="block text-sm font-medium text-slate-700">
          SKU
          <input
            type="text"
            value={sku}
            onChange={(e) => setSku(e.target.value)}
            className="mt-1.5 w-full px-3 py-2.5 border border-slate-200 rounded-lg outline-none focus:border-teal-500"
          />
        </label>

        <label className="block text-sm font-medium text-slate-700">
          Category
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="mt-1.5 w-full px-3 py-2.5 border border-slate-200 rounded-lg outline-none focus:border-teal-500"
          />
        </label>

        <div className="grid grid-cols-2 gap-4">

          <label className="block text-sm font-medium text-slate-700">
            Price
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="mt-1.5 w-full px-3 py-2.5 border border-slate-200 rounded-lg outline-none focus:border-teal-500"
            />
          </label>

          <label className="block text-sm font-medium text-slate-700">
            Stock
            <input
              type="number"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
              className="mt-1.5 w-full px-3 py-2.5 border border-slate-200 rounded-lg outline-none focus:border-teal-500"
            />
          </label>

        </div>

        <label className="block text-sm font-medium text-slate-700">
          Location
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="mt-1.5 w-full px-3 py-2.5 border border-slate-200 rounded-lg outline-none focus:border-teal-500"
          />
        </label>

        {/* <label className="block text-sm font-medium text-slate-700">
         Quantity
          <input
            type="text"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="mt-1.5 w-full px-3 py-2.5 border border-slate-200 rounded-lg outline-none focus:border-teal-500"
          />
        </label> */}

      </div>

      <div className="flex justify-end gap-3 mt-7">

        <button
          type="button"
          onClick={() => setIsModalOpen(false)}
          className="px-4 py-2.5 border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50"
        >
          Cancel
        </button>

        <button
          type="submit"
          className="px-4 py-2.5 bg-teal-600 hover:bg-teal-700 text-white rounded-lg text-sm font-medium"
        >
          Add Product
        </button>

      </div>

    </form>
  </div>
)}

      {/* Product Table Card */}
      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">

        {/* Filters */}
        <div className="p-4 sm:p-5 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">

          {/* Search */}
          <div className="relative w-full sm:w-80">

            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="search"
              placeholder="Search products..."
              className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-lg text-sm text-slate-700 placeholder:text-slate-400 outline-none focus:border-teal-500"
            />

          </div>


          {/* Category Filter */}
          <select className="w-full sm:w-auto px-3 py-2.5 border border-slate-200 rounded-lg text-sm text-slate-600 outline-none focus:border-teal-500">
            <option>All Categories</option>
            <option>Beverages</option>
            <option>Snacks</option>
            <option>Chocolates</option>
            <option>Dairy</option>
            <option>Instant Food</option>
          </select>

        </div>


        {/* Table */}
        <div className="overflow-x-auto">

          <table className="w-full min-w-[640px]">

            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">

                <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase">
                  Product
                </th>

                <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase">
                  Category
                </th>

                <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase">
                  Price
                </th>

                <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase">
                  Stock
                </th>

                <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase">
                  Status
                </th>

                <th className="w-12"></th>

              </tr>
            </thead>


            <tbody>

              {productList.map((product) => (

                <tr
                  key={product.id}
                  className="border-b border-slate-100 last:border-0 hover:bg-slate-50"
                >

                  {/* Product */}
                  <td className="px-5 py-4">

                    <div className="flex items-center gap-3">

                      <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center">
                        <Package
                          size={18}
                          className="text-slate-500"
                        />
                      </div>

                      <div>
                        <p className="text-sm font-medium text-slate-900">
                          {product.name}
                        </p>

                        <p className="text-xs text-slate-500 mt-0.5">
                          {product.id}
                        </p>
                      </div>

                    </div>

                  </td>


                  {/* Category */}
                  <td className="px-5 py-4 text-sm text-slate-600">
                    {product.category}
                  </td>


                  {/* Price */}
                  <td className="px-5 py-4 text-sm font-medium text-slate-900">
                    ₹{product.price}
                  </td>


                  {/* Stock */}
                  <td className="px-5 py-4 text-sm text-slate-600">
                    {product.stock} units
                  </td>


                  {/* Status */}
                  <td className="px-5 py-4">

                    <span
                      className={`inline-flex px-2.5 py-1 rounded-full text-xs font-medium ${
                       getStockStatus(product.stock) === "In Stock"
                          ? "bg-green-50 text-green-700"
                          :  getStockStatus(product.stock) === "Low Stock"
                          ? "bg-amber-50 text-amber-700"
                          : "bg-red-50 text-red-700"
                      }`}
                    >
                      { getStockStatus(product.stock)}
                    </span>

                  </td>


                  {/* Actions */}
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => handleEdit(product)}
                        className="text-sm text-teal-600 hover:text-teal-700"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => handleDelete(product.id)}
                        className="text-sm text-red-600 hover:text-red-700"
                      >
                        Delete
                      </button>
                    </div>
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>


        {/* Footer */}
        <div className="px-4 sm:px-5 py-4 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">

          <p className="text-sm text-slate-500">
            Showing 5 of 42 products
          </p>

          <div className="flex gap-2">

            <button className="px-3 py-2 border border-slate-200 rounded-lg text-sm text-slate-500">
              Previous
            </button>

            <button className="px-3 py-2 bg-slate-900 text-white rounded-lg text-sm">
              1
            </button>

            <button className="px-3 py-2 border border-slate-200 rounded-lg text-sm text-slate-600">
              2
            </button>

            <button className="px-3 py-2 border border-slate-200 rounded-lg text-sm text-slate-600">
              Next
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Products;