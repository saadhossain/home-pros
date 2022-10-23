const PropertyLoader = async() => {
    const propertyData = await fetch('https://home-pros-server.vercel.app/property');
    const properties = await propertyData.json()

    return properties
};

export default PropertyLoader;