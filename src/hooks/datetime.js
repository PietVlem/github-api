export default function useDateTime(){
    function getDate(dateString) {
        const date = new Date(dateString);
        return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
    }

    return {
        getDate
    }
}
