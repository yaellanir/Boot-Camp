function tellFortune(jobTitle, location, partnerName, numberOfChildren) {
  return `you will be a ${jobTitle} in ${location} married to ${partnerName} with ${numberOfChildren} children.`;
}

let yourFortune = tellFortune("musician", "dublin", "steven", 3);
console.log(yourFortune);
