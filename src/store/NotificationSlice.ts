import { StateCreator } from "zustand";
import { FavoriteSliceType } from "./FavoriteSlice";
import { HeroeSliceType } from "./HeroeSlice";

type Notification = {
    text:string,
    error:boolean,
    show:boolean
}

export type NotificationSliceType = {
    notification:Notification
    ShowNotification: ( payload: Pick< Notification, "text" |  "error">) => void
    NotificationHidden: () => void
}

export const CreateNotificationSlice: StateCreator<NotificationSliceType & HeroeSliceType & FavoriteSliceType, [], [], NotificationSliceType> = (set, get) => ({
    notification :{
        text:'',
        error:false,
        show:false
    },
    ShowNotification: (payload) => {
        set({
            notification:{
                text:payload.text,
                error:payload.error,
                show:true
            }
        })

        setTimeout(() => {
            get().NotificationHidden()
        }, 5000)
    },
    NotificationHidden: () => {
        set({
            notification:{
                text:'',
                error:false,
                show:false
            }
        })
    }
})