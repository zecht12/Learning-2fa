export const getWaifuTag = async () => {
    const res = await fetch('https://api.waifu.im/tag');
    return res.json();
};

export const getSearchWaifu = async (params: Record<string, any>) => {
    const queryString = Object.keys(params)
        .map((key) => key + '=' + params[key])
        .join('&');
    const res = await fetch(`https://api.waifu.im/search?${queryString}`);
    return res.json();
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
