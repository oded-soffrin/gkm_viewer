import React from 'react';
import Input from '../Common/Input'
import _ from 'lodash'
import '../../styles/gkm-item.scss';


const Item = ({ item, updateItem, deleteItem }) => {

  const onAddingHashtag = (hashtag) => {
    item.hashtags.add(hashtag)
    updateItem(item)
  }

  const onUpdateField = (update) => {
    _.each(update, (v, k) => {
      item[k] = v;
    })
    updateItem(item);
  }

  return (
    <div className='gkm-item' id={item.id}>
      <div>{item.type}: {item.text}</div>
      <Input id={item.id} fld='text' title="update item" value={item.text} button={{ text: 'Update', action: (update) => { onUpdateField(update) } }} />
      <div className='hashtags'>
        <div>Hashtags:</div>
        {_.map(item.hashtags.all(), (hashtag) => (<div>{hashtag}</div>))}
        <Input title="add new hashtag" fld='hashtag' resetOnClick={true} button={{ text: 'ADD!', action: (hashtag) => { onAddingHashtag(hashtag.hashtag) } }} />
      </div>
      <button onClick={() => deleteItem(item.id)} > X </button>

    </div>
  )
};

/*
 Item.propTypes = {

};
*/

export default Item


