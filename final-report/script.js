(function(){
  const headings = Array.from(document.querySelectorAll('main section[id]'))
  const tocLinks = new Map()
  document.querySelectorAll('.toc a[href^="#"]').forEach(a=>{
    const id = decodeURIComponent(a.getAttribute('href').slice(1))
    tocLinks.set(id, a)
  })

  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      const id = entry.target.id
      const link = tocLinks.get(id)
      if(!link) return
      if(entry.isIntersecting){
        link.classList.add('active')
      }else{
        link.classList.remove('active')
      }
    })
  },{rootMargin:'-20% 0px -65% 0px',threshold:[0,1]})

  headings.forEach(h=>observer.observe(h))
})()


