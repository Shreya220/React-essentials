function CoreConcept({image,title,description}) {
  //* DESTRUCTURING (same name to be used as mentioned in the data.js file)
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
export default CoreConcept;