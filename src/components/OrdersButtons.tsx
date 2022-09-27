import OrderButton from './OrderButton'
import { OrderButtonsProps } from '../types'

const OrdersButtons = ( {orderButtons, toggleOrderButton, getOrderData} : OrderButtonsProps ) => {
    return (
        <div className='orders-buttons-container'>
            <OrderButton orderButton={orderButtons.at(0)} toggleOrderButton={toggleOrderButton} getOrderData={getOrderData}/>
            <OrderButton orderButton={orderButtons.at(1)} toggleOrderButton={toggleOrderButton} getOrderData={getOrderData}/>
            <OrderButton orderButton={orderButtons.at(2)} toggleOrderButton={toggleOrderButton} getOrderData={getOrderData}/>
            <OrderButton orderButton={orderButtons.at(3)} toggleOrderButton={toggleOrderButton} getOrderData={getOrderData}/>
            <OrderButton orderButton={orderButtons.at(4)} toggleOrderButton={toggleOrderButton} getOrderData={getOrderData}/>
        </div>
    )
}

export default OrdersButtons