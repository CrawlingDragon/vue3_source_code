import { effect, reactive } from '../src';
import { describe, it, expect } from 'vitest';

describe('响应式数据', () => {
  it('测试reactive', () => {
    let obj = reactive({
      name: '大圣',
    });
    let dummy;
    effect(() => {
      dummy = obj.name;
    });
    expect(dummy).toBe('大圣');
    obj.name = '小圣';
    expect(dummy).toBe('小圣');
  });
});
