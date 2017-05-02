
import _ from 'lodash'

class ItemDto {
  constructor (dto) {
    dto = dto || {}
    this.text = dto.text;
    this.hashtags = dto.hashtags || [];
    this.id = dto.id;
    this.type = dto.type
  }
}

class ProductItemDto extends ItemDto{
  constructor (dto) {
    dto = dto || {}
    super(dto)
    this.listings = dto.listings || []
  }
}


export class Item {
  constructor(db, config) {
    config = config || {}
    this.db = db;
    if (config.dto) {
      this._dto = _.cloneDeep(config.dto);
      this._state = 'loaded'
    } else {
      this._dto = new ItemDto()
    }
  }

  new () {
    this._dto = new ItemDto()
    this._state = 'new'
    this._dto.type = 'item'
    return this;
  }

  load (id) {
    this._state = 'loading'
    return this.db.get(id).then((item) => {
      if (!item) {
        throw 'item not found'
      }
      this._dto = new ItemDto(item)
      this._state = 'loaded'
      return this;
    })
  }

  get id () { return this._dto.id}

  save () {
    if (!this.db) {
      console.error('no db!')
    }
    this._state = 'saving';
    return this.db.insert(this._dto).then((item) => {
      this._state = 'saved'
      this._dto.id = item.id;
      return this;
    })
  }

  get state() {
    return this._state;
  }

  set state(val) {
    this._state = val
  }

  get isNew () {
    return (this.state == 'new')
  }

  set text (val) {
    this._state = 'dirty'
    this._dto.text = val
  }

  get hashtags () {
    return {
      add: (hashtag) => {
        this._state = 'dirty'
        this._dto.hashtags.push(hashtag)
      },
      all: () => {
        return this._dto.hashtags;
      }
    }
  }

  get text () {return this._dto.text}
  get dto () {return this._dto}

  get type () {
    return this._dto.type
  }

  static newTextItem(db, text) {
    let item = new Item(db).new()
    item.text = text;
    return item
  }

  static load(db, id) {
    let item = new Item(db)
    return item.load(id).then((loadedItem) => {
      return loadedItem
    })
  }

}

export class Category extends Item {

  constructor(db, config) {
    super(db, config)
    this.init()
  }

  init () {
    this._dto.type = 'category'
  }

  new () {
    super.new();
    this.init();
    return this;
  }

  setItems (items) {
    this.items = items
  }

  loadItems () {
    if (this.type !== 'category') {
      console.error('loading items from non category item', this._dto)
    } else {
      let itemsDto = this.db.getItemsByHashtag(this.text);
      return _.map(itemsDto, (itemDto) => {
        return new Item(this.db, {dto: itemDto});
      });
    }
  }

    static newCategory (db, category) {
    let cat = new Category(db).new()
    cat.text = category
    return cat
  }
}

export class ProductItem extends Item {

  getProductId (p) {
    return p.id
  }

  get listings() {
    return {
      add: (product) => {
        this._state = 'dirty'
        this._dto.twitterTitle = this._dto.twitterTitle || product.twitterTitle
        this._dto.name = this._dto.name || product.name
        this._dto.shortDescription = this._dto.shortDescription || product.shortDescription
        this._dto.listings.push(this.getProductId(product))
      },
      getAll: () => {
        return this._dto.listings
      },
      get: (idx) => {
        return this._dto.listings[idx]
      }
    }
  }

  get populatedListings () {
    return (this._listings || [])
  }
  populateListings(allListings) {
    this._listings = _.map(this._dto.listings, (listingId) => {
      return allListings[listingId]
    })
  }

  get twitterTitle () { return this._dto.twitterTitle}
  set twitterTitle (val) { this._dto.twitterTitle = val}
  get name () {return this._dto.name}
  set name (val) {this._dto.name = val}
  get shortDescription () {return this._dto.shortDescription}
  set shortDescription (val) {this._dto.shortDescription = val}

  new() {
    this._dto = new ProductItemDto()
    this._state = 'new'
    this._dto.type = 'product'
    return this;
  }

}

export class EtsyProductItem extends ProductItem {



  getProductId(p) {
    return p.listing_id
  }
}