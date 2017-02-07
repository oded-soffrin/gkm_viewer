import _ from 'lodash'

export default (() => {
  let arrDb = [];

  return {
    getNextId: () => (arrDb.length),
    insert: (item) => {
      return Promise.resolve(arrDb.push(item));
    },
    get: (itemId) => {
      return Promise.resolve(arrDb[itemId]);
    },
    getItemsByHashtag: (hashtag) => {
      return _.filter(arrDb, (i) => {
        return ((i.hashtags || []).indexOf(hashtag) >= 0)
      })
    },
    reset: () => { arrDb = [] }
  }
})();

