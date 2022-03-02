import { v4 as uuidv4 } from "uuid";
import first from "../../Imgs/1.jpeg";
import second from "../../Imgs/2.jpeg";
import third from "../../Imgs/3.jpeg";
import fourth from "../../Imgs/4.jpeg";
import fifth from "../../Imgs/5.jpg";

// title and subtitle are not used but show we can add text to slider too
const dataSlider = [
  {
    id: uuidv4(),
    title: "Lorem ipsum",
    subTitle: "Lorem",
    img: first,
  },
  {
    id: uuidv4(),
    title: "Lorem ipsum",
    subTitle: "Lorem",
    img: second,
  },
  {
    id: uuidv4(),
    title: "Lorem ipsum",
    subTitle: "Lorem",
    img: third,
  },
  {
    id: uuidv4(),
    title: "Lorem ipsum",
    subTitle: "Lorem",
    img: fourth,
  },
  {
    id: uuidv4(),
    title: "Lorem ipsum",
    subTitle: "Lorem",
    img: fifth,
  },
];

export default dataSlider;
