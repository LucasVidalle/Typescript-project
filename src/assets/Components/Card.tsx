function precioConDescuento(price: number, discountPercentage: number) {
    const cuentaDescuento = price - (price * discountPercentage)
    return cuentaDescuento
}

interface CardProps { id: number; title: string; price: number; discountPercentage: number; images: string[]; }

function Card(props: CardProps) {
    return (
        <div key={props.id} className="structure-card">
            <p className="title-card">{props.title}</p>
            <p className="price-card">{props.price}</p>
            <p className="price-with-discount">{precioConDescuento(props.price, props.discountPercentage)}</p>
        </div>
    )
}
export { Card }