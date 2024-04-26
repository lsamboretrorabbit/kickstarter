import React, { useState } from "react"
import { Controller, useForm } from "react-hook-form"
import Heading from "../components/Heading"
import Input from "../components/Input"
import Button from "../components/Button"
import { useContractContext } from "../context"
import { ethers } from "ethers"
import { checkIfImage } from "../utils"
import { toast } from 'react-hot-toast'
import { useNavigate } from "react-router"
import FormField from "../components/FormField"
import CustomButton from "../components/CustomButton"

const Create = () => {
  const navigate = useNavigate()
  const { createCampaign } = useContractContext()
  const [form, setForm] = useState({
    name: '',
    title: '',
    description: '',
    target: '',
    deadline: '',
    image: ''
  });

  // const onSubmit = async (data) => {
  //   console.log('here')
  //   checkIfImage(data.image, async (exists) => {
  //     if (exists) {
  //       toast.loading('Publishing campaign')
  //       await createCampaign({
  //         ...data,
  //         target: ethers.utils.parseUnits(data.target, 18),
  //       })
  //       toast.dismiss()
  //       toast.success('Campaign published')
  //       navigate('/')
  //     } else {
  //       toast.error('Image link is invalid')
  //     }
  //   })
  // }

  const handleFormFieldChange = (fieldName, e) => {
    setForm({ ...form, [fieldName]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    checkIfImage(form.image, async (exists) => {
      if (exists) {
        // setIsLoading(true)
        await createCampaign({ ...form, target: ethers.utils.parseUnits(form.target, 18) })
        // setIsLoading(false);
        navigate('/');
      } else {
        alert('Provide valid image URL')
        setForm({ ...form, image: '' });
      }
    })
  }

  return (
    <div className="mx-auto max-w-7xl p-5">
      <Heading title={"Create a new campaign"} />
      <form onSubmit={handleSubmit} className="">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-5">
          <FormField
            labelName="Your Name *"
            placeholder="John Doe"
            inputType="text"
            value={form.name}
            handleChange={(e) => handleFormFieldChange('name', e)}
          />
         <FormField 
            labelName="Campaign Title *"
            placeholder="Write a title"
            inputType="text"
            value={form.title}
            handleChange={(e) => handleFormFieldChange('title', e)}
          />
        </div>
        <FormField 
            labelName="Story *"
            placeholder="Write your story"
            isTextArea
            value={form.description}
            handleChange={(e) => handleFormFieldChange('description', e)}
          />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pt-5 pb-10">
        <FormField 
            labelName="Goal *"
            placeholder="ETH 0.50"
            inputType="text"
            value={form.target}
            handleChange={(e) => handleFormFieldChange('target', e)}
          />
          <FormField 
            labelName="End Date *"
            placeholder="End Date"
            inputType="date"
            value={form.deadline}
            handleChange={(e) => handleFormFieldChange('deadline', e)}
          />
           <FormField 
            labelName="Campaign image *"
            placeholder="Place image URL of your campaign"
            inputType="url"
            value={form.image}
            handleChange={(e) => handleFormFieldChange('image', e)}
          />
        </div>
        <CustomButton 
              btnType="submit"
              title="Submit new campaign"
              styles="bg-[#1dc071]"
            />
      </form>
    </div>
  )
}

export default Create
