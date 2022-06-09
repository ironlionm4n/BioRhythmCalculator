import dayjs from "dayjs"

export const formatDate = (dateISOString) => {
    return dayjs(dateISOString).format("D MMM YYYY")
}