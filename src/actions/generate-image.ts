'use server';
// import { generateText } from 'ai';
// import { google } from '@ai-sdk/google';

export async function generateImage() {
  try {
    // const result = await generateText({
    //   model: google('gemini-2.5-flash-image-preview'),
    //   prompt:
    //     'Create a picture of a nano banana dish in a fancy restaurant with a Gemini theme'
    // });
    // console.log('result', result);
    // // Save generated images
    // for (const file of result.files) {
    //   console.log('file', file);
    //   if (file.mediaType.startsWith('image/')) {
    //     console.log('file is an image', file);
    //     const timestamp = Date.now();
    //     const fileName = `generated-${timestamp}.png`;
    //     console.log(`Generated and saved image: output/${fileName}`);
    //   }
    // }
  } catch (error) {
    console.error(error);
    throw new Error('Failed to generate image');
  }
}
