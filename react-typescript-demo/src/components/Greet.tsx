type GreetProps = {
  // This is an object
  name: string;
  messageCount: number;
  isLoggedIn: boolean;
};

// Use types when building applications and interfaces when building libraries
// Otherwise hardly any difference between using one over the other

export const Greet = (props: GreetProps) => {
  return (
    <div>
      <h2>
        {" "}
        {props.isLoggedIn
          ? `Welcome ${props.name}! You have ${props.messageCount} unread messages`
          : "Welcome Guest"}
      </h2>
    </div>
  );
};
