import Image from 'next/image';

type Props = {
  src: string;
  height?: any;
  width?: any;
  alt?: any;
  className?: any;
  objectFit?: any;
  priority?: boolean;
  style?: any;
};

export default function ImageComponent({
  src = '',
  height,
  width,
  alt,
  className,
  objectFit,
  priority,
  style,
}: Props) {
  if (height && width) {
    return (
      <Image
        src={src}
        height={height}
        width={width}
        alt={alt}
        className={className}
        style={style}
        loading="lazy"
        objectFit={objectFit || 'contain'}
      />
    );
  } else {
    return (
      <Image
        src={src}
        className={className}
        style={style}
        alt={alt}
        layout="fill"
        objectFit={objectFit || 'cover'}
        placeholder={'blur'}
        blurDataURL="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
        loading="lazy"
      />
    );
  }
}
