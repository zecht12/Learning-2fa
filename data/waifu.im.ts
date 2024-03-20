import fetch from 'isomorphic-fetch';

const WAIFU_IM_API = 'https://api.waifu.im';
const WAIFU_PICS_API = 'https://api.waifu.pics';

export const getWaifuTag = async () => {
    try {
        const res = await fetch(`${WAIFU_IM_API}/tags`);
        if (!res.ok) {
            throw new Error('Failed to fetch waifu tags');
        }
        return res.json();
    } catch (error) {
        console.error('Error fetching waifu tags:', error);
        throw error;
    }
};

export const getSearchWaifu = async (params: Record<string, any>) => {
    try {
        const queryString = Object.keys(params)
            .map((key) => `${key}=${params[key]}`)
            .join('&');
        const res = await fetch(`${WAIFU_IM_API}/search?${queryString}`);
        if (!res.ok) {
            throw new Error('Failed to search for waifus');
        }
        return res.json();
    } catch (error) {
        console.error('Error searching for waifus:', error);
        throw error;
    }
};

export const getWaifuImage = async (type: 'sfw' | 'nsfw', category: string) => {
    try {
        const res = await fetch(`${WAIFU_PICS_API}/${type}/${category}`);
        if (!res.ok) {
            throw new Error('Failed to fetch waifu image');
        }
        return res.json();
    } catch (error) {
        console.error('Error fetching waifu image:', error);
        throw error;
    }
};

export const getManyWaifuImages = async (type: 'sfw' | 'nsfw', category: string) => {
    try {
        const res = await fetch(`${WAIFU_PICS_API}/many/${type}/${category}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({})
        });
        if (!res.ok) {
            throw new Error('Failed to fetch many waifu images');
        }
        return res.json();
    } catch (error) {
        console.error('Error fetching many waifu images:', error);
        throw error;
    }
};
