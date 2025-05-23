import React, { useContext, useState } from "react";

import "./CommentsTextArea.css";
import authContext from "../Context/AuthContext";
import { courseCommentType } from "../types/all.types";
export type courseCommentProps={
  comments:courseCommentType[]
  submitBtn:(newComment:string)=>void
}
export default function CommentsTextArea({comments,submitBtn}:courseCommentProps) {
  const auth=useContext(authContext)
  const[newComment,setNewComment]=useState<string>("")
  const changeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewComment(event.target.value);
  };
  
  return (
    <div className="comments">
      <div className="comments__header">
        <div className="comments__header-icon-content">
          <i className="comments__header-icon far fa-comment"></i>
        </div>
        <span className="comments__header-title">نظرات</span>
      </div>
      <div className="comments__content">
        {comments.length===0?(
          <div className="alert alert-warning">
            <p>هنوز کامنتی ثبت نشده است!</p>
          </div>
        ):(
          <>
          {comments.map(comment=>(
        <>
        <div className="comments__item">
          <div className="comments__question">
            <div className="comments__question-header">
                
              <div className="comments__question-header-right">

                <span className="comments__question-name comment-name">
                  {comment.creator.name}
                </span>
                <span className="comments__question-status comment-status">
                  {comment.creator.role==="ADMIN"?"مدیر":"کاربر"}
                </span>
                <span className="comments__question-date comment-date">
                  {comment.createdAt.slice(0,10)}
                </span>
              </div>
              <div className="comments__question-header-left">
                <a className="comments__question-header-link comment-link" href="#">
                  پاسخ
                </a>
              </div>
            
            </div>
            <div className="comments__question-text">
              <p className="comments__question-paragraph comment-paragraph">
                {comment.body}
              </p>
            </div>
          </div>
        </div>
        </>
        ))}
         <div className="comments__pagantion">
          <ul className="comments__pagantion-list">
            <li className="comments__pagantion-item">
              <a href="#" className="comments__pagantion-link">
                <i className="fas fa-long-arrow-alt-right comments__pagantion-icon"></i>
              </a>
            </li>
            <li className="comments__pagantion-item">
              <a href="#" className="comments__pagantion-link">
                1
              </a>
            </li>
            <li className="comments__pagantion-item">
              <a href="#" className="comments__pagantion-link">
                2
              </a>
            </li>
            <li className="comments__pagantion-item">
              <a
                href="#"
                className="comments__pagantion-link comments__pagantion-link--active"
              >
                3
              </a>
            </li>
          </ul>
        </div>
          </>
        )}
      
        
       
      </div>
        {auth.isLoggedIn?(
          <>
      <div className="comments__rules">
        <span className="comments__rules-title">قوانین ثبت دیدگاه</span>
        <span className="comments__rules-item">
          <i className="fas fa-check comments__rules-icon"></i>
          اگر نیاز به پشتیبانی دوره دارید از قسمت پرسش سوال در قسمت نمایش انلاین
          استفاده نمایید و سوالات مربوط به رفع اشکال تایید نخواهند شد
        </span>
        <span className="comments__rules-item">
          <i className="fas fa-check comments__rules-icon"></i>
          دیدگاه های نامرتبط به دوره تایید نخواهد شد.
        </span>
        <span className="comments__rules-item">
          <i className="fas fa-check comments__rules-icon"></i>
          سوالات مرتبط با رفع اشکال در این بخش تایید نخواهد شد.
        </span>
        <span className="comments__rules-item">
          <i className="fas fa-check comments__rules-icon"></i>
          از درج دیدگاه های تکراری پرهیز نمایید.
        </span>
      </div>
      <div className="comments__respond">
        <div className="comments__score">
          <span className="comments__score-title">امتیاز شما</span>
          <div className="comments__score-input">
            <span className="comments__score-input-text">
              امتیاز خود را انتخاب کنید
            </span>
            <i className="fas fa-angle-down	 comments__input-icon"></i>
          </div>
        </div>
        <div className="comments__respond-content">
          <div className="comments__respond-title">دیدگاه شما *</div>
          <textarea className="comments__score-input-respond" onChange={changeHandler} value={newComment}>
          </textarea>
        </div>
        <button type="submit" disabled={!newComment?.trim()} className="comments__respond-btn" onClick={()=>submitBtn(newComment.trim())}>
          ارسال
        </button>
      </div>
      </>

          ):(
            <div className="alert alert-warning">
              <p>برای ثبت کامنت باید لاگین کنید</p>
            </div>
          )}
</div>
    
  );
}