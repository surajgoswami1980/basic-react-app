export default function Productdetails({idx}){
    let discription=[
        ["system 3","syatem 4"], ["system 5","syatem 6"], ["system 5","syatem 6"], ["system 7","syatem 8"],
    ]
    let heading=[
        "computer 1", "computer 11", "computer 111", "computer 1111",
    ]
    
    return(
        
        <div className="productdetils">
          <h1>{heading[idx]}</h1>
        <p> {discription[idx][0]} </p>
        <p> {discription[idx][1]} </p>
        </div>

    )
}