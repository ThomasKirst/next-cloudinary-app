# NextJS Cloudinary Upload

A simple client-based cloudinary integration on NextJS.

It takes an image to upload, tries to find a face on the picture, and crops the image.

In addition, the tags, which are selected by the user, will be stored as metadata attached to the image in cloudinary.

That´s all 😉

### See the app in progress:

https://user-images.githubusercontent.com/4458383/194127524-3818b7a7-5708-474e-a5b8-4aa8d06e2033.mov

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
