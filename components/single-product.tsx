interface SingleProductTextProps {
  title: string;
  description: string;
  className?: string;
}

export function SingleProductText({
  title,
  description,
}: SingleProductTextProps) {
  return (
    <div className="text-white font-text flex items-center my-12 h-60 mx-auto max-w-[90%] md:max-w-screen-xl">
      <div className="flex  flex-col md:flex-row  h-fit  justify-center gap-6 md:items-start items-center md:justify-between">
        <h3 className="w-full md:w-64  flex-shrink-0 font-medium text-2xl">
          {title}
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
