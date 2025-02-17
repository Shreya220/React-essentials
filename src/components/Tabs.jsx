export default function Tabs({ children, buttons, buttonsContainer = 'menu' }) { 
//buttonsContainer = 'menu' or like buttonsContainer = Select -- for custom component(import the component as well)

  //* upper case starting to show its custom made, can be used as a custom component
  const ButtonsContainer = buttonsContainer;
  // it will pass that string into the tags and it will try to look for built in component/custom made one that can be identified by that string
  //! shortcut :  accept a prop that starts with uppercase so we wont need a separate variable i.e use ButtonsContainer instead of buttonsContainer
  return (
    //* WOKING WITH MULTIPLE JSX SLOTS
    <>
      {/* button slot */}
      <ButtonsContainer>{buttons}</ButtonsContainer>
      
      {/* main content slot */}
      {children}
    </>
  );
}
