const makeError = () => {
    let i = 1;
    while (i < 5){
        try {
            if (i%2 === 0){
                throw new Error("even number!");
            }
            console.log("Odd number");
        } catch (err) {
         
            console.error(err.message);
            
        }finally{
            console.log("finally");
            i++;
        }
    }
}
makeError();

function customError(message) {
    this.message = message;
    this.name = "customError";
    this.stack = `${this.message} : ${this.name}`;
}