export const fakeDelay = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms))
}