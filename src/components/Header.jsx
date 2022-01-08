import React from "react";

import card_img from "../assets/img/cards_address.png";
import search_icon from "../assets/img/search-icon.svg";
import shopping_cart_icon from "../assets/img/shopping-cart-icon.svg";
import printivo_logo from "../assets/img/printivo-logo.svg";
import whatsapp_icon from "../assets/img/whatsapp-icon.svg";
import nigeria from "../assets/img/nigera.svg";

export default function Header() {
  return (
    <>
      <div className="flex justify-around space-x-7 py-3  place-items-center top-div">
        <ul className="flex space-x-10">
          <li>
            <a href="#">Cooperate Pricing</a>
          </li>
          <li>
            <a href="#">Discover Stores</a>
          </li>
          <li>
            <a href="#">Track Orders</a>
          </li>
        </ul>
        <div className="flex space-x-20 place-items-center">
          <span>
            Need Help? Call:{" "}
            <a href="tel:08099561000" className="text-[#1da1f2]">
              +2348099561000
            </a>
          </span>
          <a href="https://wa.me/+2348099561000">
            <img src={whatsapp_icon} alt="whatsapp icon" />
          </a>
          <span className="flex border-[#708095] rounded-full px-4 py-2 border place-items-center">
            <img src={nigeria} alt="whatsapp icon" className="pr-2" />
            Nigeria
          </span>
        </div>
      </div>

      <header>
        <nav className="py-7 px-[7rem] flex justify-between place-items-center">
          <h1 className="w-36">
            <a href="#">
              <img src={printivo_logo} alt="printivo logo" />
            </a>
          </h1>
          <ul className="flex space-x-5 place-items-center">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">All Products</a>
            </li>
            <li>
              <a href="#">Become a Reseller</a>
            </li>
            <li>
              <a href="#">Cost Calculator</a>
            </li>
            <li className="pl-10">
              <a href="#" className="text-[#d77f81]">
                Sign in
              </a>
            </li>
            <li>
              <a href="#">Create Account</a>
            </li>
            <li>
              <a href="#">
                <img src={shopping_cart_icon} alt="shopping cart" />
              </a>
            </li>
          </ul>
        </nav>
        <section className="flex flex-row justify-between w-full mt-9">
          <div className="w-2/3  ml-[7rem]">
            <h2 className="font-2xl">Quality Prints</h2>
            <h3>Shipped to your doorstep</h3>
            <p>What would you like to print today?</p>

            <div className="bg-white input">
              <input
                type="text"
                placeholder="Search for Business cards, T-shirts, Mugs, etc"
                className="placeholder:font-normal placeholder:tracking-wider placeholder:text-[rgb(120, 142, 172)]"
              />
              <button className="icon">
                <img src={search_icon} alt="" />
              </button>
            </div>
          </div>
          <span className="w-1/3">
            <img src={card_img} alt="printivo address" />
          </span>
        </section>
      </header>
    </>
  );
}
