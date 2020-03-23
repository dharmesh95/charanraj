export function modifyRecommendationsByVotes(recommendationData, voteData) {
  voteData.forEach(voteObj => {
    recommendationData.forEach(recommendationObj => {
      if (voteObj.recommendationId === recommendationObj.id) {
        recommendationObj.vote = voteObj.points;
      }
    });
  });
}
