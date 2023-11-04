type PersonsListProps = {
  name: {
    first: string;
    last: string;
  }[];
};

/*
In React, when you render a list of elements using the map function, it's a good practice to assign a unique key
prop to each item in the list. The key prop is used by React to efficiently update and re-render components when
the list changes. It helps React identify which items have been added, removed, or re-ordered.
*/
export const PersonList = (props: PersonsListProps) => {
  return (
    <div>
      {props.name.map((name) => {
        return (
          <h2 key={name.first}>
            {name.first} {name.last}
          </h2>
        );
      })}
    </div>
  );
};
