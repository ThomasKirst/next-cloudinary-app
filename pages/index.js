import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [images, setImages] = useState([]);
  const [image, setImage] = useState(null);
  const [imageValue, setImageValue] = useState('');

  async function handleFileUpload(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const tags = [...event.target.tags]
      .filter((tag) => tag.checked)
      .map((tag) => tag.value);

    formData.append('file', image);
    formData.append('tags', tags);
    formData.append('upload_preset', process.env.NEXT_PUBLIC_UPLOAD_PRESET);

    const url = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDNAME}/upload`;
    const response = await fetch(url, {
      method: 'POST',
      body: formData,
    });
    const json = await response.json();

    // Crop image and zoom in on person´s face
    const thumbnailOptions = 'c_thumb,g_face,h_400,w_400';
    setImages([
      ...images,
      {
        id: json.asset_id,
        src: json.secure_url.replace(
          '/image/upload/',
          `/image/upload/${thumbnailOptions}/`
        ),
        width: json.width,
        height: json.height,
      },
    ]);
    setImage(null);

    const formValues = Object.fromEntries(formData);
    console.log(formValues, 'from Entries');
    console.log(event.target.tags);
  }

  return (
    <main>
      <h1>Image Upload</h1>
      <form onSubmit={handleFileUpload}>
        <p>
          <label htmlFor="avatar">Please choose an image</label>
        </p>
        <input
          type="file"
          // name="avatar"
          id="avatar"
          value={imageValue}
          onChange={(event) => {
            setImageValue(event.target.value);
            setImage(event.target.files[0]);
          }}
        />
        <p>
          <label>
            <input type="checkbox" name="tags" value="woman" />
            Woman
          </label>
          <label>
            <input type="checkbox" name="tags" value="happy" />
            Happy
          </label>
          <label>
            <input type="checkbox" name="tags" value="man" />
            Man
          </label>
          <label>
            <input type="checkbox" name="tags" value="student" />
            Student
          </label>
        </p>
        <button type="submit">Upload</button>
      </form>
      {images.length > 0 && (
        <section>
          <h3>Uploaded images</h3>
          {images.map((image) => (
            <div key={image.id} className="responsive-image">
              <Image
                src={image.src}
                width={400}
                height={400}
                layout="fill"
                objectFit="cover"
                alt={image.tags?.join(', ')}
              />
            </div>
          ))}
        </section>
      )}
    </main>
  );
}
