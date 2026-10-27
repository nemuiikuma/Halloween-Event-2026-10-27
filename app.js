const toast=document.querySelector('#toast');
document.querySelectorAll('[data-status="coming"]').forEach(card=>card.addEventListener('click',event=>{event.preventDefault();toast.classList.add('show');clearTimeout(window.toastTimer);window.toastTimer=setTimeout(()=>toast.classList.remove('show'),2200)}));
