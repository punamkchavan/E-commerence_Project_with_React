
import { Figure, Button} from "react-bootstrap"
import '../css/style.css'

export default function Product(){
    return(
        
    <div>
    <Figure className="container1">
      <Figure.Image
        width={290}
        height={150}
        alt="product"
        src="image.png"
      />
      <div className="container2">
      <h3>Product Name</h3>    
       <p>Price Rs.</p>
      <Button>Add to Cart</Button>
      </div>
    </Figure>
    </div>
        
    )
}