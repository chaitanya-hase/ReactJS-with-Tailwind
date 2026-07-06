import RightCardContent from './RightCardContent'

const RightCard = (props) => {
    console.log(props.color);
    
    return (
        <div className="w-80 h-[550px] shrink-0 overflow-hidden rounded-4xl relative">
            <img className="w-full h-full object-cover" src={props.img} alt="" />
            <RightCardContent color={props.color} id={props.id} tag={props.tag} />
        </div>
    )
}

export default RightCard