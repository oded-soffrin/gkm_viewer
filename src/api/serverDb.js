// import _ from 'lodash'

// export default (() => {


//   let runningidx = (arrDb.length > 0 ? arrDb[arrDb.length-1].id : 0) + 1;
//   return {
//     loadAll: () => (Promise.resolve(arrDb)),
//     nextIdWilBe: () => (runningidx),
//     getNextId: () => (runningidx++),
//     insert: (item) => {
//       item.id = runningidx++;
//       arrDb.push(item)
//       return Promise.resolve(item);
//     },
//     get: (itemId) => {
//       return Promise.resolve(arrDb[itemId]);
//     },

//     delete: (itemId) => {
//       arrDb = _.filter(arrDb, (item) => (itemId !== item.id))
//     },
//     update: (updatedItem) => {
//       arrDb = _.map(arrDb, (item) => {
//         return (updatedItem.id === item.id ? updatedItem : item)
//       })
//     },
//     getItemsByHashtag: (hashtag) => {
//       return _.filter(arrDb, (i) => {
//         return ((i.hashtags || []).indexOf(hashtag) >= 0)
//       })
//     },
//     reset: () => { arrDb = []; runningidx = 0; saveDb()}
//   }
// })();

