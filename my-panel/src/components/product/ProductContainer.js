import React, { useState } from 'react'
import { ProductInfo } from './ProductInfo';
import { ProductList } from './ProductList';
import { v4 as uuidv4 } from 'uuid';
import swal from 'sweetalert'
// const { v4: uuidv4 } = require('uuid')
import { categories, products, emptyProduct } from '../../globalData/InitialData';
import { PageTitle } from '../../custom-components/PageTitle';
//const products = [{}, {}];
export const ProductContainer = () => {
    const [items, setItems] = React.useState(products);
    const [selectedItem, setSelectedItem] = useState({});


    const setEditMode = (id) => {
        const temp = [...items]
        const indexid = temp.findIndex(q => q.id == id)
        temp.forEach(q => {
            q.editMode = false
        });
        temp[indexid].editMode = true
        setItems([...temp])
        setSelectedItem(temp[indexid])

    }

    const saveItem = (item) => {
        const category = categories.find(q => q.id == item.categoryId)
        item = { ...item, categoryName: category.title, editMode: false }


        if (item.id == "") {
            item.id = uuidv4()
            const save = [...items, item]
            setItems([...save]);
            alert('add')
        } else {

            const temp = [...items]
            const indexid = temp.findIndex(q => q.id == item.id)
            temp[indexid] = item
            setItems([...temp])

            alert('edit')

        }
        setSelectedItem({ ...emptyProduct })

    }

    const remove = (id) => {
        swal({
            title: "آیا مطمانی؟",
            text: "در صورت حذف قابل بارگرذانی نمیباشد!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
            buttons:["انصراف","حدف"]
        })
            .then((willDelete) => {
                if (willDelete) {
                    setItems([...items.filter(q => q.id !== id)])
                    swal("پاک شد", {
                        icon: "success",
                    });
                } else {
                    swal("پاک نشد");
                }
            });
    }

    return (
        <>
        <PageTitle    title='لیست محصولات'/>
            <div className="card">
                <div className="card-header">مدیریت محصولات</div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-7">
                            <ProductList data={items} editMode={setEditMode} remove={remove} />
                        </div>
                        <div className="col-md-5">
                            {/* add or edit */}
                            <ProductInfo categories={categories} product={items.find(q => q.editMode === true)} save={saveItem} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
