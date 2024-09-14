import "./Infobox.css";
import img1 from "../../assets/img/Group.png";
import img2 from "../../assets/img/Group 1.png";
import img3 from "../../assets/img/Group (1).png";
import img4 from "../../assets/img/game-icons_feather.png";
const Infobox = () => {
  const infobox = [
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
      <section className="infobox-section">
        {infobox.map((ibox) => (
          <div key={ibox.id} className="ibox-item">
            <img src={ibox.image} alt={ibox.title} />
            <h2>{ibox.title}</h2>
          </div>
        ))}
      </section>
    </>
  );
};

export default Infobox;
