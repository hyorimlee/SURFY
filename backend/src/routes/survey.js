const express = require('express');
const { Sequelize } = require('../models');
const app = express.Router()
const db = require('../models')
const fs = require('fs');
const {verifyToken} = require('../utils/jwt');

//모든 설문조사 조회(랜덤 조회)
app.get('/',async(req,res)=>{
    try{
        let {versus,count} = req.query
        count = Number(count)
        if(!versus) versus = 0
        if(!count) count = 5
        const result = await db['test_survey'].findAll({
            where:{
                is_VS : versus
            },
            order: Sequelize.literal('rand()'),
            limit: Number(count)
        })

        console.log(result)
        return res.json(result)
    }
    catch{
        return res.status(400).json({msg:"error"})
    }
})


//해당 설문조사 조회
app.get('/:surveyId',async(req,res)=>{
    try{
        const {surveyId} = req.params
        const result = await db['test_survey'].findOne({
            include: [{
                model : db['test_question'],
                attributes: [
                    "id",
                    "number",
                    "content",
                    "required",
                    "maxChoice",
                ],
                include : {
                    model : db['test_option'],
                    attributes: [
                        "id",
                        "value",
                        "type",
                        "img_path"
                    ]
                }
            },{
                model : db['test_reward'],
                attributes:[
                    'id',
                    'probability',
                    'reward',
                    'remain',
                    'cnt'
                ]
            }],
            where:{
                id : surveyId,
            },
        })
        
        return res.json(result)
    }
    catch(error){
        return res.status(400).json({msg:"error"})
    }
})


//해당 설문 모든 질문 조회
app.get('/question/:surveyId',async(req,res)=>{
    try{
        const {surveyId} = req.params
        const result = await db['test_question'].findAll({
            where:{
                fk_surveys : surveyId,
            },
            attributes :[
                "id",
                "number",
                "content",
                "required",
                "maxChoice",
            ]
        })
        
        return res.json(result)
    }
    catch(error){
        return res.status(400).json({msg:"error"})
    }
})

//해당 설문 리워드 조회
app.get('/reward/:surveyId',async(req,res)=>{
    try{
        const {surveyId} = req.params
        const result = await db['test_reward'].findAll({
            where:{
                fk_surveys : surveyId,
            },
            attributes :[
                'id',
                'probability',
                'reward',
                'remain',
                'cnt'
            ]
        })
        
        return res.json(result)
    }
    catch(error){
        return res.status(400).json({msg:"error"})
    }
})

//해당 선택지 이미지 조회
app.get('/image/:optionId', async(req,res)=>{
    try{
        const optionImage = await db['test_option'].findOne({
            where:{
                id : req.params.id
            }
        })
        if(optionImage&&optionImage['img_path']){
            res.set('Content-Disposition',`inline; filename=profile.png`);
            res.set('Content-Type',`image/jpg`);
            // fs.readFile(`C:\\Users\\SSAFY\\Documents\\2학기 공통프로젝트\\S06P12A204\\backend\\src\\images\\${optionImage['img_path']}`,(err,data)=>{
            //     res.write(data)
            //     res.end()
            // })
            const file = fs.createReadStream(`./src/images/${optionImage['img_path']}`)
            // const file = fs.createReadStream(`./src/images/WIN_20211216_09_27_47_Pro.jpg`)
            return file.pipe(res)
        }
        else{
            return res.status(400).json({msg:"error"})
        }
    }
    catch(error){
        return res.status(404).json({msg:"error"})
    }
})



app.get('/option/:questionId',async(req,res)=>{
    try{
        const {questionId} = req.params

        return res.json(option)
    }
    catch{
        
    }
})

app.get('/:surveyId/:questionId/example',async(req,res)=>{
    try{
        const {surveyId,questionId} = req.params
        console.log(questionId)
        const result = await db['example'].findAll({
            where:{
                question_id : questionId,
            },
        })
        return res.json(result)
    }
    catch{
        return res.status(400).json({msg:"error"})
        
    }
})


//설문조사 등록
app.post('/',async(req,res)=>{
    try{
        const {
            title,
            host,
            target,
            is_VS,
            updatedAt,
            deleteAt,
            questions,
        } = req.body
        console.log(req.body)
        console.log(questions[0])
        // quest = JSON.parse(questions)
        console.log(JSON.parse(questions[1])['option'][0])
        res.json()
    }
    catch{
        res.status(400).json({
            msg : "error"
        })
    }
})



module.exports = app