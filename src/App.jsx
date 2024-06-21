import {PRODUCT} from './product'
import Product  from './Product.jsx'


function App(){
return(
  <>
  <Product {...PRODUCT[0]} />
  <Product {...PRODUCT[1]} />
  <Product {...PRODUCT[2]} />
  <Product {...PRODUCT[3]} />
  </>
)
}

export default App;