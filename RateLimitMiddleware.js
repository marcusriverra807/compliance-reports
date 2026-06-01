// Updated retry logic
function retryLogic() {
    // Implement exponential backoff with jitter
    let retries = 0;
    const maxRetries = 5;
    const maxBackoff = 10000; // 10 seconds

    while (retries < maxRetries) {
        const backoff = Math.min(maxBackoff, Math.pow(2, retries) * 1000 + Math.random() * 1000);
        // Retry logic here
        retries++;
    }
}