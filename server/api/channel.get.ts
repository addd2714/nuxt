import channel from '~/database/channel'

// 通过 defineEventHandler
export default defineEventHandler(async (event) => {
    return {
        channel
    }
})
