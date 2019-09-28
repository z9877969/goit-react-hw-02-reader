import React from 'react';
import Controls from '../Controls/Controls';
import Counter from '../Counter/Counter';
import Publication from '../Publication/Publication';
import items from '../../json/publications.json';
import style from './reader.module.css';

class Reader extends React.Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    index: 1,
  };

  handlerControlsBtn = ({ target }) => {
    const {
      dataset: { action },
    } = target;
    if (action === 'back') {
      this.setState(prev => ({
        index: prev.index - 1,
      }));
    } else if (action === 'forvard') {
      this.setState(prev => ({
        index: prev.index + 1,
      }));
    }
  };

  render() {
    const { index } = this.state;
    return (
      <div className={style.reader}>
        <Controls
          index={index}
          items={items}
          onControlsBtn={this.handlerControlsBtn}
        />
        <Counter items={items} index={index} />
        <Publication index={index} items={items} />
      </div>
    );
  }
}

export default Reader;
