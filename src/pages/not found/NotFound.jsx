import "./NotFound.css";
import errorImage from "../../assets/img/404-error.png";
const NotFound = () => {
  return (
    <>
      <section className="not-found-page">
        <div>
          <div className="image-container">
            <img src={errorImage} alt="" />
          </div>
          <h2>Oops</h2>
          <p>
            It looks like the page you're looking for doesn't exist. It might
            have been moved, deleted, or never existed in the first place.
          </p>
          <button>Home</button>
        </div>
      </section>
    </>
  );
};

export default NotFound;
