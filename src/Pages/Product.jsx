import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import Breadcrumb from "../Components/Breadcrumbs/Breadcrumb";
import DescriptionBox from "../Components/DescriptionBox/DescriptionBox";
import SimilarProducts from "../Components/SimilarProducts/SimilarProducts";

function Product() {
    const { allProducts, similarProducts, dataArrivals } = useContext(ShopContext);
    const { productId } = useParams();
    const product = allProducts.find((e) => e.id === Number(productId));

    if (!product) {
        const similarProduct = similarProducts.find((e) => e.id === Number(productId));
        if (similarProduct) return (
            <div>
                <Breadcrumb product={similarProduct} />
                <ProductDisplay product={similarProduct} />
                <DescriptionBox />
                <SimilarProducts />
            </div>
        );
    }

    if (!product) {
        const newArrivals = dataArrivals.find((e) => e.id === Number(productId));
        if (newArrivals) return (
            <div>
                <Breadcrumb product={newArrivals} />
                <ProductDisplay product={newArrivals} />
                <DescriptionBox />
                <SimilarProducts />
            </div>
        );
    }

    return (
        <div>
            <Breadcrumb product={product} />
            <ProductDisplay product={product} />
            <DescriptionBox />
            <SimilarProducts />
        </div>
    );
}

export default Product;
