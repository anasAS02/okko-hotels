export const getStatus = (checkinDate, checkoutDate) => {
        
    const checkInDate = new Date(checkinDate);
    const checkOutDate = new Date(checkoutDate);

    const today = Date.now();
    
    const Active = Math.floor(checkOutDate - today)  / (1000 * 60 * 60 * 24);
    const Upcoming = Math.floor(checkInDate - today)  / (1000 * 60 * 60 * 24);
    const Completed = Math.floor(checkOutDate - today)  / (1000 * 60 * 60 * 24);

    let status;

    if(Active >= 0){
        status = 'Active';
    }
    
    if(Upcoming > 0){
        status = 'Upcoming';
    }
    
    if(Completed <= 0){
        status = 'Completed';
    }

return status;
}