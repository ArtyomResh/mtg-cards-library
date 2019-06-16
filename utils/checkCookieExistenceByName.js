export default (name) => document.cookie.split(';').filter((item) => item.trim().startsWith(`${name}=`)).length
