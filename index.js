import 'reflect-metadata';
import { Container } from 'typedi';

console.log('testing Container');
try {
  const myService = Container.get(MyService);
  myService.dump();
} catch (err) {
  console.log('FAILED', err)
}

console.log('testing injection');
try {
  const otherService = Container.get(OtherService);
  otherService.dump();
} catch (err) {
  console.log('FAILED', err)
}
