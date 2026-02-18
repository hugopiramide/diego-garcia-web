import { useEffect } from 'react';

interface SEOProps {
    title?: string;
    description?: string;
}

const SEO = ({ title, description }: SEOProps) => {
    useEffect(() => {
        if (title) {
            document.title = `${title} | Diego García`;
        } else {
            document.title = 'Diego García | Piloto de Automovilismo';
        }

        if (description) {
            let metaDescription = document.querySelector('meta[name="description"]');
            if (metaDescription) {
                metaDescription.setAttribute('content', description);
            } else {
                const meta = document.createElement('meta');
                meta.name = 'description';
                meta.content = description;
                document.head.appendChild(meta);
            }
        }
    }, [title, description]);

    return null;
};

export default SEO;
