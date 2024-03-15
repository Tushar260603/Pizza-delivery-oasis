import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPizzaById, updatePizza } from "../../actions/pizzaAction";
import Loader from "./../Loader";
import Error from "./../Error";
import {useParams} from "react-router-dom"
const EditPizza = () => {
  const [name, setName] = useState("");
  const [smallPrice, setSmallPrice] = useState("");
  const [largePrice, setLargePrice] = useState("");
  const [mediumPrice, setMediumPrice] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const dispatch = useDispatch();
  const getPizzaByState = useSelector((state) => state.getPizzaByIdReducer);
  const { error, pizza } = getPizzaByState;
  const updatePizzaState = useSelector((state) => state.updatePizzaByIdReducer);
  const { updateloading } = updatePizzaState;
const {pizzaId} =useParams();
  useEffect(() => {
    if (!pizza || pizza._id !== pizzaId) {
      dispatch(getPizzaById(pizzaId));
    } else {
      setName(pizza.name);
      setDescription(pizza.description);
      setCategory(pizza.category);
      setImage(pizza.image);
      setSmallPrice(pizza.prices[0]["small"]);
      setMediumPrice(pizza.prices[0]["medium"]);
      setLargePrice(pizza.prices[0]["large"]);
    }
  }, [pizza, dispatch, pizzaId]);

  const submitForm = (e) => {
    e.preventDefault();
    const updatedPizza = {
      _id: pizzaId,
      name,
      image,
      description,
      category,
      prices: {
        small: smallPrice,
        medium: mediumPrice,
        large: largePrice,
      },
    };
    dispatch(updatePizza(updatedPizza));
  };

  return (
    <div>
      {updateloading && <Loader />}
      {error && <Error error="add new pizza error" />}
      {/* {success && <Success success="Pizza Added Successfully" />} */}
      <h1 className="text-center" style={{marginTop:"100px",fontFamily:"cursive",fontWeight:"bold",fontSize:"2rem" }}>Update Pizza</h1>
      <form onSubmit={submitForm} className="bg-gray-100 p-4" style={{marginTop:"80px"}}>
        <div className="mb-3">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm"
            placeholder="Enter Name"
          />
        </div>
        <div className="grid grid-cols-3 gap-4 mb-3">
          <div>
            <label htmlFor="smallPrice" className="block text-sm font-medium text-gray-700">Small Price</label>
            <input
              type="text"
              id="smallPrice"
              value={smallPrice}
              onChange={(e) => setSmallPrice(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm"
              placeholder="Enter Small Price"
            />
          </div>
          <div>
            <label htmlFor="mediumPrice" className="block text-sm font-medium text-gray-700">Medium Price</label>
            <input
              type="text"
              id="mediumPrice"
              value={mediumPrice}
              onChange={(e) => setMediumPrice(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm"
              placeholder="Enter Medium Price"
            />
          </div>
          <div>
            <label htmlFor="largePrice" className="block text-sm font-medium text-gray-700">Large Price</label>
            <input
              type="text"
              id="largePrice"
              value={largePrice}
              onChange={(e) => setLargePrice(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm"
              placeholder="Enter Large Price"
            />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="block text-sm font-medium text-gray-700">Image</label>
          <input
            type="text"
            id="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm"
            placeholder="Add Image URL"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm"
            placeholder="Enter Description"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
          <input
            type="text"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm"
            placeholder="Enter Category"
          />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Update Pizza
        </button>
      </form>
    </div>
  );
};

export default EditPizza;
