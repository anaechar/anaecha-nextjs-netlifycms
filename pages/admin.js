import { useEffect } from 'react';
import { netlifyCMSConfig } from '../config/netlifycms';

export default function AdminPage({ config }) {
    useEffect(() => {
        ;(async () => {
            const CMS = (await import('netlify-cms-app')).default
            const cloudinary = (await import('netlify-cms-media-library-cloudinary')).default
            CMS.registerMediaLibrary(cloudinary);
            CMS.init({ config });
        })()
    }, []);

  return <div />;
};

export async function getStaticProps() {
    const config = netlifyCMSConfig(process.env.CLOUDINARY_CLOUD_NAME,process.env.CLOUDINARY_API_KEY);
    return {
        props: {
            config
        }
    };
};