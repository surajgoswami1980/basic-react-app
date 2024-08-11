export default function Prize({oldprize,newprize}){
    let oldstyles={
        textDecorationLine:"Line-through"
    };
    let newstyles={
        fontWeight:"bold",
    };
    let styles={
        backgroundColor:"yellow",
    };
    return(
        
        <div  style={styles}>
          <span style={oldstyles}>{oldprize}</span>
          &nbsp;&nbsp;&nbsp;
          <span style={newstyles}>{newprize}</span>
        </div>

    )
}