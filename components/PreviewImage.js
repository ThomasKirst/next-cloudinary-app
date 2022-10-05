import Image from 'next/image';
import { useMemo } from 'react';

export default function ImagePreview({
  file,
  height = 400,
  width = 400,
  objectFit = 'cover',
}) {
  const src = useMemo(() => URL.createObjectURL(file), [file]);

  return (
    <div style={{ position: 'relative', height, width, margin: '0 0 2rem 0' }}>
      <Image src={src} alt="" layout="fill" objectFit={objectFit} />
    </div>
  );
}
