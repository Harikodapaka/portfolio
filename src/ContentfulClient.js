import * as contentful from 'contentful';
import resolveResponse from 'contentful-resolve-response';

const Client = contentful.createClient({
    space : process.env.REACT_APP_CONTENTFUL_SPACE,
    accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN
});

const GET_ENTRIES = (content_type) => {
    return Client.getEntries({content_type: content_type })
    .then((respone) =>  resolveResponse(respone))
    .catch((err) => {throw err;});
};

export default GET_ENTRIES;