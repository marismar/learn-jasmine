import { DefaultPipe } from './default.pipe';

describe('DefaultPipe', () => {
  let pipe: DefaultPipe;

  beforeEach(() => {
    pipe = new DefaultPipe();
  });

  it('providing no value returns fallback', () => {
    expect(pipe.transform('', 'http://place-hold.it/300')).toBe(
      'http://place-hold.it/300'
    );
  });
});
