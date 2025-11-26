import ImageItem from "./ImageItem";

function ImageList({ images }) {
  return (
    <ul className="gallery">
      {images.map((eachImageObj, index) => (
        <ImageItem
          key={eachImageObj.id}
          eachImageObj={eachImageObj}
          index={index}
        />
      ))}
    </ul>
  );
}
export default ImageList;
