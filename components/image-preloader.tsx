'use client'

import { useEffect } from 'react'

export function ImagePreloader() {
  useEffect(() => {
    // Showcase COVERS images - preload first
    const showcaseImages = [
      '/COVERS/2.jpg',
      '/COVERS/4.jpg',
    ]

    // All project images
    const imagesToPreload = [
      ...showcaseImages,
      
      // Project 1
      '/Project1/1.jpg', '/Project1/2.jpg', '/Project1/3.jpg', '/Project1/4.jpg', 
      '/Project1/5.jpg', '/Project1/6.jpg', '/Project1/7.jpg', '/Project1/8.jpg',
      '/Project1/9.jpg', '/Project1/10.jpg', '/Project1/11.jpg', '/Project1/12.jpg',
      
      // Project 2
      '/Project2/1.jpg', '/Project2/5.jpg', '/Project2/10.jpg', '/Project2/15.jpg',
      '/Project2/20.jpg', '/Project2/30.jpg', '/Project2/35.jpg', '/Project2/45+.jpg',
      '/Project2/50.jpg', '/Project2/55.jpg', '/Project2/60.jpg', '/Project2/65.jpg',
      '/Project2/70.jpg',
      
      // Project 3
      '/Project3/1.jpg', '/Project3/3.jpg', '/Project3/4.jpg', '/Project3/8.jpg',
      '/Project3/12.jpg', '/Project3/13.jpg', '/Project3/a.jpg', '/Project3/b.jpg',
      
      // Project 4
      '/Project4/1.jpg', '/Project4/3.jpg', '/Project4/4.jpg', '/Project4/5.jpg',
      '/Project4/6.jpg', '/Project4/14.jpg', '/Project4/15.jpg', '/Project4/17.jpg',
      
      // Project 5
      '/Project5/000A.jpg', '/Project5/000B.jpg', '/Project5/000C.jpg', '/Project5/000D.jpg',
      '/Project5/000E.jpg', '/Project5/000F.jpg', '/Project5/000G.jpg',
      
      // Project 6
      '/Project6/1.jpg', '/Project6/5.jpg', '/Project6/10.jpg', '/Project6/15.jpg',
      '/Project6/25.jpg', '/Project6/30.jpg', '/Project6/35.jpg', '/Project6/36.jpg',
      '/Project6/A.jpg',
      
      // Project 7
      '/Project7/1.jpg', '/Project7/2.jpg', '/Project7/3.jpg', '/Project7/4.jpg',
      '/Project7/5.jpg', '/Project7/6.jpg', '/Project7/7.jpg', '/Project7/8.jpg',
      '/Project7/9.jpg', '/Project7/10.jpg', '/Project7/11.jpg', '/Project7/12.jpg',
      '/Project7/13.jpg',
      
      // Project 8
      '/Project8/01.jpg', '/Project8/02.jpg', '/Project8/03.jpg', '/Project8/04.jpg',
      '/Project8/05.jpg', '/Project8/q1.jpg', '/Project8/q2.jpg',
      
      // Project 9
      '/Project9/1.jpg', '/Project9/2.jpg', '/Project9/3.jpg', '/Project9/4.jpg',
      '/Project9/4+.jpg',
      
      // Project 10
      '/Project10/A.jpg', '/Project10/B.jpg', '/Project10/C.jpg', '/Project10/D.jpg',
      '/Project10/E.jpg', '/Project10/G.jpg', '/Project10/H.jpg', '/Project10/I.jpg',
      '/Project10/J.jpg', '/Project10/K.jpg', '/Project10/L.jpg', '/Project10/M.jpg',
      '/Project10/d+.jpg',
      
      // Project 11
      '/Project11/F1.jpg', '/Project11/F2.jpg', '/Project11/F3.jpg', '/Project11/B+.jpg',
      '/Project11/E+.jpg', '/Project11/O+.jpg',
    ]

    // Preload images
    imagesToPreload.forEach(src => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.as = 'image'
      link.href = src
      document.head.appendChild(link)
    })

    // Also preload as img tags for better caching
    imagesToPreload.forEach(src => {
      const img = new Image()
      img.src = src
    })
  }, [])

  return null
}
