export const checkResponse = (body, spec) => {
    
    if (!body && spec) {
        
        return ['Missing response body'];
        
    } else if (body && !spec) {
        
        return ['Missing response spec'];
        
    }

    let errors = [];

    Object.keys(spec).forEach((key) => {

        const path = 'body.' + key;
        errors = errors.concat(checkKeyAndSubTree(body[key], spec[key], path));

    });

    return errors;

}


const checkKeyAndSubTree = (item, spec, path) => {

    if (!item) {
        return [`Missing ${typeof spec} ${path}`];
    }

    if (typeof item !== typeof spec) {
        return [
            `Type of ${path} is ${typeof item} and should be ${typeof spec}`
        ];
    }

    if (typeof item !== 'object') {
        return [];
    }

    let errors = [];

    Object.keys(spec).forEach((nestedKey) => {
        
        const newPath = path + '.' + nestedKey;
        errors = errors.concat(
            checkKeyAndSubTree(
                item[nestedKey],
                spec[nestedKey],
                newPath
            )
        );

    });

    return errors;

}

