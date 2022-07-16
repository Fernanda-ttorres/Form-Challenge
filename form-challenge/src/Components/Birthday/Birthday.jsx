import {React, useState} from 'react'

const Birthday = () => {
    const [Value, setValue] = useState("");
    const [Year, setYear] = useState("");

    const arrayDay = ["01","02","03","04","05","06","07","08","09",10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
    const arrayMonth = ["01","02","03","04","05","06","07","08","09",10,11,12]

    let arrayYear = [];

    for(let i=2022, j=0; i>1902; i--, j++){
        arrayYear[j]=i
    }

    return (
        <div>
            <label htmlFor="select-day">Day</label>
            <select name="select-day" className="select-day" placeholder="01" id="select-day">
                {arrayDay.map((rdm, i) => (
                <option key={i} value={rdm}>{rdm}</option>
                ))}
            </select>
            <label htmlFor="select-month">Month</label>
            <select name="select-month" className="select-month" placeholder="01" id="select-month">
                {arrayMonth.map((rdm, i) => (
                <option key={i} value={rdm}>{rdm}</option>
                ))}
            </select>
            <label htmlFor="select-year">Year</label>
            <select name="select-year" className="select-year" onChange={(e) =>setYear(2022 - e.target.selectedIndex)} onBlur={()=>setValue(Number(2022-Year))} id="select-year">
                {arrayYear.map((rdm, i) => (
                <option key={i} value={rdm}>{rdm}</option>
                ))}
            </select>
            <label htmlFor="age">Age</label>
            <input value={Value} placeholder="18" disabled id="age"></input>
        </div>
    )
}

export default Birthday