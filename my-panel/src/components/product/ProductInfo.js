import React, { useDeferredValue, useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { products } from '../../globalData/InitialData';
import PropTypes from 'prop-types'
  
export  const ProductInfo = ({ categories, product, save }) => {
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm({ defaultValues: { ...product } });

    useEffect(() => {
        reset({ ...product })
    }, [product])


    const submitForm = data => {
        console.log(data);
        console.log(watch("id"));
        save(data)
    };
    return (
        <form  onSubmit={handleSubmit(submitForm)}>
            <input type="hidden" {...register("id")}/>
            {/* <div class="form-group">
                <label for="id">کد محصول</label>
                <input type="text"  {...register('id', { required: true })} className="form-control" />
                {errors.id && <small class="form-text text-danger">کد اجباری می باشد</small>}
            </div> */}
            <div class="form-group">
                <label for="title">عنوان محصول</label>
                <input type="text" {...register('title', { required: true, minLength: 3 })} className="form-control" />
                {errors.title && errors.title.type === "required" && <small class="form-text text-danger">عنوان اجباری می باشد</small>}
                {errors.title && errors.title.type === "minLength" && <small class="form-text text-danger">حداقل 5 کاراکتر</small>}
            </div>
            <div class="form-group">
                <label for="title">گروه محصول</label>
                <select  {...register('categoryId', { required: true })} className="form-control">
                    <option value="">انتخاب کنید</option>
                    {categories.map((item, index) => <option value={item.id}> {item.title}</option>


                    )}
                </select>
                {errors.categoryId && <small class="form-text text-danger">گروه اجباری می باشد</small>}
            </div>
            <div class="form-group">
                <label for="price">قیمت</label>
                <input type="text"  {...register('price', { pattern: /\d+/, required: true })} className="form-control" />
                {errors.price && errors.price.type === 'pattern' && <small class="form-text text-danger">مقدار عددی وارد کنید</small>}
                {errors.price && errors.price.type === 'required' && <small class="form-text text-danger">اجباری است</small>}
            </div>
            <button type="submit" class="btn btn-primary">ذخیره</button>
        </form>
    )
}
ProductInfo.propTypes ={
    categories: PropTypes.array,
    save: PropTypes.func,
    product: PropTypes.object
}

ProductInfo.defaultProps={
    categories:[],
    products:{}

}



  