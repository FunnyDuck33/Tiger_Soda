import { ImageResponse } from 'next/server';

import index_en from '@/../public/assets/shares/index-en.png';

// Route segment config
export const runtime = 'edge'

// Image metadata
export const alt = 'Tiger Soda'

export const size = {
    width: 1200,
    height: 630,
}

export const contentType = 'image/png'

// Image generation
export default async function Image() {
    return (
        <img src={index_en.src} alt="share"/>
    )
}
