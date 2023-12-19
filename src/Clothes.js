import {Link} from 'react-router-dom';
function Clothes({items}) {
    return(
        <div className="products">
            {items.map((element => {
                const {id, name, price, image} =element;
                return <div key={id} className="product-card">
                    <Link to={`/about/${element.title}`}>
                    <img src={image} alt="clothes" width="330px" height="480px" />
                    </Link>
                    <div className="product-info">
                    <h3>{name}</h3>
                    <h4>{price}</h4>
                </div>
                </div>
            }))}
        </div>
        
    )
}
export default Clothes;