export default function Section({ title, children, ...props}) {
  //* ...anyIdentifierName = this is JavaScript syntax which groups all the remaining object properties into a new object(names "props" in this case)
  //* ...props = to group data into object.
  //* ...props in <section> tag = to spread that data onto element
  return (

    //* if we use like this then if there are more attributes then we will have to destructure everything( not really scalable or convenient) hence we use FORWARDED PROPS OR PROXY PROPS
    // <section id={id}>

    //* all extra props set to the section component will now be forwarded to this <section>
    <section {...props} >

      <h2>{title}</h2>
      {children}
    </section>
  );
}
