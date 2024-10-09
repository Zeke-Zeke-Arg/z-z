import { HTMLAttributes, useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { cn } from "@/libs/utils";

interface ImageProps extends HTMLAttributes<HTMLDivElement> {
  item: { image: string | StaticImageData; title: string };
  index: number;
  activeItem: number;
}

interface ExpandableProps {
  list: { image: string | StaticImageData; title: string }[];
  autoPlay?: boolean;
  className?: string;
}

const List = ({ item, className, index, activeItem, ...props }: ImageProps) => {
  return (
    <div
      className={cn(
        "relative flex h-full w-20 min-w-10 cursor-pointer overflow-hidden rounded-md transition-all delay-0 duration-300 ease-in-out",
        {
          "flex-grow": index === activeItem,
        },
        className,
      )}
      {...props}
    >
      <Image
        src={item.image}
        alt={item.title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        style={{
          objectFit: "cover",
          transition: "all 0.3s",
          filter: index !== activeItem ? "blur(2px)" : "none",
          transform: index !== activeItem ? "scale(1.05)" : "scale(1)",
        }}
      />
      {index === activeItem && (
        <div className="absolute bottom-4 left-4 min-w-fit text-white md:bottom-8 md:left-8">
          <h3 className="text-xl sm:text-2xl md:text-4xl font-serif shadow-lg">{item.title}</h3>
        </div>
      )}
    </div>
  );
};

export default function Expandable({ list, autoPlay = true, className }: ExpandableProps) {
  const [activeItem, setActiveItem] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (!autoPlay || list.length === 0) {
      return;
    }

    const interval = setInterval(() => {
      if (!isHovering) {
        setActiveItem((prev) => (prev + 1) % list.length);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay, list.length, isHovering]);

  if (list.length === 0) {
    return null;
  }

  return (
    <div className={cn("flex h-96 w-full gap-1", className)}>
      {list.map((item, index) => (
        <List
          key={item.title}
          item={item}
          index={index}
          activeItem={activeItem}
          onMouseEnter={() => {
            setActiveItem(index);
            setIsHovering(true);
          }}
          onMouseLeave={() => {
            setIsHovering(false);
          }}
        />
      ))}
    </div>
  );
}