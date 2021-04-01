import { Service, Inject } from 'typedi';
import MyService from './service'

@Service('OtherService')
class OtherService {
  @Inject('MyService')
  private myService: MyService;

  dump() {
    myService.dump();
  }
}

export default OtherService;