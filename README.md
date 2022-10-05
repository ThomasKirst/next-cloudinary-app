# NextJS Cloudinary Upload

A simple client-based cloudinary integration on NextJS.

It takes an image to upload, tries to find a face on the picture, and crops the image. That´s all 😉

See the app in progress:

<video src="https://res.cloudinary.com/tk-one/video/upload/e_accelerate:20,vc_h264/v1664989198/videos/next-cloudinary-app_kgcgk5.mov" controls="controls" style="max-width: 427px;">
</video>
## Configure your cloudinary access

Create a file `.env.local` from `env.example`:

```bash
NEXT_PUBLIC_CLOUDNAME=
NEXT_PUBLIC_UPLOAD_PRESET=
```

Enter your cloud name and the name of your upload preset (unsigned) from cloudinary here.

## Run the app

- `npm install`
- `npm run dev`

## Enjoy 🥳
