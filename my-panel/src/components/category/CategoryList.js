import React, { useEffect, useState } from 'react'
import Loding from '../../custom-components/Loding';


export const CategoryList = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    //Class Coponent => ComponentDidMount => call api
    //Function Component => useEffect => DidMount => call api
    useEffect(() => {
        //DidMount
        getCategories();
    }, [])

    const getCategories = () => {
        const apiUrl = 'https://apitester.ir/api/Products';
        fetch(apiUrl)
            .then(response => response.json())
            .then(
                (data) => {
                    console.log(data, "ddddddd");
                    setItems(data);
                    setIsLoading(false)

                },
                (error) => {
                    alert('error');
                    setIsLoading(false)

                },
                //finally - تو هر شرایطی کدهای این بخش اجرا می شود
                    
            )
    }

    return (
        <div className="card">
            <div className="card-header">گروه بندی محصولات</div>
            <div className="card-body">
                <div className="row">
                    <div className="col">
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">تعداد:</th>
                                    <th scope="col">نام:</th>
                                    <th scope="col">قیمت محصول:</th>

                                </tr>
                            </thead>
                            <tbody>
                                {isLoading ? <Loding/>
                            
                                :
                                items.map((item) =>
                                    <tr key={item.productId}>
                                        <th scope="row">{item.productId}</th>
                                        <td>{item.categoryName}</td>
                                        <td>{item.unitPrice}ریال</td>


                                    </tr>
                                )}


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
