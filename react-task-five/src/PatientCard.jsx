import { useEffect } from "react";
import React from "react";

function PatientCard({name,passport,gender,age,email,password,phone,textareaFill,repeatChecking})
{
    //буду хранить password здесь.Типо обычно он хранится в базе данных после отправки формы и 
    //представим что я его отправил в базу данных для дальнейшего login пользователем для просмотра инфы о своей карточке
    const savedPassword=password;

    console.log(savedPassword)

    return(
        <>
        <div className="card">
            <p>ФИО: {name}</p>
            <p>Серия и номер паспорта: {passport}</p>
            <p>Пол: {gender}</p>
            <p>Возраст: {age}</p>
            <p><a href={`mailto:${email}`}>Email: {email}</a></p>
            <p>Телефон: {phone}</p>
            <p>Описание симптомов: {textareaFill}</p>
            <p>Повторный прием: {repeatChecking}</p>
        </div>
        </>
    )
}

export default PatientCard