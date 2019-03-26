import { controller,get,post  } from '../decorator/router'

@controller('/api')
export class TestController{
    @get('/test')
    async test(ctx,next){
        ctx.body ='11'
    }
}