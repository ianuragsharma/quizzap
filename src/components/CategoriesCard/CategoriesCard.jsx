import { Link } from "react-router-dom";
import "./categoriesCard.css";
const CategoriesCard = ({ categories }) => {
  return (
    <>
      <div className="vertical-card flex-column card-shadow">
        <img
          className="img-categories"
          loading="lazy"
          src={categories.imageURL}
          alt="quiz"
        />

        <div className="card-details-container">
          <h3 className="text-xl">{categories.title}</h3>
          <span className="text-base">Men Charcoal Grey Slim </span>
        </div>
        <Link to="/rules">
          <button className="btn btn-solid-primary categories-cta  text-black fw-700 btn-cta">
            Take this Quiz
          </button>
        </Link>
      </div>
    </>
  );
};

export { CategoriesCard };
