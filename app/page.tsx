'use client'
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import z from 'zod'

const savePostSchema = z.object({
  postContent: z.string()
})

type saveFormInput = z.infer<typeof savePostSchema>

export default function Home() {

  const {handleSubmit,register, reset} = useForm<saveFormInput>({
    resolver: zodResolver(savePostSchema)
  })

  async function handleSavePost(data: saveFormInput) {
    await axios.post('/api/save-post', data)
    reset()
  }

  return (
    <form onSubmit={handleSubmit(handleSavePost)} className="flex flex-col gap-2 w-[320px]">
      <label htmlFor="postContent">Conteúdo do post</label>
      <textarea className="border" id="postContent" {... register('postContent')} ></textarea>
      <button className="border" type="submit">Enviar</button>
    </form>
  );
}
