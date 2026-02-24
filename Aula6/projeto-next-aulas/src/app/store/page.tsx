import ProductList from "@/components/store/ProductList";

const getProducts = async () => {
    const res = await fetch("https://699df71c83e60a406a47e5b0.mockapi.io/products");
    return res.json();
}

const StorePage = async () => {
    const products = await getProducts();
    return (
        <div className="container mx-auto p-4">
            <ProductList products={products} />
        </div>
    );
};

export default StorePage;