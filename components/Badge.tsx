interface BadgeProps {
  text: string;
  classNames: string;
}

export default function Badge({ text, classNames }: BadgeProps) {
  return (
    <span
      className={`${classNames} mr-4 w-[70px] cursor-pointer py-1 rounded-md text-center text-white block`}
    >
      {text}
    </span>
  );
}
