import _ from 'lodash'

export default (() => {

  let localStroageHash = {}, _localStorage;
  try {
    _localStorage = localStorage
  } catch (e) {
    _localStorage = {
      getItem: (k) => (localStroageHash[k]),
      setItem: (k, v) => {localStroageHash[k] = v}
    }
  }


  let arrDb;
  try {
    arrDb = JSON.parse(_localStorage.getItem('gkm-db'))
    arrDb = arrDb || []
  } catch (e) {
    arrDb = []
  }

  const saveDb = () => {
    _localStorage.setItem('gkm-db', JSON.stringify(arrDb))

  }
  let runningidx = (arrDb.length > 0 ? arrDb[arrDb.length-1].id : 0) + 1;
  return {
    loadAll: () => (Promise.resolve(arrDb)),
    nextIdWilBe: () => (runningidx),
    getNextId: () => (runningidx++),
    insert: (item) => {
      item.id = runningidx++;
      arrDb.push(item)
      saveDb();
      return Promise.resolve(item);
    },
    get: (itemId) => {
      return Promise.resolve(arrDb[itemId]);
    },

    delete: (itemId) => {
      arrDb = _.filter(arrDb, (item) => (itemId !== item.id))
      saveDb();

    },
    update: (updatedItem) => {
      console.log('updating with', updatedItem);
      arrDb = _.map(arrDb, (item) => {
        return (updatedItem.id === item.id ? updatedItem : item)
      })
      saveDb();
    },
    getItemsByHashtag: (hashtag) => {
      return _.filter(arrDb, (i) => {
        return ((i.hashtags || []).indexOf(hashtag) >= 0)
      })
    },
    reset: () => { arrDb = []; runningidx = 0; saveDb()}
  }
})();

