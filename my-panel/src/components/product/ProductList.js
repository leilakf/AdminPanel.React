import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const ProductList = ({ data, editMode, remove }) => {
    let history = useNavigate()

    return (
        <table className="table table-striped table-bordered table-hover">
            <thead>
                <tr>
                    <th>کد</th>
                    <th>عنوان</th>
                    <th>گروه</th>
                    <th>قیمت</th>
                    <th>مدیریت</th>
                </tr>
            </thead>
            <tbody>
                {data.map(item =>
                    <tr className={item.editMode ? "selected-row" : "unselectet-row"} key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.categoryName}</td>
                        <td>{item.price}</td>
                        <td>
                            <button className='btn btn-sm btn-info ml-2' onClick={() => history(`/products/${item.id}`)}>مشاهده history</button>
                            <Link className='btn btn-sm btn-warning ml-2' to={`/products/${item.id}`}>link</Link>
                            <Link className='btn btn-sm btn-dark ml-2' to={`/products/info?id=${item.id}& title=${item.title}`}>query string</Link>
                            <button className="btn btn-warning btn-sm ml-2" onClick={() => editMode(item.id)}>ویرایش</button>
                            <button className="btn btn-danger btn-sm" onClick={() => remove(item.id)}>حذف</button>
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}
