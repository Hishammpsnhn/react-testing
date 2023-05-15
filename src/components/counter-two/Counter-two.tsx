import { CounterTwoProps } from './Counter-two.types'

export const CounterTwo = (props: CounterTwoProps) => {
    
    console.log(props.handleIncrement)
  return (
    <div>
      <h1>Counter Two</h1>
      <p>{props.count}</p>
      {props.handleIncrement && (
        <button onClick={props.handleIncrement}>Increment</button>
      )}
      {props.handleDecrement && (
        <button onClick={props.handleDecrement}>Decrement</button>
      )}
    </div>
  )
}