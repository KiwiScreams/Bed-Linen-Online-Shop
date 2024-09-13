import "./Category.css";
import img1 from "../../assets/img/Group.png";
import img2 from "../../assets/img/Group 1.png";
import img3 from "../../assets/img/Group (1).png";
import img4 from "../../assets/img/game-icons_feather.png";
const Category = () => {
  const categories = [
    {
      id: 1,
      title: "Healthy Sleep",
      image: img1,
    },
    {
      id: 2,
      title: "100%Cotton",
      image: img2,
    },
    {
      id: 3,
      title: "Best Tailoring",
      image: img3,
    },
    {
      id: 4,
      title: "Comfort",
      image: img4,
    },
  ];
  return (
    <>
      <section className="categories-section"></section>
    </>
  );
};

export default Category;
