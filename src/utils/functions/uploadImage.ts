import { useOnClickOutside } from "../hooks/useOnClickOutside";
import { useState } from 'react';

interface IClasses {
    addedFile: string
    deleteFile: string
    FilesError: string
}

export const uploadImage = (e: React.ChangeEvent<HTMLInputElement>, classes: IClasses, id: string) => {
    const addedFiles = document.getElementById(id);

    if (!e.target.files?.length) {
      return
    } else {
      const files = Array.from(e.target.files)
      if (files.length > 10 || addedFiles?.childNodes.length! >= 10) {
        addedFiles?.parentElement?.insertAdjacentHTML('afterbegin', `
        <div class=${classes.FilesError}>
          Можно загрузить не более 10 файлов!
        </div>`)
      } else {
        files.forEach(file => {
          if (!file.type.match('image')) {
            return
          } else {
            const reader = new FileReader();
  
            reader.onload = e => {
              addedFiles?.insertAdjacentHTML('afterbegin', `<div class=${classes.addedFile} ><img src="${e.target?.result}"/><div class=${classes.deleteFile}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg></div></div>`)
            }
  
            reader.readAsDataURL(file)
          }
        })
      }
    }
  }