import {Item, Category} from './Item'
import { expect } from 'chai';
import inMemoryDB from '../api/inMemoryDb'


describe('Item:', () => {

  /* Todo
  2) use in redux (admin)
  3) test add items and displaying them (e2e)
  4) add item  - action & reducer
  6) items display
  7) add category item - action & reducer
  7.5) display categories
  8) add item to category - action & reducer
  9) display items by category
  10) replace DB to mongo (think about urban & gkm general)

  - GKM flow
  11) create viewer endpoint (non secure)
  12) create login (easiest - fb?)
  13) create secure endpoint (post login)

  - Urban Raven flow
  11) integrate existing etsy listings (w/o data migration)
  12) think about switching gkm metadata to item collection
  13) create a collection and display on site
  14) migrate existing etsy categories (can do with migration, will handle new items as they come along)

  */

  //driver
  let createNewItem = () => (new Item(inMemoryDB).new())
  let createNewCategory = (category) => {
    let item = new Category(inMemoryDB).new()
    item.category_name = category;
    return item
  }

  //test
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
        itemLoaded = new Item(inMemoryDB);
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

      inMemoryDB.reset()
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