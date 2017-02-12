
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
    this._dto.id = this.db.getNextId();
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
    this._state = 'saving';
    return this.db.insert(this._dto).then(() => {
      this._state = 'saved'
      return this.id;
    })
  }

  get state() {
    return this._state;
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