import { Router, Request, Response }  from 'express';

let router = Router();

router.get('/start', (req:Request, res:Response) =>{

    res.json({azz:1});
});

module.exports = router;