import Image from "next/image";
import type { CSSProperties } from "react";

type EditorialThumbnailProps = {
  src: string;
  alt: string;
  featured?: boolean;
  priority?: boolean;
  focalPosition?: string;
};

export function EditorialThumbnail({
  src,
  alt,
  featured = false,
  priority = false,
  focalPosition = "50% 50%",
}: EditorialThumbnailProps) {
  const sizes = featured
    ? "(max-width: 780px) 100vw, (max-width: 1050px) 88vw, 59vw"
    : "(max-width: 780px) 100vw, (max-width: 1050px) 44vw, 30vw";

  return (
    <span
      className="editorial-thumbnail"
      style={{ "--thumbnail-position": focalPosition } as CSSProperties}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
      />
    </span>
  );
}
