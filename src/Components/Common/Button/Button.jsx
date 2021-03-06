import React from "react";
import style from "./Button.module.css"

//Компонент, который отдает разные кнопки в зависимости от типа в пропсах

const Button = (props) => {

    switch (props.type ) {
        case 'login':
            return (
                <button className={style.loginButton}>Войти</button>
            )
        case 'logout':
            return (
                <button className={style.logoutButton} onClick={props.logout}>Выйти</button>
            )
        case 'send':
            return (
                <button className={style.send}>Отправить</button>
            )
        case 'follow':
            return (
                <button className={style.followButton} onClick={props.onClick} disabled={props.disabled}>Подписаться</button>
            )
        case 'unfollow':
            return (
                <button className={style.followButton} onClick={props.onClick} disabled={props.disabled}>Отписаться</button>
            )
        case 'avatarChange':
            return (
                <div className={style.inputWrapper}>
                <input className={style.inputFile} type={'file'} id='inputFile' onChange={props.onMainPhotoSelected}/>
                    <label htmlFor="inputFile" className={style.inputFileButton}>
                        <span className={style.inputFileButtonText}>Выберите файл</span>
                    </label>
                </div>
            )
        case 'profileDataChange':
            return (
                <button className={style.profileDataChange} onClick={props.toEditMode}>Редактировать профиль</button>
            )
        case 'saveProfileDataChange':
            return (
                <button className={style.saveProfileDataChange}>Сохранить</button>
            )
        default:
            return (
                <button className={style.button}>Button</button>
            )

    }
}

export default Button;