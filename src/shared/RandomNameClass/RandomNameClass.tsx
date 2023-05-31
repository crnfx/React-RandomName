import React from 'react';
import styles from './randomnameclass.css';
import { starWars, uniqueNamesGenerator } from 'unique-names-generator';

interface IRandomNameClass {
  name: string;
  count: number;
}

export class RandomNameClass extends React.PureComponent<{}, IRandomNameClass> {

  // constructor(props: {}) {
  //   super(props);

  //   this.state = { name: '123' }; // Инициализировали состояние, READONLY
  // }

  state: Readonly<IRandomNameClass> = { name: this.randomName(), count: 0 } // Инициализация состояния через перегрузку, READONLY

  public render() {
    return (
      <section className={styles.container}>
         <h1 className={styles.title}>Random Name Class</h1>
        <span className={styles.name}>{this.state.name}</span>
        <div className={styles.gap}></div>
        <button className={styles.button} onClick={this.handleClick}>Мне нужно имя</button>
      </section>
    );
  }

  private handleClick = () => {
    this.setState({ name: this.randomName() });
    this.setState( (state, props) => ( {count: state.count + 1} ), () => { console.log('>>', this.state.count) } )
  }

  private randomName(): string {
    return uniqueNamesGenerator({dictionaries: [starWars], length: 1})
  }
}

