import {useCallback, useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {setCourses} from "../store/courses/actions";

export const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const setCourse = useCallback(() => {
        dispatch(setCourses(data))
    }, [dispatch,data]);
    useEffect(() => {
        setLoading(true)
        fetch(url, {
            method: 'GET',
            headers: {
                'accept': 'application/json'
            }
        })
            .then(res => res.json())
            .then(body => {
                setData(body)
                setLoading(false)
            })
            .catch(() => {
                setLoading(false)
            })

        return () => setData([]);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url])
    useEffect(() => {
        if(data.length!==0){
            setCourse()
        }

    },[data,setCourse])
    return {
        data,
        loading
    }

};

