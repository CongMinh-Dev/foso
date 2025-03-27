import './button.css'
export default function MyButton(props: {
     content: React.ReactNode, 
     color:string, bgColor?:string, px?:string, py?:string, borderW:string, mx?:string, my?:string, width?:string   }) {
    return (
        
            <button className={`px-[12px] py-[8px] `}  
            style={{ color: `${props.color}`,  border: `${props.color}`, backgroundColor:`${props.bgColor}`,
                paddingTop:`${props.py} `, paddingBottom:`${props.py} `,
                paddingRight:`${props.px} `, paddingLeft:`${props.px} `,
                borderStyle:"solid", borderWidth:`${props.borderW}`, borderColor:`${props.color}`,
                marginTop:`${props.my} `, marginBottom:`${props.my} `,
                marginRight:`${props.mx} `, marginLeft:`${props.mx} `,
                width:`${props.width} `
                
            }} >
                {props.content}
            </button>

    )
}
