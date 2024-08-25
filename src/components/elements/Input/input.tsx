interface Props {
    type: string,
    placeholders: string,
    name: string,
    id: string,
}

const Input = (props: Props) : JSX.Element => {
    const {type = 'text', placeholders, name, id} = props;
    return <input type={type} name={name} id={id} className='w-full px-3 py-2 text-sm border rounded opacity-50 text-neutral-800 placeholder:' placeholder={placeholders}/>
}

export default Input;
