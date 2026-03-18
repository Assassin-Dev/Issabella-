import Cpu from "../Images/Cpu.jpg";
import Headphone from "../Images/Headphone.jpg";
import Keyboard from "../Images/Keyboard.jpg";
import Monitor from "../Images/Monitor.jpg";
import FourthMoni from "../Images/FourthMoni.jpg";
import BigScreen from "../Images/BigScreen.jpg";
import SecMonitor from "../Images/SecMonitor.jpg";
import ThirdMoni from "../Images/ThirdMoni.jpg";
import Router from "../Images/Router.jpg";





const Products = [
    {
        id: 1,
        name: "CPU",
        price: 100,
        image: Cpu,
        description: "This CPU is highly recommended for gamers",
    },

    {
        id: 2,
        name: "Headphone",
        price: 25,
        image: Headphone,
        description: "Give your ears relax, try our new generation headphone",
    },

    {
        id: 3,
        name: "Keyboard",
        price: 45,
        image: Keyboard,
        description: "Super soft and comfortable to type",
    },

    {
        id: 4,
        name: "Monitor",
        price: 150,
        image: Monitor,
        description: "Super powerful shiny screen with high quality",
    },

    {
        id: 5,
        name: "Big Monitor",
        price: 190,
        image: SecMonitor,
        description: "New Generation Monitor",
    },


{
        id: 6,
        name: "Big Monitor",
        price: 120,
        image: BigScreen,
        description: "Big Screen and powerful Monitor",
    },

    {
        id: 7,
        name: "Brand New Monitor",
        price: 150,
        image: FourthMoni,
        description: "Big Screen and powerful Monitor",
    },

        {
        id: 8,
        name: "New Monitor",
        price: 120,
        image: ThirdMoni,
        description: "Big Screen and powerful Monitor",
    },

  {
        id: 9,
        name: "Router",
        price: 80,
        image: Router,
        description: "Fast Internet",
    },

];

export function getProducts(){
  return Products;
}

export function getProductById(id){
    return Products.find((p) => p.id === Number(id));
}