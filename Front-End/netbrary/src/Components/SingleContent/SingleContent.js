import "./SingleContent.css";
import ContentModal from "../ContentModal/ContentModal";

const SingleContent = ({
  id,
  poster,
  title,
  media_type
}) => {
  return (
    <ContentModal media_type={media_type} poster={poster} title={title} id={id}>
      <div>
        <img className="poster" src={poster} alt={title} height="275" width="200"/>
        <b className="title">{title}</b>
      </div>
    </ContentModal>
  );
};

export default SingleContent;
