import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./components/Home";
import Product from "./components/Product";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import React from 'react'
import "./App.css"; // Import the CSS file


const App = () => {
  const products = [
    {
      id: 1,
      image: "../../../../iPhone12.jpg",
      name: "iPhone 12",
      price: 79900,
      description:
        "Apple's flagship iPhone with Super Retina XDR display, A14 Bionic chip, and dual-camera system for stunning photos and videos.",
    },
    {
      id: 2,
      image: "/images/samsungGalaxyS21.jpg",
      name: "Samsung Galaxy S21",
      price: 69999,
      description:
        "Samsung's powerful Galaxy S21 with Dynamic AMOLED 2X display, Exynos 2100 processor, and professional-grade camera system.",
    },
    {
      id: 3,
      image: "/images/googlePixel6.jpg",
      name: "Google Pixel 6",
      price: 69900,
      description:
        "Google Pixel 6 featuring Google's innovative Tensor chip, a superior camera system with advanced AI capabilities, and seamless integration with Google services.",
    },
    {
      id: 4,
      image: "/images/onePlus9Pro.jpg",
      name: "OnePlus 9 Pro",
      price: 64999,
      description:
        "OnePlus 9 Pro with Hasselblad camera system, Fluid AMOLED display, and powerful Snapdragon 888 processor for exceptional performance.",
    },
    {
      id: 5,
      image: "/images/xiaomiMi11.jpg",
      name: "Xiaomi Mi 11",
      price: 59900,
      description:
        "Xiaomi Mi 11 boasting a 108MP camera, Snapdragon 888 chipset, and 120Hz AMOLED display for a premium smartphone experience.",
    },
    {
      id: 6,
      image: "/images/sonyXperia1.jpg",
      name: "Sony Xperia 1 III",
      price: 129900,
      description:
        "Sony Xperia 1 III featuring a 4K HDR OLED display, triple-camera system with ZEISS optics, and Snapdragon 888 processor for top-tier performance.",
    },
    {
      id: 7,
      image: "/images/oppoFindX3Pro.jpg",
      name: "OPPO Find X3 Pro",
      price: 74999,
      description:
        "OPPO Find X3 Pro with a 120Hz AMOLED display, powerful Snapdragon 888 processor, and versatile quad-camera setup for stunning photography.",
    },
    {
      id: 8,
      image: "/images/lgWing.jpg",
      name: "LG Wing",
      price: 79900,
      description:
        "LG Wing featuring a unique swivel design, 5G connectivity, and innovative camera capabilities for a distinctive smartphone experience.",
    },
    {
      id: 9,
      image: "/images/asusROGPhone5.jpg",
      name: "ASUS ROG Phone 5",
      price: 69999,
      description:
        "ASUS ROG Phone 5 designed for gaming enthusiasts with a 144Hz AMOLED display, Snapdragon 888 processor, and advanced gaming-centric features.",
    },
    {
      id: 10,
      image: "/images/huaweiP40Pro.jpg",
      name: "Huawei P40 Pro",
      price: 69900,
      description:
        "Huawei P40 Pro featuring a Leica quad-camera system, Kirin 990 5G chipset, and stunning OLED display for exceptional photography and performance.",
    },
    {
      id: 12,
      image: "/images/lenovoLegionPhoneDuel2.jpg",
      name: "Lenovo Legion Phone Duel 2",
      price: 79900,
      description:
        "Lenovo Legion Phone Duel 2 designed for gaming, featuring Snapdragon 888, dual cooling fans, and shoulder triggers for an immersive gaming experience.",
    },
    {
      id: 13,
      image: "/images/nokiaX20.jpg",
      name: "Nokia X20",
      price: 39900,
      description:
        "Nokia X20 offering a clean Android experience, Zeiss optics, and robust build quality for durability and reliability.",
    },
    {
      id: 14,
      image: "./images/tecnoCamon18P.jpg",
      name: "Tecno Camon 18P",
      price: 25999,
      description:
        "Tecno Camon 18P equipped with AI-powered cameras, a large display, and long-lasting battery life, ideal for photography enthusiasts.",
    },
    {
      id: 15,
      image: "/images/htcU12Plus.jpg",
      name: "HTC U12 Plus",
      price: 59900,
      description:
        "HTC U12 Plus featuring Edge Sense technology, dual cameras, and premium design for a unique user experience.",
    },
    {
      id: 16,
      image: "/images/motorolaEdge20.jpg",
      name: "Motorola Edge 20",
      price: 49999,
      description:
        "Motorola Edge 20 with a 144Hz AMOLED display, triple-camera system, and stock Android experience for a smooth user interface.",
    },
    {
      id: 17,
      image: "/images/panasonicElugaRay810.jpg",
      name: "Panasonic Eluga Ray 810",
      price: 11990,
      description:
        "Panasonic Eluga Ray 810 featuring a large battery, AI-powered cameras, and a sleek design for everyday usability.",
    },
    {
      id: 18,
      image: "/images/alcatel1S2021.jpg",
      name: "Alcatel 1S 2021",
      price: 10999,
      description:
        "Alcatel 1S 2021 offering a budget-friendly option with decent performance, a large display, and multiple camera lenses.",
    },
    {
      id: 19,
      image: "/images/realmeC25Y.jpg",
      name: "realme C25Y",
      price: 9999,
      description:
        "realme C25Y with a large battery, AI-enabled camera setup, and a sleek design, catering to entry-level smartphone users.",
    },
    {
      id: 20,
      image: "/images/infinixNote11.jpg",
      name: "Infinix Note 11",
      price: 12999,
      description:
        "Infinix Note 11 featuring a large display, powerful battery life, and AI-backed camera features for multitasking and photography.",
    },
    {
      id: 21,
      image: "/images/lgVelvet.jpg",
      name: "LG Velvet",
      price: 49990,
      description:
        "LG Velvet showcasing a stylish design, dual-screen accessory support, and versatile camera capabilities.",
    },
  ];


  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    const updatedCart = [...cart, { ...product, quantity: 1 }];
    setCart(updatedCart);
  };

  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">
        <div className="bg-blue-500">
          <h1 className="text-3xl text-white font-bold p-4">
           Well come To Our smart phone purchase Product Website
          </h1>
        </div>
        <Navbar />
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home products={products} />} />
            <Route
              path="/product/:id"
              element={<Product products={products} addToCart={addToCart} />}
            />
            <Route
              path="/cart"
              element={<Cart cart={cart} setCart={setCart} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
