import React, {useState} from 'react'

const ColoredUserpic = (props) => {
    let [color, setColor] = useState(props.colors)
    return (
        <div 
            onMouseEnter={()=>{setColor(props.hoverColors)}}
            onMouseLeave={()=>{setColor(props.colors)}}
            style={{ borderRadius:'100%', 
                width:`${props.size}px`, 
                height:`${props.size}px`, 
                position: 'relative', 
                background: `linear-gradient(to right, ${color[0]}, ${color[1]})`
            }}>
                <img 
                    height={props.size-2*(props.colorWidth+props.margin)} 
                    style={{display: 'inline-block', 
                        position: 'absolute', 
                        left:props.colorWidth, 
                        top:props.colorWidth,
                        borderRadius:'100%', 
                        border: `${props.margin}px ${props.backgroundColor} solid`, 
                        objectFit:'inherit'}} 
                    src={props.src}
                    alt=""
                />
        </div>
    )
}

export default ColoredUserpic
