import Productdetails from "./Productdetail.jsx";
import Prize from "./Prizes.jsx";



export default function Product({idx}){
    let styles={
      border: "2px solid black",
      marginLeft:"20px"
    }
    let oldprizes =["12,499","11,900","15,999","1,599"];
    let newprizes =["2,499","1,900","5,999","11,599"];
    return(
        <div style={styles}>
          <Productdetails idx={idx}/>
          <Prize oldprize ={oldprizes[idx]} newprize={newprizes[idx]} />
        </div>
    )
}
