import video from '~/database/video'

export default defineEventHandler(async (event) => {
    const { id } = event.context.params || {}
    return video.find((v) => v.bvid === id)
})