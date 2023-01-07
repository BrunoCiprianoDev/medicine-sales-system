export  const GetDateNow = () => {
    const date = new Date();
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes()
    return (
      day + '/' + month + '/' + year +
      '(' + hours + ':' + (minutes < 10 ? '0' + minutes : minutes) + ')'
    )
  }
  
export const SimpleDataFormat = (timestamp) => {
    const date = new Date(timestamp);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return (
      day + '/' + month + '/' + year
    )
  }
  
export const CompleteDataFormat = (timestamp) => {
    const date = new Date(timestamp);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes()
    return (
      day + '/' + month + '/' + year +
      '(' + hours + ':' + (minutes < 10 ? '0' + minutes : minutes) + ')'
    )
}

 
