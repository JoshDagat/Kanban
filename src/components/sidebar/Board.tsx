import Image from "next/image";
import BoardSVG from "./BoardSVG";

interface BoardProps {
  title: string
  isActive: boolean
}

const Board: React.FC<BoardProps> = ({title, isActive}) => {
  return (
    <li className={`
      flex 
      items-center
      pl-8
      py-4

      w-11/12
      ${isActive ? 'rounded-r-full' : ''}
      ${isActive ? 'bg-main-purple' : ''}
      `}>
      <BoardSVG 
        fill={isActive ? "#fff" : "#828FA3"}
      />
      <span 
        className={`
          capitalize
          cursor-pointer
          font-sans 
          font-bold 
          ${isActive ? 'text-white': 'text-medium-grey'}
      `}>
        {title}
      </span>
    </li>
  )
}

export default Board