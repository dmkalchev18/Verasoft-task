import { ButtonProps } from '../types'

const Button = ( {functionality} : ButtonProps ) => {
    return (
        <button className='header-container-button' 
        onClick={() => {functionality()}}>New Order</button>
    )
}

export default Button