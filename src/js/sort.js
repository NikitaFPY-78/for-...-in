export default function orderByProps(obj, [first, second]) {
  const result = [];
  const keys = Object.keys(obj).sort(); // получаем все ключи и сортитуем их

  for (let i = 0; i < keys.length; i += 1) { // ищем ключи согласно заданию (name, level)
    if (keys[i] === first) {
      result.unshift({ key: keys[i], value: obj[keys[i]] });
    } if (keys[i] === second) {
      result.push({ key: keys[i], value: obj[keys[i]] });
    }
  }

  for (const i in keys) { // заполняем массив оставшимися ключами
    if (keys[i] !== first && keys[i] !== second) {
      result.push({ key: keys[i], value: obj[keys[i]] });
    }
  }

  return result;
}
