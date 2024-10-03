export const persistData = <T>(k: string, v: T) => {
    try {
        const json = JSON.stringify(v)
        localStorage.setItem(k, json)
    } catch (e) {
        throw new Error("The data format is invalid")
    }
}

export const getData = (k: string) => localStorage.getItem(k)