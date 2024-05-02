import 'react-phone-input-2/lib/style.css'
import PhoneInput from 'react-phone-input-2'
import PatientCard from "./PatientCard";
import { useState } from "react";
import './form.css'

export default function PatientForm()
{
    let [name,setName]=useState(null);
    let [passport,setPassport]=useState(null);
    let [gender,setGender]=useState('Мужской');
    let [age,setAge]=useState(0);
    let [email,setEmail]=useState(null);
    let [password,setPassword]=useState(null);
    let [phone,setPhone]=useState(null);
    let [textareaFill,setTextAreaFill]=useState(null);
    let [repeatChecking,setRepeatChecking]=useState('Нет');
    let [typeOfInput,setTypeOfInput]=useState('password');

    function handleSubmit(e){
        e.preventDefault();
        setName(e.target.name.value);
        setPassport(e.target.passport.value);
        setGender(e.target.gender.value);
        setAge(e.target.age.value);
        setEmail(e.target.email.value);
        setPassword(e.target.password.value);
        setPhone(e.target.phone.value);
        setTextAreaFill(e.target.textareaFill.value);
        e.target.repeatChecking.checked ? setRepeatChecking('Да') : setRepeatChecking('Нет');
    }


    function typeChangeHandle(event){
        event.target.checked ? setTypeOfInput('text') : setTypeOfInput('password'); 
    }

    return(
        <>
        <form className='form' onSubmit={handleSubmit}>
                <label htmlFor="name" required>ФИО пациента:</label>  
                <input type="text" name='name' title='Only letters'required/>
                <label htmlFor="passport" required>Серия и номер паспорта: </label>      
                <input title='Only letters' type="text" name='passport'/>
                <label htmlFor="gender">Пол: </label>
                <select name="gender" defaultValue={gender}>
                    <option value="Мужской">Мужской</option>
                    <option value="Женский">Женский</option>
                </select>
                <label htmlFor="age">Возраст: </label>
                <input type="number" name="age"/>
                <label htmlFor="email" required>Email: </label>
                <input type="email" name="email"/>
                <label htmlFor="password">Пароль</label>
                <input name="password" type={`${typeOfInput}`} required/>
                <label>Показать пароль: <input onChange={typeChangeHandle} type="checkbox"/></label>
                <label>
                <span>Телефон: </span> 
                    <PhoneInput
                 country={'az'}
                 inputProps={{
                    name: 'phone',
                    required: true,
                    autoFocus: true
                  }}
                  inputStyle={{
                    background: "bisque",
                    border:"none",
                  }}
                  dropdownStyle={{
                    background:"bisque"
                  }}
                  buttonStyle={{
                    background:"bisque"
                  }}
                  searchStyle={{
                    background:"bisque"
                  }}
                />
                </label>
                <label htmlFor='textareaFill'>Описание симптомов: </label>
                <textarea name="textareaFill" cols="30" rows="10"></textarea>
                <label>Повторный прием: <input name="repeatChecking" type="checkbox"/></label>
                <button type='submit'>Отправить</button>
            </form>
            {name!=null && <PatientCard name={name} passport={passport} gender={gender} age={age} email={email} password={password} phone={phone} textareaFill={textareaFill} repeatChecking={repeatChecking}/>}
        </>
    )
}