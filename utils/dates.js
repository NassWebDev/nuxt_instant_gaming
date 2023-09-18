    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');

    const formattedDate = `${year}-${month}-${day}`;

    const futureDate = new Date(currentDate.getFullYear() + 10, currentDate.getMonth(), currentDate.getDate());
    const yearFuture = currentDate.getFullYear() + 10;
    const monthFuture = String(currentDate.getMonth() + 1).padStart(2, '0');
    const dayFuture = String(currentDate.getDate()).padStart(2, '0');

    const formattedFutureDate = `${yearFuture}-${monthFuture}-${dayFuture}`;


export {
    formattedDate,
    formattedFutureDate
};