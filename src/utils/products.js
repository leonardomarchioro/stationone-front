import Bolo from "../assets/bolo.jpg";
import Bolo2 from "../assets/bolo2.jpg";
import Bolo3 from "../assets/bolo3.jpg";

import VideoAula from "../assets/videoaula.png";
import Cozinheiro from "../assets/cozinheiro.jpg";
import Boleiro from "../assets/boleiro.jpg";

export const products = [
  {
    id: 1,
    name: "Patissier",
    description:
      "Modern take on old school Vietnamese street food. You'll love it, we promise:)",
    location: "R. Cônego Valadão, 725 - Gopouva, Guarulhos - SP, 07040-000",
    imgUrl: Bolo,
    delivery: [
      {
        id: 1,
        name: "Chocolate cake",
        price: 10.0,
        description: "Chocolate cake with sprinkles",
        imgUrl: Bolo3,
      },
      {
        id: 2,
        name: "Chocolate cake",
        price: 10.0,
        description: "English chocolate cake",
        imgUrl: Bolo2,
      },
    ],
  },
  {
    id: 2,
    name: "Online course",
    description:
      "Artisan Sausage truck is a spot for bomb sausage made from ground pork, beef, or poultry, along with salt, special blend of spices and other flavorings and combos.  Some sausages include other ingredients for flavor. Stop by, and check for yourself!",
    location: "Online",
    imgUrl: VideoAula,
    delivery: [
      {
        id: 1,
        name: "Confectionery course",
        price: 100.0,
        description: "Complete bakery course",
        imgUrl: Cozinheiro,
      },
      {
        id: 2,
        name: "Confectionery course",
        price: 100.0,
        description: "Complete bakery course",
        imgUrl: Boleiro,
      },
    ],
  },
];
