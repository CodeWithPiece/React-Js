import React from "react";
import "./Pins.css";
import Pin from "./Pin";

const Pins = () => {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1707438587276-2828a4576c52?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "card_small",
    },
    {
      url: "https://images.unsplash.com/photo-1707070530152-1fc8f45ec3c0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "card_large",
    },
    {
      url: "https://images.unsplash.com/photo-1707023488396-d8d13c84746a?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "card_medium",
    },
    {
      url: "https://images.unsplash.com/photo-1707033081487-d5f5e3e5651c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "card_small",
    },
    {
      url: "https://images.unsplash.com/photo-1703252933215-6b089d36d5bc?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "card_large",
    },
    {
      url: "https://images.unsplash.com/photo-1682686580922-2e594f8bdaa7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "card_medium",
    },
    {
      url: "https://images.unsplash.com/photo-1707593655398-a9eb0f94ffe9?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "card_large",
    },
    {
      url: "https://images.unsplash.com/photo-1707593655398-a9eb0f94ffe9?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "card_large",
    },
    {
      url: "https://images.unsplash.com/photo-1705669230343-f88115998d65?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "card_small",
    },
    {
      url: "https://images.unsplash.com/photo-1707300785988-98f2cae6a961?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "card_large",
    },
    {
      url: "https://images.unsplash.com/photo-1707593655398-a9eb0f94ffe9?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "card_large",
    },
    {
      url: "https://images.unsplash.com/photo-1705669230343-f88115998d65?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "card_small",
    },
    {
      url: "https://images.unsplash.com/photo-1707300785988-98f2cae6a961?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "card_large",
    },
    {
      url: "https://images.unsplash.com/photo-1707301454066-aba9cf1fa47a?q=80&w=1942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "card_medium",
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1697729897664-8c14e4bbf139?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "card_small",
    },
    {
      url: "https://images.unsplash.com/photo-1707593655398-a9eb0f94ffe9?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "card_large",
    },
    {
      url: "https://images.unsplash.com/photo-1705669230343-f88115998d65?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "card_small",
    },
    {
      url: "https://images.unsplash.com/photo-1707300785988-98f2cae6a961?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "card_large",
    },
    {
      url: "https://images.unsplash.com/photo-1707301454066-aba9cf1fa47a?q=80&w=1942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "card_medium",
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1697729897664-8c14e4bbf139?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "card_small",
    },
    {
      url: "https://images.unsplash.com/photo-1707301454066-aba9cf1fa47a?q=80&w=1942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "card_medium",
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1697729897664-8c14e4bbf139?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "card_small",
    },
    {
      url: "https://images.unsplash.com/photo-1705669230343-f88115998d65?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "card_small",
    },
    {
      url: "https://images.unsplash.com/photo-1707300785988-98f2cae6a961?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "card_large",
    },
    {
      url: "https://images.unsplash.com/photo-1707593655398-a9eb0f94ffe9?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "card_large",
    },
    {
      url: "https://images.unsplash.com/photo-1705669230343-f88115998d65?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "card_small",
    },
    {
      url: "https://images.unsplash.com/photo-1707300785988-98f2cae6a961?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "card_large",
    },
    {
      url: "https://images.unsplash.com/photo-1707301454066-aba9cf1fa47a?q=80&w=1942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "card_medium",
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1697729897664-8c14e4bbf139?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "card_small",
    },
    {
      url: "https://images.unsplash.com/photo-1707301454066-aba9cf1fa47a?q=80&w=1942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "card_medium",
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1697729897664-8c14e4bbf139?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "card_small",
    },
    {
      url: "https://images.unsplash.com/photo-1707593655398-a9eb0f94ffe9?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "card_large",
    },
    {
      url: "https://images.unsplash.com/photo-1705669230343-f88115998d65?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "card_small",
    },
    {
      url: "https://images.unsplash.com/photo-1707300785988-98f2cae6a961?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "card_large",
    },
    {
      url: "https://images.unsplash.com/photo-1707301454066-aba9cf1fa47a?q=80&w=1942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "card_medium",
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1697729897664-8c14e4bbf139?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "card_small",
    },
  ];

  return (
    <div id="div-content">
      {images.map((image) => {
        return <Pin image={image} />;
      })}
    </div>
  );
};

export default Pins;
