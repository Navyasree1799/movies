const secondsToHrMin = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);

    const formattedHours = hours > 0 ? `${hours}HR ` : "";
    const formattedMinutes = minutes > 0 ? `${minutes}MIN` : "";

    return formattedHours + formattedMinutes;
};

export default secondsToHrMin