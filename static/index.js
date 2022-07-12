import browserEnv from 'browser-env';
browserEnv(['navigator']);
const success=(position)=>{
console.log(position);
}
const error=()=>{
console.log("error");
}
navigator.geolocation.getCurrentPosition(success,error);
fs.writeFileSync('../output.txt',position,(position)={
});