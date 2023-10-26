export const getStatus = (checkinDate, checkoutDate) => {
        
    const checkOutDate = new Date(checkoutDate);
        const checkInDate = new Date(checkinDate);
        const today = Date.now();
        const timeDifferenceToEnd = checkOutDate - today;
        const daysLeftToEnd = Math.floor(timeDifferenceToEnd / (1000 * 60 * 60 * 24));

        const timeDifferenceToStart = checkInDate - today;
        const daysLeftToStart = Math.floor(timeDifferenceToStart / (1000 * 60 * 60 * 24));

        let status;

        if(daysLeftToEnd > 0){
            status = 'Active';
        }
        
        if(daysLeftToStart > 0){
            status = 'Upcoming';
        }

        if(daysLeftToEnd < 0){
            status = 'Completed';
        }
    return status;
}