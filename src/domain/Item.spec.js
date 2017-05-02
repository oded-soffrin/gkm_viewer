import {Item, Category, EtsyProductItem} from './Item'
import inMemoryDB from '../api/inMemoryDb'

let db = inMemoryDB

let etsyListingExample =
  {"_id":{"$oid":"58667175352165ae08ee0682"},
    "listing_id":466072455,
    "state":"active",
    "category_id":69151567,
    "title":"Silver Short Necklace,Silver Charm,Dainty Necklace,Mountain Necklace,Geometric Chevron Necklace, Bridal Jewelry, Geometric Jewelry",
    "description":"Silver plated short geometric necklace \n\nA Unique geometric design that will fit any special occasion\n\n\n► Perfect as a Bridesmaids Gift or Bridal Jewelry\n\n► Will be great as a mother day gift for the holidays.\n     or as a present for your wife and sister\n\n\n►ITEM INFO\n\nPendant length: 2.5 cm \\ 1&quot;\n\nPendant width: 3 cm \\ 1.2&quot;\n\nNecklace  length: 44 cm \\ 17.3&quot;\n\n(Added extension 3.5 cm \\ 1.4&quot; )\n\nBrass base\n\nPure silver plated geometric necklace \n\n►Each jewelry comes in an elegant box.\n\n* Worldwide shipping\n\n\n► You may also like:\n\nhttps://www.etsy.com/il-en/listing/465566483/gold-dangle-earrings-diamond-shape\n\n\n►For more items please visit my shop:\n\nhttps://www.etsy.com/il-en/shop/UrbanRaven\n\n\n\n► CUSTOM ORDER:\n\n     If you wish to have your own wish or any kind of custom orders I will be happy to make it for you!\n\n\nThank you for your visit,hope to see you again!\n\nShiran",
    "creation_tsz":1482351136,
    "ending_tsz":1492801936,
    "original_creation_tsz":1468513832,
    "last_modified_tsz":1482441196,
    "price":"39.00",
    "currency_code":"USD",
    "quantity":10,
    "tags":["Bridal Jewelry", "Simple jewelry", "Geometric jewelry", "gift for her", "special occasion", "Geometric necklace", "Bridal necklace", "Chevron Necklace", "Silver Charm", "Dainty Necklace", "Mountain Necklace", "Silver Necklace", "Diamond shape"],
    "category_path":["Jewelry", "Necklace"],
    "category_path_ids":[68887482, 69151567],
    "materials":["Brass", "Pure silver plating"],
    "shop_section_id":19527938,
    "state_tsz":1482351036,
    "url":"https://www.etsy.com/listing/466072455/silver-short-necklace-silver-charm?utm_source=etsyup&utm_medium=api&utm_campaign=api",
    "views":49,
    "num_favorers":11,
    "shipping_template_id":32951064262,
    "processing_min":5,
    "processing_max":10,
    "when_made":"2010_2016",
    "item_weight":null,
    "is_private":false,
    "recipient":null,
    "occasion":null,
    "style":["Minimalist", "Modern"],
    "has_variations":false,
    "images":[
      {"listing_image_id":1055284835, "hex_code":"7E827C", "red":126, "green":130, "blue":124, "hue":100, "saturation":4, "brightness":50, "is_black_and_white":false, "creation_tsz":1468513832, "listing_id":466072455, "rank":1, "url_75x75":"https://img1.etsystatic.com/118/0/8100854/il_75x75.1055284835_sn9w.jpg", "url_170x135":"https://img1.etsystatic.com/118/0/8100854/il_170x135.1055284835_sn9w.jpg", "url_570xN":"https://img1.etsystatic.com/118/0/8100854/il_570xN.1055284835_sn9w.jpg", "url_fullxfull":"https://img1.etsystatic.com/118/0/8100854/il_fullxfull.1055284835_sn9w.jpg", "full_height":1125, "full_width":1500},
      {"listing_image_id":1008759718, "hex_code":"876854", "red":135, "green":104, "blue":84, "hue":24, "saturation":37, "brightness":52, "is_black_and_white":false, "creation_tsz":1468513832, "listing_id":466072455, "rank":2, "url_75x75":"https://img0.etsystatic.com/120/0/8100854/il_75x75.1008759718_27ei.jpg", "url_170x135":"https://img0.etsystatic.com/120/0/8100854/il_170x135.1008759718_27ei.jpg", "url_570xN":"https://img0.etsystatic.com/120/0/8100854/il_570xN.1008759718_27ei.jpg", "url_fullxfull":"https://img0.etsystatic.com/120/0/8100854/il_fullxfull.1008759718_27ei.jpg", "full_height":1227, "full_width":1500},
      {"listing_image_id":1055284759, "hex_code":"8C8F8B", "red":140, "green":143, "blue":139, "hue":105, "saturation":2, "brightness":56, "is_black_and_white":false, "creation_tsz":1468513832, "listing_id":466072455, "rank":3, "url_75x75":"https://img1.etsystatic.com/120/0/8100854/il_75x75.1055284759_ed94.jpg", "url_170x135":"https://img1.etsystatic.com/120/0/8100854/il_170x135.1055284759_ed94.jpg", "url_570xN":"https://img1.etsystatic.com/120/0/8100854/il_570xN.1055284759_ed94.jpg", "url_fullxfull":"https://img1.etsystatic.com/120/0/8100854/il_fullxfull.1055284759_ed94.jpg", "full_height":1125, "full_width":1500},
      {"listing_image_id":1008759698, "hex_code":"7D6659", "red":125, "green":102, "blue":89, "hue":22, "saturation":28, "brightness":49, "is_black_and_white":false, "creation_tsz":1468513832, "listing_id":466072455, "rank":4, "url_75x75":"https://img0.etsystatic.com/110/0/8100854/il_75x75.1008759698_od6w.jpg", "url_170x135":"https://img0.etsystatic.com/110/0/8100854/il_170x135.1008759698_od6w.jpg", "url_570xN":"https://img0.etsystatic.com/110/0/8100854/il_570xN.1008759698_od6w.jpg", "url_fullxfull":"https://img0.etsystatic.com/110/0/8100854/il_fullxfull.1008759698_od6w.jpg", "full_height":1130, "full_width":1500},
      {"listing_image_id":1055284829, "hex_code":"8B8E88", "red":139, "green":142, "blue":136, "hue":90, "saturation":4, "brightness":55, "is_black_and_white":false, "creation_tsz":1468513832, "listing_id":466072455, "rank":5, "url_75x75":"https://img1.etsystatic.com/115/0/8100854/il_75x75.1055284829_7uac.jpg", "url_170x135":"https://img1.etsystatic.com/115/0/8100854/il_170x135.1055284829_7uac.jpg", "url_570xN":"https://img1.etsystatic.com/115/0/8100854/il_570xN.1055284829_7uac.jpg", "url_fullxfull":"https://img1.etsystatic.com/115/0/8100854/il_fullxfull.1055284829_7uac.jpg", "full_height":1500, "full_width":1024}],
    "tweeted_at":1483110664,
    "name":"Mountain Dew",
    "twitterTitle": "My Twitter Title",
    "shortDescription" : "my short decription"
  }


