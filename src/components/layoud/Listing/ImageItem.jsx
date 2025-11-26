function ImageItem({ eachImageObj }) {
  return (
    <li className="flower">
      <img
        className="flower__image"
        src={eachImageObj.url}
        alt={"Una foto de" + eachImageObj.title.toLocaleLowerCase()}
      />
      <p>{eachImageObj.title}</p>
    </li>
  );
}
export default ImageItem;
