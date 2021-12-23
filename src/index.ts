import { GameInfo } from './types'

const getQuestionBoxes = () => {
  const questionBoxes = document.querySelectorAll(".StudentAnswerOptions");

  if (!questionBoxes) {
    throw new Error("Can't find the question box element!");
  };

  return questionBoxes;
};

const getGameData = async (gameCode: string) => {
    const response = await fetch(`https://quizlet.com/webapi/3.2/game-instances?filters={"gameCode":${gameCode},"isInProgress":true,"isDeleted":false}&perPage=500`)
    const data: GameInfo = await response.json();

    return data
}

(async () => {
    alert(`Created by glizzz_y \n\nPress E to auto answer!`);

    const gameCode = prompt('Enter Game Code: ');

    const gameData = await getGameData(gameCode);

    const itemId = gameData.responses[0].models.gameInstance[0].itemId;

    fetch('https://quizlet.com/' + itemId).then(e => e.text()).then(t => console.log(t));
})();