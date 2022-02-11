import { ContainerImage } from "../ContainerImage/ContainerImage";

export function Image({ src, alt = "Imagem" }) {
  return (
    <ContainerImage>
      <img alt={alt} src={src} />
    </ContainerImage>
  );
}
