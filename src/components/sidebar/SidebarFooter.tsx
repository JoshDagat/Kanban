import Image from "next/image";

const SidebarFooter = () => {
  return (
    <>
      <div
        className="
          flex
          bg-light-grey
          items-center
          justify-center
          gap-x-6
          py-3.5
          w-5/6
          mx-auto
          rounded-md
          mb-6
      ">
        <Image
          src="/images/icon-light-theme.svg"
          alt="light theme icon"
          width={18}
          height={18}
        />
        <button
          className="
            w-[40px] 
            h-[20px]
            bg-main-purple
            rounded-full
            relative
            cursor-pointer
            
            before:content-['']
            before:bg-white
            before:w-[14px]
            before:h-[14px]
            before:absolute
            before:rounded-full
            before:top-[3px]
            before:left-[3px]
        ">
        </button>
        <Image
          src="/images/icon-dark-theme.svg"
          alt="light theme icon"
          width={18}
          height={18}
        />  
      </div>
      <p className="
        flex
        items-center
        font-sans
        font-bold
        text-medium-grey
        pl-8
        mb-12
        cursor-pointer
      ">
        <Image
          src="/images/icon-hide-sidebar.svg"
          alt="hide sidebar"
          width={18}
          height={16}
          className="mr-4"
        />
        Hide Sidebar
      </p>
    </>
  )
}

export default SidebarFooter