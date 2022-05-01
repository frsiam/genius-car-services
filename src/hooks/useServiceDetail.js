import { useEffect, useState } from "react"

const useServiceDetail = (serviceId) => {

    const [service, setService] = useState([])

    useEffect(() => {
        fetch(`https://polar-badlands-98264.herokuapp.com/service/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [serviceId])

    return [service]
}

export default useServiceDetail;
