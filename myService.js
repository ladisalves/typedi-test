import { Service } from 'typedi';

@Service('MyService')
class MyService {
  dump() {
    console.log('Dump baby');
  }
}

export default MyService;
