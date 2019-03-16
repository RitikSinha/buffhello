let genrateMsg = (from, text)=>{
  return {
    from ,
    text, 
    createdAt: new Date().getTime()
  };
};
module.exports={genrateMsg};