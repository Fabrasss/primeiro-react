import { CardOscillation } from './CardOscillation'
import Styles from "./Card.module.css"

export default function Card(props) {
    return (
    <div className={Styles.card}>  
      <h2 >{props.children}</h2>
      <CardOscillation
        oscillation={props.oscillation}
        percentage={props.percentage}
        total={props.total}
      />
      <h3>{props.total}</h3>
    
    </div>
    )
}