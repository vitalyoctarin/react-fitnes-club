import {Button, Form} from "react-bootstrap";
import React, {useState} from "react";
import axios from "axios";

const ContactForm = props => {

    const changeDataHandler = (props) => {
        const id = props.target.id

        if(id === 'name')
            setName(props.target.value)
        if(id === 'phone')
            setPhone(props.target.value)
        if(id === 'date')
            setDate(props.target.value)
    }

    const submitHandler = event => {
        event.preventDefault()
        console.log(name,phone,date)
        axios.post('http://127.0.0.1:8000/api/fitnes_club_api',
            {
                'full_name':name,
                'phone_number':phone,
                'dob':date,
                'service_id':1,
            })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
        setDate('')
        setName('')
        setPhone('')
    }

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [date, setDate] = useState('')

    return (
        <div className="form">
            <h1>Свяжитесь с нами</h1>
            <Form onSubmit={submitHandler}>
                <Form.Group>
                    <Form.Label>Ваше имя</Form.Label>
                    <Form.Control type="text" id='name' placeholder="Введите Ваше имя" onChange={changeDataHandler} value={name} required/>
                    {/*<Form.Text className="text-muted">*/}
                    {/*    We'll never share your email with anyone else.*/}
                    {/*</Form.Text>*/}
                    <Form.Label>Ваш номер телефона</Form.Label>
                    <Form.Control type="phone" id='phone' placeholder="Введите Ваш номер телефона" onChange={changeDataHandler} value={phone} required/>
                    <Form.Label>Ваша дата рождения</Form.Label>
                    <Form.Control type="date" id='date' placeholder="Введите Вашу дату рождения" onChange={changeDataHandler} value={date} required/>
                </Form.Group>
                <Button type="submit" className="form-control">Отправить</Button>
            </Form>
        </div>
    )
}

export default ContactForm
