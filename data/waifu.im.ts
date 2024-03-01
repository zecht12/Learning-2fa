export const getWaifu = async () => {
    const res = fetch('https://api.waifu.im/search');
    return (await res).json()
}