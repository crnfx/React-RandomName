import React from 'react';
import styles from './randomnamefunctional.css';
import { starWars, uniqueNamesGenerator } from 'unique-names-generator';

interface IRandomNameFunctional {
  name: string;
  count: number;
}

export function RandomNameFunctional() {

  const randomName = () => uniqueNamesGenerator({ dictionaries: [starWars], length: 1 })

  // const [name, setName] = React.useState(randomName); // S | () => S
  // const [count, setCount] = React.useState(0);
  // const handleClick = () => { 
  //   setName(randomName);
  //   setCount((prevCount) => prevCount + 1)
  // // setCount(count + 1); // WRONG!!!
  // };
  // console.log('>>', count);

  const [state, setState] = React.useState<IRandomNameFunctional>({ name: randomName(), count: 0});
  const handleClick = () => {
    setState((prevState) => ({ ...prevState, name: randomName() }))
    setState((prevState) => ({...prevState, count: prevState.count + 1}))
  };
  console.log('>>', state.count);

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Random Name Functional</h1>
      <span className={styles.name}>{state.name}</span>
      <div className={styles.gap}></div>
      <button className={styles.button} onClick={handleClick}>Мне нужно имя</button>
    </section>
  )
}

