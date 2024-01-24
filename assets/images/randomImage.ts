const images = [
  require('./1.png'),
  require('./2.png'),
  require('./3.png'),
  require('./4.png'),
  require('./5.png'),
  require('./6.png'),
  require('./7.png'),
  require('./8.png'),
  require('./9.png'),
  require('./10.png'),
  require('./11.png'),
  require('./12.png'),
];

export default function randomImage() {
  const min = 1;
  const max = 12;
  const random = Math.floor(Math.random() * (max - min) + 1) + min;
  return images[random];
}
