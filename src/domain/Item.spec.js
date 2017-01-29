import Item from './Item'
import { expect } from 'chai';
import _ from 'lodash'

describe('Item:', () => {

  let mockDb = (() => {
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
      }
    }
  })();

  let createNewItem = () => (new Item(mockDb).new())
  let createNewCategory = (category) => {
    let item = createNewItem();
    item.type = 'category'
    item.category_name = category;
    return item
  }

  let itemNew;
  beforeEach(() => {
    itemNew = createNewItem();
    itemNew.text = 'hi!';
  })

  describe('New Item', () => {

    it('should be in state new', () => {
      expect(createNewItem().isNew).to.equal(true);
    })

    it('should get text', () => {
      expect(itemNew.text).to.equal('hi!');
      expect(itemNew.state).to.equal('dirty');
    })

    describe('Save:', () => {

      let saveId;
      beforeEach((done) => {
        saveId = itemNew.save().then(() => {done()})
      })

      it('should save', () => {
        expect(itemNew.state).to.equal('saved');
        expect(saveId).to.not.be.undefined;
      })
    })


  })

  describe('Load Item', () => {

    let itemId;
    let itemLoaded;
    beforeEach((done) => {
      itemNew.save().then((id) => {
        itemId = id
        itemLoaded = new Item(mockDb);
        itemLoaded.load(itemId).then(() => {
          done()
        });
      });


    })

    it('should be in state loading', () => {
      expect(itemLoaded.state).to.equal('loaded');
    })

    it('should be not new', () => {
      expect(itemLoaded.isNew).to.equal(false)
    })

    it('should load item data', () => {
      expect(itemLoaded.text).to.equal('hi!');
      expect(itemLoaded.id).to.equal(itemId);
    });
  })

  describe('category item', () => {
    it('should load items according to category', () => {
      let item1 = createNewItem();
      item1.text = 'some item'
      item1.hashtags.add('necklace')
      item1.save();
      let itemCategory = createNewCategory('necklace');
      let loadedItems = itemCategory.loadItems();
      expect(loadedItems.length).to.equal(1);
      expect(loadedItems[0].text).to.equal('some item')
      expect(loadedItems[0].hashtags.all()).to.deep.equal(['necklace'])
      let item2 = createNewItem();
      item2.text = 'some other item'
      item2.hashtags.add('necklace')
      item2.save();

      expect(itemCategory.loadItems().length).to.equal(2);
    })
  })

})