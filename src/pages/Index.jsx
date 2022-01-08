import React from "react";
import Product from "../components/Product";
import Reviews from "../components/Reviews";
import Services from "../components/Services";
import Sponsors from "../components/Sponsors";
import Subscription from "../components/Subscription";
import Works from "../components/Works";
import BaseLayout from "../layouts/BaseLayout";
import ProductContainer from "../layouts/ProductContainer";

import { products, categories } from "./data";

export default function Index() {
  return (
    <BaseLayout>
      <BaseLayout.Header />

      <BaseLayout.Body>
        <BaseLayout.Container>
          <ProductContainer title="Popular Products">
            {products.map((product, index) => (
              <Product {...product} key={index} />
            ))}
          </ProductContainer>

          <ProductContainer title="Popular Categories">
            {categories.map((product, index) => (
              <Product {...product} key={index} />
            ))}
          </ProductContainer>

          <Sponsors />
        </BaseLayout.Container>

        <Reviews />

        <BaseLayout.Container>
          <Services />
        </BaseLayout.Container>

        <Works />

        <Subscription />
      </BaseLayout.Body>

      <BaseLayout.Footer />
    </BaseLayout>
  );
}
