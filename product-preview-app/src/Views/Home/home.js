import Products from "./../../data"
import "./home.css"
import Productcard from "../../components/productCard"

function Home() {
    return (
        
        <div className="product-container">
         {
          Products.map((productObject , i)=>{
              const {
                id,
                name,
                description,
                price,
                image,
               category,
              rating
              }= productObject
  
          
              return (
                <Productcard
                key={i}
                id={id}
                name={name}
                description={description}
                price={price}
                image={image}
               category={category}
              rating ={rating}
                 />
             )
         })
        }
        </div>
         
    )
  }
  
  export default Home;
  

