const promise1 = () => new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 100);
 });
 
 async function exampleAsync() {
    const value1 = await promise1();
    console.log("waited for the value to be ready", value1);
 
    return value1;
 }
 
 exampleAsync();



// ---
const mockAPI = (returnValue) => (arg, cb) => {
    setTimeout(() => cb(returnValue), 2000);
};

const fetchSession = mockAPI({ id: "123765" });
const fetchUser = mockAPI({ firstname: "Bob" });
const fetchUserFavorites = mockAPI([ "lions", "tigers", "bears" ]);

const runAsync = async () => {
    try {
        const session = await fetchSession("session-id");
        const user = await fetchUser(session);
        const favorites = await fetchUserFavorites(user);
        console.log(favorites);
    } catch (error) {
        console.log("oops!");
    }
}