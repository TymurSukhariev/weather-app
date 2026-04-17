export function OpenCloseIcon({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: React.Dispatch<React.SetStateAction<boolean>> }) {
    return (
        <img onClick={() => setIsOpen(prev => !prev)} className="absolute top-[15px] right-[10px] w-6 h-6 cursor-pointer" src={isOpen ? "hide-sidebar.svg" : "open-sidebar.svg"} />
    );
}