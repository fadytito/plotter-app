import { useState } from "react";

export const useDataSource = () => {
    const [data, setData] = useState(null)
    const [status, setStatus] = useState('idle')
    const [error, setError] = useState(null);

    const fetchData = async (getDataFn) => {
        setStatus('loading')
        try{
            const responseData = await getDataFn()
            setData(responseData)
            setStatus('success')
        } catch(err) {
            setStatus('error')
            setError(err.message)
        }
    }

    const isIdle = status === 'idle'
    const isLoading = status === 'loading'
    const isSuccess = status === 'success'
    const isError = status === 'error'

    return {fetchData, data, setData, isIdle, isLoading, isSuccess, isError, error}
}