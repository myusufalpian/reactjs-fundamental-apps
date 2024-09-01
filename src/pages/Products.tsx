import CardProduct from "../components/fragments/CardProduct";

const ProductList = [
    {
        id: 1,
        tittle: "Asics Unisex GEL-KAYANO 14 Standard",
        price: 2199000,
        imageSource: "https://swift-thumbor.sirclocdn.com/unsafe/960x1120/filters:format(webp):quality(100)/https://bo.asics.co.id/media/catalog/product/cache/5851c493ecee7427253955673b4ab287/1/2/1203a537.020__0003s_0001_2.jpg",
        description: "Sepatu GEL-KAYANO™ 14 kembali hadir dengan Menginterpretasikan ulang kemampuan performa sepatu dengan bahan dan komponen yang diperbarui, versi ini menjadi iterasi pertama dalam garis keturunan sneaker ini yang dirancang oleh orang lain selain Toshikazu Kayano."
    },
    {
        id: 2,
        tittle: "ASICS Unisex Gel-Nyc™ Utility Standard",
        price: 2099000,
        imageSource: "https://swift-thumbor.sirclocdn.com/unsafe/960x1120/filters:format(webp):quality(100)/https://bo.asics.co.id/media/catalog/product/cache/5851c493ecee7427253955673b4ab287/1/2/1203a383.022__0006s_0000_1.jpg",
        description: "Sneaker GEL-NYC™ yang bersumber dari inspirasi gaya lari warisan dan modern. Konstruksi bagian atasnya mengacu pada sepatu GEL-NIMBUS™ 3 dari awal tahun 2000-an dan mencampurnya dengan berbagai hiasan dari desain GEL-MC PLUS™ V. Alat bantu tersebut kontras dengan pengaruh retro dibagian atas dengan menggunakan sistem alat bantu sepatu GEL-CUMULUS™ 16."
    }, 
    {
        id: 3,
        tittle: "ASICS Women Gel-Nimbus 26 Standard",
        price: 2499000,
        imageSource: "https://swift-thumbor.sirclocdn.com/unsafe/960x1120/filters:format(webp):quality(100)/https://bo.asics.co.id/media/catalog/product/cache/5851c493ecee7427253955673b4ab287/1/0/1012b601.102__0007s_0003_4.jpg",
        description: "Rasakan sensasi mendarat di atas awan dengan sepatu GEL-NIMBUS™ 26 yang memiliki bantalan lembut. Desain terbaru ini diciptakan untuk memberikan pengalaman berlari yang lebih lembut dan mulus. Bagian atas dari rajutan lembut dengan teknik khusus membungkus kaki kamu dengan nyaman sekaligus memberikan ventilasi yang optimal. Selain itu, lidah dan kerah rajutan memberikan rasa lembut dan mendukung."
    }
]; 


const ProductsPage = () => {
    const handlerAddToCart = () => {
        console.log("Add to Cart");
    }
    return (
        <div className="flex justify-center">
            {ProductList.map((product) => (
                <CardProduct key={product.id}> 
                    <CardProduct.Header imgSource={product.imageSource}/>
                    <CardProduct.Body text={product.description} tittle={product.tittle}/>
                    <CardProduct.Footer price = {product.price} variant="bg-green-700" children={`Add to Cart`} onClickHandler={() => handlerAddToCart}/>
                </CardProduct>
            ))}
        </div>
    )
}

export default ProductsPage;