import React from "react";
import Header from "../components/Header";
import Body from "../components/Body";
import Footer from "../components/Footer";
import Container from "../components/Container";

function BaseLayout({ children }) {
  return (
    <main>
      {children}
      <div>
        <button className="fixed-element">Send messa...</button>
      </div>
    </main>
  );
}

export default Object.assign(BaseLayout, {
  Header,
  Body,
  Footer,
  Container,
});
