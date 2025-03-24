import React, { memo } from "react";
import useSiteMetaData from "../../hooks/useSiteMetaData.js";

const SEO = ({ title, description, pathname, author, type = "website", image, keywords, children }) => {
    const { title: defaultTitle, description: defaultDescription, siteUrl, author: defaulteAuthor, image: defaultImage, keywords: defaultKeywords } = useSiteMetaData();

    const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: image || `${siteUrl}${defaultImage}`,
        url: `${siteUrl}${pathname || ``}`,
        author: author || defaulteAuthor,
        keywords: keywords || defaultKeywords
    };
    
    return (
        <>
            <title>{seo.title}</title>
            <meta name="viewport" content= "width=device-width, user-scalable=no"></meta>
            <meta property="description" content={seo.description} />
            <meta property="canonical" content={seo.url} />
            <meta property="og:title" content={seo.title} />
            <meta property="og:type" content={type} />
            <meta property="og:description" content={seo.description} />
            <meta name="keywords" content={seo.keywords} />
            <meta property="og:image" content={seo.image} />
            <meta property="og:url" content={seo.url} />
            <meta property="og:author" content={seo.author} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta property="og:image:width" content="1200"/>
            <meta property="og:image:height" content="630"/>
            <meta name="og:site_name" content={defaultTitle} />
            {children}
        </>
    );
};

export default memo(SEO);