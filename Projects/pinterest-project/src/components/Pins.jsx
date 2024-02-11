import React from "react";
import "./Pins.css";
import Pin from "./Pin";

const Pins = () => {
  const images = [
    {
      url: "https://i.pinimg.com/736x/6e/cb/81/6ecb81c139abe587e54569bbb4402356.jpg",
      type: "card_small",
    },
    {
      url: "https://i.pinimg.com/736x/30/ee/77/30ee7710ab78c521d76c11e12d4af3db.jpg",
      type: "card_large",
    },
    {
      url: "https://images.unsplash.com/photo-1707193748912-b030cd48fba2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "card_medium",
    },
    {
      url: "https://i.pinimg.com/564x/68/d2/3b/68d23bb3afa9d5edcb17f0aad1ed415d.jpg",
      type: "card_small",
    },
    {
      url: "https://i.pinimg.com/564x/7d/96/a2/7d96a2b12430740320c34f2738975e97.jpg",
      type: "card_large",
    },
    {
      url: "https://i.pinimg.com/564x/d2/66/9c/d2669c054ea19316da2bb60f48390aa4.jpg",
      type: "card_medium",
    },
    {
      url: "https://i.pinimg.com/736x/f8/c4/37/f8c4378892472112353dd2fcec5bd62d.jpg",
      type: "card_large",
    },
    {
      url: "https://i.pinimg.com/564x/73/f3/1c/73f31cdd1af952d5c04003d95de40add.jpg",
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
      url: "https://i.pinimg.com/564x/7d/96/a2/7d96a2b12430740320c34f2738975e97.jpg",
      type: "card_large",
    },
    {
      url: "https://images.unsplash.com/photo-1705669230343-f88115998d65?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "card_small",
    },
    {
      url: "https://i.pinimg.com/564x/11/1a/67/111a677fd466884f31a0b13c8564048a.jpg",
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
