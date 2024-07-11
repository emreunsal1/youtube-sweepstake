export const startSweepStak = (comments, rules) => {
  const filteredComments = filterComments(comments, rules);
  if(!filteredComments.length){
    window.alert('Bu Koşullara uygun kullanıcı bulunamadı lütfen ayarları gözden geçiriniz');
    return;
  }
  const result = selectRandomUser(filteredComments, rules);
  const winner = result.slice(0, rules.winnerCount);
  const spare = result.slice(rules.winnerCount, result.length);

  return { winner, spare };
};

const filterComments = (comments, rules) => {
  let filteredComments = [...comments];

  if (rules.containsWord && rules.containsWord.length) {
    filteredComments = comments.filter((command) => 
      rules.containsWord.some((word) => command.textOriginal.includes(word))
    );
  }
  if (rules.uniqueUsers) {
    const uniqueUsersMap = new Map(filteredComments.map((item) => [item.authorDisplayName, item]));
    filteredComments = Array.from(uniqueUsersMap,([name, value])=>(value));
  }

  if (rules.uniqueComments) {
    const uniqueCommentsMap = new Map(filteredComments.map((item) => [item.id, item]));
    filteredComments = Array.from(uniqueCommentsMap,([name, value])=>(value));
    
  }
  return filteredComments;
};

const selectRandomUser = (comments, rules) => {
  const { winnerCount, spareCount } = rules;
  const randomNumbers = generateRandomNumber(winnerCount + spareCount, comments.length);
  const selectedUsers = randomNumbers.map((number) => comments[number]);
  return selectedUsers;
};

const generateRandomNumber = (count, limit) => {
  const uniqueNumbers = new Set();

  while (uniqueNumbers.size < count) {
    const randomNumber = Math.floor(Math.random() * limit);
    uniqueNumbers.add(randomNumber);
    if(count > limit && Array.from(uniqueNumbers).length == limit){
      break;
    }
  }

  return Array.from(uniqueNumbers);
};

export default startSweepStak;