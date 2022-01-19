const express = require('express');
const app = express.Router()
const db = require('../models')

//모든 설문조사 조회
app.get('/',async(req,res)=>{
    try{
        const result = await db['survey'].findAll({
            attributes: [
                "survey_idx",
                "title",
                "host",
                "target",
                "start_date",
                "end_date",
                "reg_date",
                "is_VS"
            ]
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
        const result = await db['survey'].findOne({
            where:{
                survey_idx : surveyId,
            },
            attributes: [
                "survey_idx",
                "title",
                "host",
                "target",
                "start_date",
                "end_date",
                "reg_date",
                "is_VS"
            ]
            
        })
        
        return res.json(result)
    }
    catch(error){
        return res.status(400).json({msg:"error"})
    }
})


//해당 설문 모든 질문 조회
app.get('/:surveyId/question',async(req,res)=>{
    try{
        const {surveyId} = req.params
        const result = await db['question'].findAll({
            where:{
                fk_survey : surveyId,
            },
            attributes: [
                "question_idx",
                "fk_survey",
                "number",
                "type",
                "required",
                "maxChoice",
                "content",
            ]
            
        })
        
        return res.json(result)
    }
    catch(error){
        return res.status(400).json({msg:"error"})
    }
})

//해당 설문 리워드 조회
app.get('/:surveyId/rewords',async(req,res)=>{

})



app.get('/:surveyId/:questionId',async(req,res)=>{
    const option = [
        {
            select_idx : 1,
            type: "",
            label : "민초파",
            value : 1,
            img_path : "./image1.jpg"
        },{
            select_idx : 2,
            type: "",
            label : "반민초파",
            value : 2,
            img_path : "./image2.jpg"
        }
    ]
    try{
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

app.post('/survey/:surveyId',async(req,res)=>{
    try{
        
    }
    catch{
        
    }
})

app.get('/survey/versus/:surveyId',async(req,res)=>{
    try{
        
    }
    catch{

    }
})

module.exports = app