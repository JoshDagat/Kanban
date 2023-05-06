import Image from "next/image";

const Logo = () => {
  return (
    <div className="
        logo 
        border-solid 
        h-[100px] 
        flex 
        items-center
        pl-9
    ">
        <Image 
            src="/images/logo-dark.svg" 
            alt="Kanban Logo" 
            width={150} 
            height={25}
        />
    </div>
  )
}

export default Logo