import {Item, Category} from './Item'
import inMemoryDB from '../api/inMemoryDb'

let db = inMemoryDB

describe('Item:', () => {

  /* Todo

  6) item - get ID only when saving, move update() into Item
  7) figure out <Input /> 3 usages ... (update item need to be simpler)



  8) add item to category - action & reducer
  9) display items by category


  - GKM flow
  11) create viewer endpoint (non secure)
  12) create login (easiest - fb?)
  13) create secure endpoint (post login)

  - Urban Raven flow
  11) integrate existing etsy listings (w/o data migration)
  12) think about switching gkm metadata to item collection
  13) create a collection and display on site
  14) migrate existing etsy categories (can do with migration, will handle new items as they come along)

   *) replace DB to mongo (think about urban & gkm general)
  */

  //driver
  let createNewItem = () => (new Item(db).new())
  let createNewCategory = (category) => {
    let item = new Category(db).new()
    item.text = category;
    return item
  }

  //test
  let itemNew;
  beforeEach(() => {
    itemNew = createNewItem();
    itemNew.text = 'hi!';
  })

  afterEach(() => {
    db.reset();
  })

  describe('New Item', () => {

    it('should be in state new', () => {
      expect(createNewItem().isNew).toEqual(true);
    })

    it('should get text', () => {
      expect(itemNew.text).toEqual('hi!');
      expect(itemNew.state).toEqual('dirty');
    })

    describe('Save:', () => {

      let saveId;
      beforeEach(async (done) => {
        saveId = await itemNew.save();
        done()
      })

      it('should save', () => {
        expect(itemNew.state).toEqual('saved');
        expect(saveId).toBeDefined()
      })
    })


  })

  describe('Load Item', () => {

    let itemId;
    let itemLoaded;
    beforeEach(async (done) => {
      await itemNew.save().then((id) => {
        itemId = id
        itemLoaded = new Item(db);
        return itemLoaded.load(itemId)
      });
      done()
    })

    afterEach(() => {
      db.reset();
    })

    it('should be in state loading', () => {
      expect(itemLoaded.state).toEqual('loaded');
    })

    it('should be not new', () => {
      expect(itemLoaded.isNew).toEqual(false)
    })

    it('should load item data', () => {
      expect(itemLoaded.text).toEqual('hi!');
      expect(itemLoaded.id).toEqual(itemId);
    });
  })

  describe('category item', () => {
    it('should load items according to category', () => {

      db.reset()
      let item1 = createNewItem();
      item1.text = 'some item'
      item1.hashtags.add('necklace')
      item1.save();
      let itemCategory = createNewCategory('necklace');
      let loadedItems = itemCategory.loadItems();
      expect(loadedItems.length).toEqual(1);
      expect(loadedItems[0].text).toEqual('some item')
      expect(loadedItems[0].hashtags.all()).toEqual(['necklace'])
      let item2 = createNewItem();
      item2.text = 'some other item'
      item2.hashtags.add('necklace')
      item2.save();

      expect(itemCategory.loadItems().length).toEqual(2);
    })
  })

})