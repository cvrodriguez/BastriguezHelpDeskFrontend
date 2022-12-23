import { createSlice } from '@reduxjs/toolkit'

type Comment = {
    id:number,
    comment: string,
    createdAt: Date,
    updatedAt:Date
}
interface CommentState {
    commentList: Comment[],
    commentDetail: Comment | null 
}


const initialState: CommentState = {
    commentList: [],
    commentDetail: null
}

export const commentSlice = createSlice({
    name: 'comment',
    initialState,
    
    reducers: {

        

    }
})