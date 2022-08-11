import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function UpdateCourse({ context, history }) {
 const [errors, setErrors] = useState([]);
 const [title,setTitle] = useState("");
 const [estimatedTime, setEstimatedTime] = useState("");
 const [materialsNeeded, setMaterialsNeeded] = useState("");
 const [description, setDescription] = useState("");

const {
    id: userId,
    emailAddress,
    firstName,
    lastName,
    password,
} = context.authenticatedUser;

let{id} = useParams ();
useEffect(() => {
    const getCourse = async () => {
        try{
            const courseData = await context.data.getCourse(id);
            if (courseData === null){
                setErrors(['No Course Found']);
            } else {
                setTitle(courseData.title);
                setDescription(courseData.description);
                setEstimatedTime(courseData.EstimatedTime);
                setMaterialsNeeded(courseData.materialsNeeded);
            }
        } catch(err){
            console.log(err);
            history.push('/error');
        }
    };

    let unmounted = false;
    if(!unmounted){
        getCourse();
    }
})

}
