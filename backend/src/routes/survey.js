const express = require('express');
const { Sequelize, sequelize } = require('../models');
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
        const result = await db['survey'].findAll({
            where:{
                is_VS : versus
            },
            order: Sequelize.literal('rand()'),
            limit: Number(count)
        })

        console.log(result)
        return res.json(result)
    }
<<<<<<< HEAD
    catch{
=======
    catch(err){
        console.log(err);
>>>>>>> 3358d5da2d1497dad0fa2609603ebae57cf25562
        return res.status(400).json({msg:"error"})
    }
})


//해당 설문조사 조회
app.get('/:surveyId',async(req,res)=>{
    const makeImageUrl = (id) =>
    `${req.protocol}://${req.get("host")}/api/survey/image/${id}`;
    try{
        const {surveyId} = req.params
        const result = await db['survey'].findOne({
            include: [{
                model : db['question'],
                attributes: [
                    "id",
                    "number",
                    "content",
                    "required",
                    "maxChoice",
                ],
                include : {
                    model : db['option'],
                    attributes: [
                        "id",
                        "value",
                        "type",
<<<<<<< HEAD
                        "img_path"
=======
                        "img_path",
>>>>>>> 3358d5da2d1497dad0fa2609603ebae57cf25562
                    ]
                }
            },{
                model : db['reward'],
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
        

        for(let i = 0; i<result['questions'].length;i++){
            for(let k=0;k<result['questions'][i]['options'].length;k++){
<<<<<<< HEAD
                if(result['questions'][i]['options'][k]['img_path']){
                    result['questions'][i]['options'][k]['img_path'] = makeImageUrl(result['test_questions'][i]['test_options'][k]['id'])
                }
            }
        }
        // result['test_questions'][0]['test_options']
=======
                
                if(result['questions'][i]['options'][k]['img_path']){
                    result['questions'][i]['options'][k]['img_path'] = "exist"
                }
            }
        }

        
>>>>>>> 3358d5da2d1497dad0fa2609603ebae57cf25562


        return res.json(result)
    }
    catch(error){
<<<<<<< HEAD
=======
        console.log(error)
>>>>>>> 3358d5da2d1497dad0fa2609603ebae57cf25562
        return res.status(400).json({msg:"error"})
    }
})

//해당 설문 모든 질문 조회
app.get('/question/:surveyId',async(req,res)=>{
    try{
        const {surveyId} = req.params
        const result = await db['question'].findAll({
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
        const result = await db['reward'].findAll({
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
        const optionImage = await db['option'].findOne({
            where:{
                id : req.params.optionId
            }
        })
        if(optionImage&&optionImage['img_path']){
            res.set('Content-Disposition',`inline; filename=profile.png`);
            res.set('Content-Type',`image/*`);
            const file = fs.createReadStream(`./src/images/${optionImage['img_path']}`)
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
    const makeImageUrl = (id) =>
    `${req.protocol}://${req.get("host")}/api/survey/image/${id}`;
    try{
        const {questionId} = req.params
        console.log(questionId)
        const result = await db['option'].findAll({
            include : [{
                model : db['answer'],
                attributes : [
                    'id',
                ]
            }],
            where:{
                fk_questions : Number(questionId)
            },
            attributes :[
                "id",
                "value",
                "type",
                "img_path"
            ]
        })
        for(let i = 0; i<result.length;i++){
            if(result[i]['img_path']){
                result[i]['img_path'] = makeImageUrl(result[i]['id'])
            }
            result[i].dataValues['count'] = result[i].dataValues['answers'].length
            delete result[i].dataValues['answers']
        }
        return res.json(result)
    }
    catch{
        return res.status(400).json({msg:"error"})
    }
})


app.post('/versus',async(req,res)=>{
    try{
        const {
            member_id,
            survey_id,
            question_id,
            option_id,
            value
        } = req.body
        const result = await db["answer"].create(
            {
                // finished: 1,
                value : value,
                fk_members: Number(member_id),
                fk_surveys: Number(survey_id),
                fk_questions: Number(question_id),
                fk_options : Number(option_id),
            }
        )
        return res.json(result)
    }
    catch(error){
        return res.json({msg:"error"})
    }
})

//설문조사 등록
app.post('/',async(req,res)=>{
    const transaction = await db.sequelize.transaction();
    try{
        let {
            title,
            host,
            target,
            is_VS,
            updatedAt,
            deletedAt,
            questions,
        } = req.body
        questions = await JSON.parse('[' + questions + ']')
    
        const survey = await db['survey'].create({
            title: title,
            host: host,
            target: target,
            is_VS : is_VS,
            updatedAt,
            deletedAt
        },{transaction: transaction})

        for(let i=0;i<questions.length;i++){
            console.log(questions[i])
            const question = await db['question'].create({
                number: i+1,
                content: questions[i].content,
                required: questions[i].required,
                maxChoice: questions[i].maxChoice,
                fk_surveys: survey['id']
            },{transaction: transaction})

            for(let j=0;j<questions[i]['options'].length;j++){
                const option = await db['option'].create({
                    value : questions[i]['options'][j]['value'],
                    type: questions[i]['options'][j]['type'],
                    fk_surveys: survey['id'],
                    fk_questions: question['id']
                },{transaction: transaction})
            }
        }

        transaction.commit()

        res.json({msg:'success'})
    }
    catch{
        res.status(400).json({
            msg : "error"
        })
    }
})



module.exports = app