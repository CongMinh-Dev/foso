
import   './areabg.css'
export default function AreaBg( props:{top:string, left:string}) {
    
  return (
    <div className={`areaBg absolute w-[500px] h-[500px]`} style={{top:`${props.top}`, left:`${props.left}`}}  >
        
    </div>
  )
}
