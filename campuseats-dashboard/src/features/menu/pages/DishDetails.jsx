import { useParams, Link } from "react-router-dom";

function DishDetailPage(){

    const {id}=useParams();

    return(

        <div style={{textAlign:"center"}}>

            <h1>Dish Details</h1>

            <h2>Dish #{id}</h2>

            <p>
                This page can later display complete
                information about the selected dish.
            </p>

            <Link to="/">⬅ Back to Menu</Link>

        </div>

    );

}

export default DishDetailPage;