describe('Item:', () => {

  /* Todo
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
      await itemNew.save().then((item) => {
        itemId = item.id
        itemLoaded = new Item(db);
        itemLoaded.load(itemId)
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

  describe('product item', () => {
    let ep;
    beforeEach(() => {
      ep = new EtsyProductItem(db).new()
      ep.listings.add(etsyListingExample)
    })


    it('should be dirty', () => {
      expect(ep.state).toEqual('dirty')
      expect(ep.type).toEqual('product')
    })

    it('should set multiple items', () => {
      expect(ep.listings.get(0)).toEqual(466072455)
      expect(ep.listings.getAll().length).toEqual(1)
      expect(ep.twitterTitle).toEqual('My Twitter Title')
      expect(ep.name).toEqual('Mountain Dew')
      expect(ep.shortDescription).toEqual('my short decription')

      ep.listings.add({listing_id: 2})
      expect(ep.listings.get(1)).toEqual(2)
      expect(ep.listings.getAll().length).toEqual(2)
      expect(ep.twitterTitle).toEqual('My Twitter Title')
      expect(ep.name).toEqual('Mountain Dew')
      expect(ep.shortDescription).toEqual('my short decription')
    })


    describe('db', () => {
      let eploaded;
      beforeEach(async (done) => {
        await ep.save().then((id) => {
          eploaded = new EtsyProductItem(db);
          eploaded.load(id)
        });
        done()
      })

      it('load', () => {
        expect(ep.twitterTitle).toEqual('My Twitter Title')
        expect(ep.name).toEqual('Mountain Dew')
        expect(ep.shortDescription).toEqual('my short decription')
      })
    })

  })
})
