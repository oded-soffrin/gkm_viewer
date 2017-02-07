

import _ from 'lodash'

class ItemDto {

  constructor (dto) {
    dto = dto || {}
    this.text = dto.text;
    this.hashtags = dto.hashtags || [];
    this.id = dto.id;
  }
}


export class Item {
  constructor(db, config) {
    config = config || {}
    this.db = db;
    if (config.dto) {
      this._dto = config.dto;
    }
  }

  new () {
    this._dto = new ItemDto()
    this._state = 'new'
    this._dto.id = this.db.getNextId();
    return this;
  }

  load (id) {
    this._state = 'loading'
    return this.db.get(id).then((item) => {
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

}

export class Category extends Item {

  constructor(db, config) {

    super(db, config)
    this.type = 'category'
  }

  loadItems () {
    if (this.type !== 'category') {
      console.error('loading items from non category item')
    } else {
      let itemsDto = this.db.getItemsByHashtag(this.category_name);
      return _.map(itemsDto, (itemDto) => {
        return new Item(this.db, {dto: itemDto});
      });
    }
  }
}