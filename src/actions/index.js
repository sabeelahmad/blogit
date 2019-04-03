// Blog creation action creator
// Arguments: Blog title, Blog body
// Payload : Blog object
export const createBlog = (title, body) => {
    return {
        type: 'CREATE_BLOG',
        payload: {
            title,
            body
        }
    }
}