import { Container, Service, Inject } from 'typedi';

@Service('bean.factory')
class BeanFactory {
  create() {}
}

@Service('sugar.factory')
class SugarFactory {
  create() {}
}

@Service('water.factory')
class WaterFactory {
  create() {}
}

@Service('coffee.maker')
class CoffeeMaker {
  beanFactory;
  sugarFactory;

  @Inject('water.factory')
  waterFactory;

  constructor(@Inject('bean.factory') beanFactory: BeanFactory, @Inject('sugar.factory') sugarFactory: SugarFactory) {
    this.beanFactory = beanFactory;
    this.sugarFactory = sugarFactory;
  }

  make() {
    this.beanFactory.create();
    this.sugarFactory.create();
    this.waterFactory.create();
  }
}

let coffeeMaker = Container.get<CoffeeMaker>('coffee.maker');
coffeeMaker.make();