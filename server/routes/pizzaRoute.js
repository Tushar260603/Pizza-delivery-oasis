const express = require("express");
const router = express.Router();
const pizzaModel = require("../models/pizzaModel");
const nodemailer = require('nodemailer');
//GET ALL PIZZA || @GET REQUEST
router.get("/getAllPizzas", async (req, res) => {
  try {
    const pizzas = await pizzaModel.find({});
    res.send(pizzas);
  } catch (error) {
    res.json({ message: error });
  }
});
router.post("/addpizza", async (req, res) => {
  const pizza = req.body.pizza;
  try {
    const newPizza = new pizzaModel({
      name: pizza.name,
      image: pizza.image,
      varients: ["small", "medium", "larg"],
      description: pizza.description,
      category: pizza.category,
      prices: [pizza.prices],
      sauces:[pizza.sauces],
      cheese:[pizza.cheese],
      veggies:[pizza.veggies]
    });
    await newPizza.save();
    res.status(201).send("New Pizza Added");
  } catch (error) {
    res.json({ message: error });
  }
});

router.post("/getpizzabyid", async (req, res) => {
  const pizzaId = req.body.pizzaId;
  console.log(pizzaId)
  try {
    const pizza = await pizzaModel.findOne({ _id: pizzaId });
    res.send(pizza);
  } catch (error) {
    res.json({ message: error });
  }
});

router.post("/updatepizza", async (req, res) => {
  const updatedPizza = req.body.updatedPizza;
  try {
    const pizza = await pizzaModel.findOne({ _id: updatedPizza._id });
    (pizza.name = updatedPizza.name),
      (pizza.description = updatedPizza.description),
      (pizza.image = updatedPizza.image),
      (pizza.category = updatedPizza.category),
      (pizza.prices = [updatedPizza.prices]);
    await pizza.save();
    res.status(200).send("Pizza Update Success");
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

router.post("/deletepizza", async (req, res) => {
  const pizzaId = req.body.pizzaId;
  try {
    await pizzaModel.findOneAndDelete({ _id: pizzaId });
    res.status(200).send("Pizza Deleted");
  } catch (error) {
    res.status(404).json({ message: error });
  }
});



router.post('/send-email', async (req, res) => {
  const { email } = req.body;
console.log(email)
  // Your email sending logic here
  try {
    let testac=await nodemailer.createTestAccount();
    const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      auth: {
          user: 'oliver.dickens64@ethereal.email',
          pass: 'z34CHCsBPUpeXcY8XF'
      }
  });
  

    const mailOptions = {
      from: 'codertushar76@gmail.com',
      to: email,
      subject: 'Regarding ',
      text: 'Total No of Pizzas is less than 5',
    };

    await transporter.sendMail(mailOptions);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Error sending email');
  }
});












module.exports = router;