export function convertXMLtoJSON(xml) {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xml, "application/xml");

    function xmlToJson(node) {
        // Create an empty object to store node data
        let obj = {};

        // Handle element nodes
        if (node.nodeType === 1) {
            // If there are attributes, add them as properties
            if (node.attributes.length > 0) {
                for (let i = 0; i < node.attributes.length; i++) {
                    const attribute = node.attributes.item(i);
                    obj[attribute.nodeName] = attribute.nodeValue;
                }
            }
        }
        // Handle text nodes
        else if (node.nodeType === 3) {
            obj = node.nodeValue.trim();
        }

        // Process child nodes
        if (node.hasChildNodes()) {
            for (let i = 0; i < node.childNodes.length; i++) {
                const childNode = node.childNodes.item(i);
                const childObject = xmlToJson(childNode);

                // Only add non-empty nodes
                if (childNode.nodeName !== "#text" || childObject) {
                    if (!obj[childNode.nodeName]) {
                        obj[childNode.nodeName] = childObject;
                    } else {
                        // If a node with the same name already exists, make it an array
                        if (!Array.isArray(obj[childNode.nodeName])) {
                            obj[childNode.nodeName] = [obj[childNode.nodeName]];
                        }
                        obj[childNode.nodeName].push(childObject);
                    }
                }
            }
        }
        return obj;
    }

    // Start converting from the root XML document node
    const jsonResult = xmlToJson(xmlDoc.documentElement);
    return jsonResult;
}

export function convertDate(originalDate) {
    const date = new Date(originalDate);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options);
    return formattedDate
}

export const sortRaces = (races, pinnedRaces ) => {
    const sortedRaces = races?.sort((a, b) => {
        const isA = pinnedRaces?.includes(a.raceName)
        const isB = pinnedRaces?.includes(b.raceName)
        if (isA === isB) return 0;
        return isA ? -1 : 1
    })
    return sortedRaces
}