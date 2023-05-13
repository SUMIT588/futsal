import { useDispatch, useSelector } from "react-redux"

import CardBox from "../../../../components/noticeCardBox/cardBox"
import { NoticeWrapper } from "./noticeStyled"
import { getUserNotice } from "../../../../store/slice/noticeSlice";
import { useEffect } from "react";

export const Notice = () =>{
  

    const {noticeData} = useSelector((state)=> state.noticeSlice)

    console.log(noticeData, 'notice')

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getUserNotice())
    },[])
    

    return(
        <NoticeWrapper>
            <h2>Notice</h2>
            {noticeData ? noticeData?.map((notice, i) => (
                <CardBox title = {notice.title} message = {notice.message} date = {notice.datePublished} />

            )) : 'Np notice' }
            
        </NoticeWrapper>
    )
    
}