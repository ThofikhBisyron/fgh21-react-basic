import React from "react";  
import { useState } from "react";
import "../assets/style.css"


function Form() {
    const [data, setData] = React.useState([
        {
            id : 1,
            name : "RS",
            age : 25,
            gender : "Laki-Laki",
            isSmoker : "yes",
            cigarVariant : ["Marlboro"],
        },
        {
            id : 2,
            name : "Pia",
            age : 25,
            gender : "Perempuan",
            isSmoker : "no",
            cigarVariant : ["Esse", "LuckyStrike"]
        },  
    ])

    

    function saveData(event){
        event.preventDefault()
        const name = event.target.name.value
        const age = event.target.age.value
        const gender = event.target.gender.value
        const isSmoker = event.target.smoker.value
        const cigarVariant = event.target.cigarVariant

        let CigarV = []
        cigarVariant.forEach((item) =>{
            if (item.checked) {
                CigarV.push(item.value)
            }   
        })
    //     const newData =[...data]
    if (name === "" || age === "" || gender === "" || isSmoker === "") {
        window.alert("Fill the form before submit")
       }

        setData([
            ...data,
            {
                id: Math.round(Math.random() *99),
                name,
                age,
                gender,
                isSmoker,
                cigarVariant : CigarV,
            }
        ])
      


    }


    return(
        <div className="bigform">  
            <form onSubmit={saveData}>
                <label>Siapa Nama Anda ?</label>
                <input type="text" name="name"/>
                <label>Berapa Umur Anda ?</label>
                <input type="text" name="age"/>
                <label>Apa Jenis Kelamin Anda ?</label>
                <div><input type="radio" name="gender" value="Laki-Laki"/>Laki-Laki
                    <input type="radio" name="gender" value="Perempuan"/>Perempuan
                </div>
                <label>Apakah Anda Perokok?</label>
                <div>
                    <input type="radio" name="smoker" value="Yes"/>Yes
                    <input type="radio" name="smoker" value="No"/>No
                </div>
                <label>Jika anda perokok, rokok apa yang pernah anda coba ?</label>
                    <div><input type="checkbox" name="cigarVariant" value="Gudang Garam"/>Gudang Garam</div>
                    <div><input type="checkbox" name="cigarVariant" value="Marlboro"/>Marlboro</div>
                    <div><input type="checkbox" name="cigarVariant" value="Lucky Strike"/>LuckyStrike</div>
                    <div><input type="checkbox" name="cigarVariant" value="Esse"/>Esse</div>
                <button type="submit">Submit</button>
            </form>
                <table>
                    <thead>
                        <tr>
                            <td>Nama</td>
                            <td>Umur</td>
                            <td>Jenis Kelamin</td>
                            <td>Perokok</td>
                            <td>Jenis Rokok</td>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) =>{
                            return (
                                <tr key={"survey-" + item.id}>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                                <td>{item.gender}</td>
                                <td>{item.isSmoker}</td>
                                <td>{item.cigarVariant.join(", ")}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>

        </div>
    )
}

export default Form