const ImageWithFallback = ({
  src,
  fallback,
  type = "image/webp",
  alt,
  ...rest
}) => {
  return (
    <picture>
      <source srcSet={src} type={type} />
      <img src={fallback} alt={alt} {...rest} />
    </picture>
  );
};

export default ImageWithFallback;
