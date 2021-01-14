import axios from "axios";
import React, { useEffect, useState } from "react";
import { getStudent } from "../../api/product";
import { StudentInterface } from "../../interfaces/student.interface";


export default function HomePage(): JSX.Element {
    const [list, setList] = useState<StudentInterface[]>([]);
    useEffect(() => {
        getStudent().then((response) => {
            setList(response?.data);
        });
    }, [list]);
    const [name, setName] = useState('')
    const [mssv, setMssv] = useState('')
    const [file, setFile] = useState(null)
    function handleChangeName(e?: any) {
        console.log(e?.target.value);
        setName(e?.target.value)
        e?.preventDefault()
    }
    function handleChangeMssv(e?: any) {
        setMssv(e?.target.value)
        e?.preventDefault()
    }
    function handleSubmit(e?: any) {
        const formValue = {
            name: name,
            mssv: mssv,
            image:file
        }
        axios.post('http://localhost:4000/students', formValue)
            .then(res => console.log(res.data));
        setName('');
        setMssv('');
        e?.preventDefault();
    }
    function handleSelectedFile(e?:any){
        setFile(e?.target.value)
    }
    return (
        <div style={{ marginTop: 10 }}>
            <h3>Add New Person</h3>
            <form action="" onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="form-group">
                    <label>Person Name: </label>
                    <input type="text" className="form-control"
                        value={name}
                        onChange={handleChangeName}
                    />
                </div>
                <div className="form-group">
                    <label>Ma Sinh Vien: </label>
                    <input type="text" className="form-control" value={mssv}
                        onChange={handleChangeMssv} />
                </div>
                <form action="/uploadfile" encType="multipart/form-data" method="POST">
                    <input type="file" name="myFile" onChange={handleSelectedFile} />
                </form>
                <div className="form-group">
                    <input type="submit" value="submit" className="btn btn-primary" />
                </div>
            </form>
            <div className="imgae">
                image
                {
                    list?.map((item) => {
                        return <img src={item?.image} alt=""/>
                    })
                }
            </div>
        </div>
    );
}
