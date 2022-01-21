import React from "react";
import { Helmet } from "react-helmet";

const Meta = ({ title, description, keywords }) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name='description' content={description}/>
            <meta name='keyword' content={keywords}/>
        </Helmet>
    )
}

Meta.defaultProps = {
    title: 'Welcome To K-CLOSET',
    description: 'We sell the best clothing and accessories',
    keywords: 'Buy clothes, bags, shoes'
}

export default Meta