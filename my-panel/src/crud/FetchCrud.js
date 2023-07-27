import React, { useEffect, useRef, useState, } from 'react'
import { UserCombo } from '../custom-components/UserCombo'
import { getAllAsync, insert, insertAsync, removeAsync } from '../services/postService'
import { useLayoutEffect } from 'react'

export const FetchCrud = () => {
    const useTitleref = useRef()
    const useBodyRef = useRef()
    const [userId, setUserid] = useState()
    const [isLoding, setIsloging] = useState(false)
    const [posts, setPosts] = useState([])


    useEffect(async () => {
        const fetchPosts = async () => {
            const result = await getAllAsync();
            setPosts(result);
        }
      return  fetchPosts()
    }, [])


    const changeItem = (id) => {
        // alert(id)
        setUserid(id)
    }

    const save = async (event) => {
        event.preventDefault()
        setIsloging(true)
        const post = {
            title: useTitleref.current.value,
            body: useBodyRef.current.value,
            userId: userId

        }
        const result = await insertAsync(post)
        console.log("result", result)
        setIsloging(false)
    }

    const removeItem = async (id) => {
        const result = await removeAsync(id)
        if (result) {
            setPosts([...posts.filter(q => q.id != id)])
        }
    }



    return (
        <div className="card">
            <div className="card-header">مدیریت داده ها با Fetch</div>
            <div className="card-body">
                <div className="row">
                    <div className="col">
                        <form onSubmit={(event) => save(event)} >
                            <div class="form-group">
                                <label>عنوان : </label>
                                <input ref={useTitleref} type="text" class="form-control" />
                            </div>
                            <div class="form-group">

                                <UserCombo onChengeUser={changeItem} />
                            </div>
                            <div class="form-group">
                                <label>توضیح : </label>
                                <textarea ref={useBodyRef} className="form-control"></textarea>
                            </div>
                            <button type="submit" disabled={isLoding ? "disable" : ""} class="btn btn-primary">ذخیره</button>
                        </form>
                    </div>
                    <div className="col">
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">کد</th>
                                    <th scope="col">عنوان</th>
                                    <th scope="col">ایدی</th>
                                    <th scope="col">موضوع</th>
                                    <th scope="col"> </th>
                                </tr>
                            </thead>
                            <tbody>
                                {posts.map(item =>
                                    <tr key={item.id}>

                                        <td>{item.id}</td>
                                        <td>{item.title}</td>
                                        <td>{item.userId}</td>
                                        <td>{item.body}</td>
                                        <td>
                                            <button onClick={() => removeItem(item.id)} className="btn btn-info btn-sm">
                                                حذف
                                            </button>
                                        </td>
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
