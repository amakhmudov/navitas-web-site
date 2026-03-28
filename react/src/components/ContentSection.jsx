export default function ContentSection({ title, paragraphs, image, imageAlt }) {
  return (
    <>
      <div className="flex max-lg:flex-wrap md:gap-x-6 max-lg:space-y-6">
        <div className="w-full lg:w-3/12">
          <h3>{title}</h3>
        </div>

        <div className="w-full space-y-12 lg:w-9/12">
          <div className="space-y-3">
            {paragraphs.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>

          <picture className="block">
            <source srcSet={`${image.webp} 1x, ${image.webp} 2x`} />
            <img src={image.png} width={image.width} height={image.height} alt={imageAlt} className="object-cover w-full" />
          </picture>
        </div>
      </div>
      <hr className="my-12 border-t" />
    </>
  );
}
