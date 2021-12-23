interface gameInstances {
    gameCode: number;
    itemId: number;
}

export interface GameInfo { 
    responses: [{
        models: {
            gameInstance: gameInstances[];
        }
    }];
}