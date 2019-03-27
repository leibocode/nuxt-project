import { controller,get,post  } from '../decorator/router'


/**
 * @description 测试代码
 * @author Leibo
 * @date 2019-03-26
 * @export
 * @class TestController
 */
@controller('/api')
export class TestController{
    @get('/test')
    async test(ctx,next){
        ctx.body ='11'
    }
}