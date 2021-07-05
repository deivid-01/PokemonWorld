//Remove specific string and uppercase the result
export const removeAndUpper = (str_remove,str)=> {
    str = str.replace(str_remove,"")
    return str.toUpperCase();
  }
//Set the fisrt character to upperCase
export   const firstToUpper = (str) => str[0].toUpperCase()+str.substring(1,str.length)

export const splitAndUpper=(str,split_symbol=" ")=>{
  var str = str.split(split_symbol);
  var res=""
  str.forEach((item)=>{
    res += firstToUpper(item) +" "
    
  })

  return res.trim();
}
