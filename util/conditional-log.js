export const conditionalLog = (logMessage) => {

    if (process.env['SHOW_ALL_LOGS'] == 1) {
        console.log(logMessage);
    }

}