'use strict';

module.exports = (data, connected) => {
  let message = data.toString().slice(0, -1).split(' ');
  if (message[0][0] === '@') {
    switch (message[0]) {
    case '@quit':
      return {command: 'close'};
    case '@list':
      return {command: 'list'};
    case '@nickname':
    }
  }
}