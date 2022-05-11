
export default function Types({type})  {
  
  if (type) {
    return (
      <><p className="type">{type.type.name}</p></>
    )
  }
}