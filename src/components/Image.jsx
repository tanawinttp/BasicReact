import PropTypes from "prop-types";

const Image = ({ imageUrl }) => {
  return (
    <div>
      {imageUrl}
      <img src={imageUrl} width="100px" />
    </div>
  );
};

export default Image;

Image.propTypes = {
  imageUrl: PropTypes.string,
};
