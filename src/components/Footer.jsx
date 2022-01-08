import React from "react";
import Container from "./Container";

export default function Footer() {
  return (
    <footer>
      <div>
        <Container>
          <div className="grid sm:grid-cols-4 grid-cols-1 gap-2">
            <ul>
              <li className="font-bold my-2 text-xl">Printivo</li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Track Order</a>
              </li>
              <li>
                <a href="#">Printivo Blog</a>
              </li>
              <li>
                <a href="#">Career</a>
              </li>
            </ul>

            <ul>
              <li className="font-bold my-2 text-xl">Help and Information</li>
              <li>
                <a href="#">Paper Quality</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms and Conditions</a>
              </li>
              <li>
                <a href="#">Font Licenses</a>
              </li>
              <li>
                <a href="#">Shipping and Delivery</a>
              </li>
            </ul>

            <ul>
              <li className="font-bold my-2 text-xl">Make Money</li>
              <li>
                <a href="#">Refer a friend & earn </a>
              </li>
              <li>
                <a href="#">Become a Reseller</a>
              </li>
              <li>
                <a href="#">Sell your Designs</a>
              </li>
            </ul>

            <ul>
              <li className="font-bold my-2 text-xl">Follow Us</li>
              <li>
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
              </li>
              <li>Accepted Payments</li>
              <li>
                <img src="#" alt="card logo" />
              </li>
              <li>Delivery</li>
              <li>
                <img src="#" alt="logo" />
              </li>
            </ul>
          </div>
        </Container>
      </div>

      <section className="flex place-items-center place-content-center p-7 bg-[#cccac7]">
        <p>
          Copyright &copy; {new Date().getFullYear()} Printivo. All rights
          reserved
        </p>
      </section>
    </footer>
  );
}
