export const getWaifuTag = async () => {
    const res = await fetch('https://api.waifu.im/tags');
    return res.json();
};

let cachedSearchResults: { [key: string]: any } = {};

export const getSearchWaifu = async (params: Record<string, any>) => {
    const queryString = Object.keys(params)
        .map((key) => key + '=' + params[key])
        .join('&');
    const cachedResult = cachedSearchResults[queryString];
    if (cachedResult) {
        return cachedResult;
    }
    const res = await fetch(`https://api.waifu.im/search?${queryString}`);
    const data = await res.json();
    cachedSearchResults[queryString] = data;

    return data;
};


export const getWaifuImage = async (type: 'sfw' | 'nsfw', category: string) => {
    const res = await fetch(`https://api.waifu.pics/${type}/${category}`);
    return res.json();
};

export const getManyWaifuImages = async (type: 'sfw' | 'nsfw', category: string) => {
    const res = await fetch(`https://api.waifu.pics/many/${type}/${category}`, {
        method: 'POST',
        body: JSON.stringify({}),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return res.json();
};
