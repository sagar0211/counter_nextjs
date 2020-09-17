import React, {Component} from 'react';
import styles from '../styles/Count.module.css';



class Count extends Component{
  constructor(props){
    super(props);
    this.state = {
      count :0 
    }
  }

  increment =() => {
    this.setState({count: this.state.count + 1})
  }

  decrement =() => {
    this.setState({count: this.state.count - 1})
  }
    render(){
    return (
      <div className={styles.App}>
        <>
          <header className={styles.head}>Welcome To Counter</header>

          <div className="tab">
            <br/>
            <button onClick={this.increment} className={styles.inc}>Increment</button>
            <h1 className={styles.show}>{this.state.count}</h1>
            <button onClick={this.decrement} className={styles.dec}>Decrement</button>
            <br />
            <footer className={styles.foot}>Thank you for using Counter</footer>
          </div>
        </>
  
      </div>
    )

  }
  
}

export default Count;
