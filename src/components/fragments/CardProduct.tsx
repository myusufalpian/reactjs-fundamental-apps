import { ReactNode } from "react"
import Button from "../elements/Button"

interface Props {
    children?: ReactNode
    className?: string
    onClickHandler?: () => void
    variant?: string
    text?: string
    tittle?: string
    imgSource?: string
    btnText?: string
    price?: number
}

const CardProduct = (props: Props) => {
    const { children } = props;
    return (
        <div className="w-full max-w-sm m-8 bg-gray-800 border border-gray-700 rounded-lg shadow">
            {children}
        </div>
    )

}

const Header = (props: Props) => {
    const { imgSource } = props;
    return (
        <a href="">
            <img src={imgSource} alt="Dad Shoes" className="p-5 rounded-t-lg" />
        </a>
    )
}

const Body = ( props: Props) : JSX.Element => {
    const { tittle, text } = props;
    return (
        <div>
            <h5 className="pb-5 mb-2 text-xl font-semibold tracking-tight text-center text-white">{tittle}</h5>
            <p className="mx-5 mb-5 font-normal text-white">{text}</p>
        </div>
    )
}

const Footer = (props: Props) => {
    const { btnText, variant = '', onClickHandler, price } = props;
    return (
        <div className="flex items-center justify-between"> 
            <span className="py-5 pl-5 text-xl font-bold text-white">{`Rp. ${price?.toLocaleString('id-ID')},00`}</span>
                <Button variant = {variant} text='text-white' children={btnText} classname = 'my-5 mr-5' onClick={() => onClickHandler} />
        </div>
    )
}

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;
export default CardProduct;