import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPizza } from "../../actions/pizzaAction";
import Loader from "./../Loader";
import Error from "./../Error";
import Success from "./../Success";

const AddNewPizza = () => {
  const [name, setName] = useState("");


  const [smallPrice, setSmallPrice] = useState();
  const [largePrice, setLargePrice] = useState();
  const [mediumPrice, setMediumPrice] = useState("");

  const [sauce1, setsauce1] = useState("");
  const [sauce2, setsauce2] = useState("");
  const [sauce3, setsauce3] = useState("");
  const [sauce4, setsauce4] = useState("");
  const [sauce5, setsauce5] = useState("");

  const[cheese1,setcheese1]=useState("")
  const[cheese2,setcheese2]=useState("")
  const[cheese3,setcheese3]=useState("")
  const[cheese4,setcheese4]=useState("")

const[veg1,setveg1]=useState("")
const[veg2,setveg2]=useState("")
const[veg3,setveg3]=useState("")
const[veg4,setveg4]=useState("")

  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const addPizzaState = useSelector((state) => state.addPizzaReducer);
  const { loading, error, success } = addPizzaState;

  const dispatch = useDispatch();

  const submitForm = (e) => {
    e.preventDefault();
    const pizza = {
      name,
      image,
      description,
      category,
      prices: {
        small: smallPrice,
        medium: mediumPrice,
        large: largePrice,
      },
      sauces:{
        sauce1:sauce1,
        sauce2:sauce2,
        sauce3:sauce3,
        sauce4:sauce4,
        sauce5:sauce5
      },
      cheese:{
        cheese1:cheese1,
        cheese2:cheese2,
        cheese3:cheese3,
        cheese4:cheese4
      },
      veggies:{
        veg1:veg1,
        veg2:veg2,
        veg3:veg3,
        veg4:veg4
      }

    };
    dispatch(addPizza(pizza));
    window.location.reload();
  };

  return (
    <div>
      {loading && <Loader />}
      {error && <Error error="add new pizza error" />}
      {success && <Success success="Pizza Added Successfully" />}
      <h1  style={{fontFamily:'cursive',fontWeight:"bold",marginTop:"120px",marginLeft:"540px",fontSize:"2rem"}}>Add New Pizza </h1>
      <form onSubmit={submitForm} className="bg-gray-200 p-4 lg:ml-[40px]" style={{marginTop:"80px"}}>
        <div className="mb-3">
          <label className="block text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name"
          />
        </div>


        <div className="mb-3 grid grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-bold mb-2" htmlFor="smallPrice">
              Small Price
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="smallPrice"
              type="text"
              value={smallPrice}
              onChange={(e) => setSmallPrice(e.target.value)}
              placeholder="Enter Small Price"
            />
          </div>
          <div>
            <label className="block text-sm font-bold mb-2" htmlFor="mediumPrice">
              Medium Price
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="mediumPrice"
              type="text"
              value={mediumPrice}
              onChange={(e) => setMediumPrice(e.target.value)}
              placeholder="Enter Medium Price"
            />
          </div>
          <div>
            <label className="block text-sm font-bold mb-2" htmlFor="largePrice">
              Large Price
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="largePrice"
              type="text"
              value={largePrice}
              onChange={(e) => setLargePrice(e.target.value)}
              placeholder="Enter Large Price"
            />
          </div>
        </div>


{/* Sauces section */}
        <div className="mb-3 grid grid-cols-5 gap-4">
          <div>
            <label className="block text-sm font-bold mb-2" htmlFor="sauce1">
              Sauce1
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="sauce1"
              type="text"
              value={sauce1}
              onChange={(e) => setsauce1(e.target.value)}
              placeholder="Enter sauce1"
            />
          </div>
          <div>
            <label className="block text-sm font-bold mb-2" htmlFor="sauce2">
             Sauce2
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="sauce2"
              type="text"
              value={sauce2}
              onChange={(e) => setsauce2(e.target.value)}
              placeholder="Enter sauce2"
            />
          </div>


          <div>
            <label className="block text-sm font-bold mb-2" htmlFor="sauce3">
             Sauce3
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="sauce3"
              type="text"
              value={sauce3}
              onChange={(e) => setsauce3(e.target.value)}
              placeholder="Enter sauce3"
            />
          </div>

  <div>
            <label className="block text-sm font-bold mb-2" htmlFor="sauce4">
             Sauce4
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="sauce4"
              type="text"
              value={sauce4}
              onChange={(e) => setsauce4(e.target.value)}
              placeholder="Enter sauce4"
            />
          </div>


          <div>
            <label className="block text-sm font-bold mb-2" htmlFor="sauce5">
             Sauce5
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="sauce5"
              type="text"
              value={sauce5}
              onChange={(e) => setsauce5(e.target.value)}
              placeholder="Enter sauce5"
            />
          </div>

        </div>




{/* Cheeses section */}

<div className="mb-3 grid grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-bold mb-2" htmlFor="cheese1">
             cheese1
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="cheese1"
              type="text"
              value={cheese1}
              onChange={(e) => setcheese1(e.target.value)}
              placeholder="Enter cheese1"
            />
          </div>
          <div>
            <label className="block text-sm font-bold mb-2" htmlFor="cheese2">
           cheese2
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="cheese2"
              type="text"
              value={cheese2}
              onChange={(e) => setcheese2(e.target.value)}
              placeholder="Enter cheese2"
            />
          </div>


          <div>
            <label className="block text-sm font-bold mb-2" htmlFor="cheese3">
             cheese3
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="cheese3"
              type="text"
              value={cheese3}
              onChange={(e) => setcheese3(e.target.value)}
              placeholder="Enter cheese3"
            />
          </div>

  <div>
            <label className="block text-sm font-bold mb-2" htmlFor="cheese4">
             cheese4
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="cheese4"
              type="text"
              value={cheese4}
              onChange={(e) => setcheese4(e.target.value)}
              placeholder="Enter cheese4"
            />
          </div>



        </div>

{/* Veggies Section */}


<div className="mb-3 grid grid-cols-5 gap-4">
          <div>
            <label className="block text-sm font-bold mb-2" htmlFor="Veggies1">
          Veggies1
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="veggies1"
              type="text"
              value={veg1}
              onChange={(e) => setveg1(e.target.value)}
              placeholder="Enter Veggies1"
            />
          </div>
          <div>
            <label className="block text-sm font-bold mb-2" htmlFor="Veggies2">
          Veggies2
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="veggies2"
              type="text"
              value={veg2}
              onChange={(e) => setveg2(e.target.value)}
              placeholder="Enter Veggies2"
            />
          </div>


          <div>
            <label className="block text-sm font-bold mb-2" htmlFor="Veggies3">
           Veggies3
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="veggies3"
              type="text"
              value={veg3}
              onChange={(e) => setveg3(e.target.value)}
              placeholder="Enter Veggies3"
            />
          </div>

  <div>
            <label className="block text-sm font-bold mb-2" htmlFor="Veggies4">
           Veggies4
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="veggies4"
              type="text"
              value={veg4}
              onChange={(e) => setveg4(e.target.value)}
              placeholder="Enter Veggies4"
            />
          </div>



        </div>



        <div className="mb-3">
          <label className="block text-sm font-bold mb-2" htmlFor="image">
            Image
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="image"
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="Add Image URL"
          />
        </div>
        <div className="mb-3">
          <label className="block text-sm font-bold mb-2" htmlFor="description">
            Description
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter Description"
          />
        </div>
        <div className="mb-3">
          <label className="block text-sm font-bold mb-2" htmlFor="category">
            Category
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="category"
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Enter Category"
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Add New
        </button>
      </form>
    </div>
  );
};

export default AddNewPizza;

