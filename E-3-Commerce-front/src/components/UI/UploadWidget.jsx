import React, { useEffect, useRef } from 'react';

export default function UploadWidget({ setImageUrlCallback }) {

    const cloudinaryRef = useRef();
    const widgetRef = useRef();

    useEffect(() => {
        cloudinaryRef.current = window.cloudinary;
        widgetRef.current = cloudinaryRef.current.createUploadWidget(
            {
                cloudName: 'drzaye5tk',
                uploadPreset: 'uto7dutm'
            },
            function (error, result) {
                if (!error && result.event === 'success') {
                    const imageUrl = result.info.url;
                    setImageUrlCallback(imageUrl);
                }
            }
        );
    }, []);

    return (
        <div>
            <button type='button' className="px-1 py-1 mr-2 bg-primary hover:bg-secondary" onClick={() => widgetRef.current.open()}>
                Cargar Imagen
            </button>

        </div>
    );
}