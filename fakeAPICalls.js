async function fetchMultipleData() {
    try {
        const p1 = new Promise((resolve) => {
            setTimeout(() => resolve('First API call successful!'), 1000);
        });

        const p2 = new Promise((resolve, reject) => {
            setTimeout(() => reject('Second API call failed!'), 2000);
        });

        const p3 = new Promise((resolve) => {
            setTimeout(() => resolve('Third API call successful!'), 3000);
        });

        const results = await Promise.allSettled([p1, p2, p3]);
        console.log(results);

    } catch (error) {
        console.log("Unexpected error:", error);
    } finally {
        console.log('Performed all API calls!');
    }
}

fetchMultipleData();