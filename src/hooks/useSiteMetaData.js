import { graphql, useStaticQuery } from "gatsby";

const useSiteMetaData = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    description
                    author
                    siteUrl
                    image
                }
            }
        }
  `)

  return data.site.siteMetadata;
};

export default useSiteMetaData;
