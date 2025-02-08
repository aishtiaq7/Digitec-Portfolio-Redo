import { ButtonProps } from "@/types/Button";

export default function Button({ text, classname, onClick }: ButtonProps) {
    return (
        <button className={`${classname}`} onClick={onClick}>{text} </button>
    )
}