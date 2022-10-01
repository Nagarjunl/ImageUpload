import React, { Component ,useState, useEffect } from "react";
 
const  ImageUploadPreviewComponent = () => {
 
    var multipleFileObj = [];
    var multipleFileArray = [];
     
    const [multipleFile, setFile] = useState([]);
 
    const uploadMultipleFiles = (e) => {
        multipleFileObj.push(e.target.files)
        for (let i = 0; i < multipleFileObj[0].length; i++) {
            multipleFileArray.push(URL.createObjectURL(multipleFileObj[0][i]))
        }
        setFile(multipleFileArray)
    }

    console.log(multipleFile.length);
 
    const uploadFiles = (e)=> {
        e.preventDefault()
        console.log(multipleFile)
    } 

    return (
        <>
            <form>
                <div className="container">
                    <h1 className="mb-3"> Image Upload</h1>
                    <div className="form-group multi-preview">
                        <div className='row'>
                            {multipleFile.length != 0 && (multipleFile).map(url => (
                                <div className="col-md-2">
                                    <img  className='img-fluid' src={url} alt="..." />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="form-group">
                        <input type="file" className="form-control" onChange={uploadMultipleFiles} multiple/>
                    </div>
                    <button type="button" className="btn btn-danger btn-block" onClick={uploadFiles}>Upload</button>
                </div>
            </form >
        </>
    )
       
}



export default ImageUploadPreviewComponent;

