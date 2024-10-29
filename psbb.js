const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Input the number of families : ", (numFam) => {
  rl.question(
    "Input the number of members in the family (separated by a space) : ",
    (numMembers) => {
      countBus(numFam, numMembers);
      rl.close();
    }
  );
});

const countBus = (numFam, numMembers) => {
  let totalMembers = 0;
  let busQuantity = 0;
  let membersArr = numMembers.split(" ");

  if (membersArr.length != numFam) {
    console.log("Input must be equal with count of family");
    rl.close();
  } else {
    membersArr.forEach((i) => {
      totalMembers += parseInt(i);
    });

    totalMembers % 4 == 0
      ? (busQuantity = totalMembers / 4)
      : (busQuantity = Math.floor(totalMembers / 4) + 1);

    console.log(busQuantity);
  }
};
