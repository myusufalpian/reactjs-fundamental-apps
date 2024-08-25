import CardProduct from "../components/fragments/CardProduct";

const ProductsPage = () => {
    const handlerAddToCart = () => {
        console.log("Add to Cart");
    }
    return (
        <div className="flex justify-center">
            <CardProduct> 
                <CardProduct.Header imgSource="https://swift-thumbor.sirclocdn.com/unsafe/960x1120/filters:format(webp):quality(100)/https://bo.asics.co.id/media/catalog/product/cache/5851c493ecee7427253955673b4ab287/1/2/1203a537.020__0003s_0001_2.jpg"/>
                <CardProduct.Body text="Sepatu GEL-KAYANO™ 14 kembali hadir dengan Menginterpretasikan ulang kemampuan performa sepatu dengan bahan dan komponen yang diperbarui, versi ini menjadi iterasi pertama dalam garis keturunan sneaker ini yang dirancang oleh orang lain selain Toshikazu Kayano." tittle="Asics GEL-KAYANO 14"/>
                <CardProduct.Footer variant="bg-green-700" children={`Add to Cart`} onClickHandler={() => handlerAddToCart}/>
            </CardProduct>
        </div>
    )
}

export default ProductsPage;