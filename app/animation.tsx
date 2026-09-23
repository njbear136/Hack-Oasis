import Image from "next/image";

export default function Sandyblock({
    children,
    className= "",
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <div
        className={`relative rounded-3xl bg-[#e5c99b] px-6 py-2 shadow-lg overflow-visible ${className}`}
        >
            <style>{`
            @keyframes camel-walk-top {
            from { left: 90%; }
            to   { left: -2%; }
            }

            @keyframes camel-walk-bottom {
            from { left: -15%; }
            to   { left: 90%; }
            }

            .camel-walk-top{
            position: absolute;
            top: 0%;
            transform: translate(-50%, -50%);
            animation: camel-walk-top 20s linear infinite;
            pointer-events: none;
            }

            .camel-walk-bottom{
            position: absolute;
            top: 100%;
            transform: translate(-50%, -50%) rotate(180deg);
            animation: camel-walk-bottom 20s linear infinite;
            pointer-events: none;
            }
            `}</style>

            <Image
             src= "/camel.png"
             alt=""
             width={200}
             height={200}
             className="camel-walk-top"
             style={{ animationDelay: "0s" }}
             />

             <Image
             src= "/camel.png"
             alt=""
             width={200}
             height={200}
             className="camel-walk-bottom"
             style={{ animationDelay: "0s" }}
             />
             {children}
        </div>
    );
}