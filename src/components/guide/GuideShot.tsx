import type { GuideImage } from "../../data/guides";

/** Capture d'écran d'un guide : image responsive + légende (chargement différé). */
export default function GuideShot({ image }: { image: GuideImage }) {
  return (
    <figure className="gshot">
      <img
        src={image.src}
        alt={image.caption}
        width={image.width}
        height={image.height}
        loading="lazy"
        decoding="async"
      />
      <figcaption className="gshot__caption">{image.caption}</figcaption>
    </figure>
  );
}
