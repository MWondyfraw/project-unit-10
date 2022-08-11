import React, {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import Errors from './Errors';
import ReactMarkdown from 'react-markdown';

export default function CourseDetail({history, context}){
    let [errors, setErrors] = useState([]);
    let [course, setCourse] = useState([]);

    const {emailAddress,passowrd} = context.authenticatedUser;
    let {id} = useParams();

    useEffect
}