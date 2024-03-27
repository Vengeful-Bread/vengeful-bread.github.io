document.addEventListener('DOMContentLoaded', function main() {
    document.querySelector('#dark-toggle').addEventListener('click', toggleDarkTheme)
  
    document.querySelector('#nav-more').addEventListener('click', function() {
      const contentDiv = document.querySelector('#nav-links');
      if (contentDiv.style.maxHeight){
        contentDiv.style.maxHeight = null;
      } else {
        contentDiv.style.maxHeight = contentDiv.scrollHeight + "px";
      }
    })
})
  
  