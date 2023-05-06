import Board from "./Board"
import Image from "next/image";
import BoardSVG from "./BoardSVG";

const Boards = () => {
  return (
    <div
        className="boards mb-auto"
    >
        <p className="mb-5 font-sans pl-8 uppercase tracking-widest text-medium-grey font-bold">All Boards(3)</p>
        <ul>
            <Board title="Platform Launch" isActive/>
            <Board title="Marketing Plan" isActive={false}/>
            <Board title="Roadmap" isActive={false}/>
            <li className="
                flex 
                items-center
                pl-8
                py-4
                w-11/12
            ">
                <BoardSVG fill="#635FC7"/>
                <span 
                    className="
                        capitalize 
                        font-sans 
                        text-main-purple 
                        font-bold 
                        cursor-pointer
                    ">+Create New Board</span>
            </li>
        </ul>
    </div>
  )
}

export default Boards