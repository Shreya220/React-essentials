export default function TabButton({ children, isSelected, ...props }) {
  //* we can give any names to or own custom props except the "children" prop
  return (
    <li>
      <button className={isSelected ? "active" : undefined} {...props}>
        {children}
      </button>
      {/* using function as a value hence only name is passed without parenthesis, when click occurs this function is executed by react not us (when we add name without parenethesis) */}
      {/* if you add parenthesis func will get executed when that line of code executes. now, it is getting executed when click happens */}
    </li>
  );
}
// this prop is not set with the help of attributes, it simply refers to the content between your component text( can be text or jsx structure as well )
//* the content between component opening and closing tag is used as a value for the special "CHILDREN" prop. React automatically passes a special prop named "children" to every custom component.
