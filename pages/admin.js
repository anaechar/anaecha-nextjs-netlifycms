import { useEffect } from 'react';
import config from '../config/netlifycms';

export default function AdminPage() {
    useEffect(() => {
        ;(async () => {
            const CMS = (await import('netlify-cms-app')).default
            const cloudinary = (await import('netlify-cms-media-library-cloudinary')).default
            CMS.registerMediaLibrary(cloudinary);
            CMS.init({ config });
        })()
    }, []);

  return <div />
};