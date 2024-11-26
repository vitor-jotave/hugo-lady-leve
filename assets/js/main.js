document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.youtube-video-container').forEach(container => {
        container.querySelector('button').addEventListener('click', function() {
            const videoId = container.dataset.videoId;
            const videoTitle = container.dataset.videoTitle;
            
            const iframe = document.createElement('iframe');
            iframe.setAttribute('src', `https://www.youtube.com/embed/${videoId}?autoplay=1`);
            iframe.setAttribute('title', videoTitle);
            iframe.setAttribute('class', 'absolute top-0 left-0 w-full h-full border-0');
            iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
            iframe.setAttribute('allowfullscreen', '');
            
            container.innerHTML = '';
            container.appendChild(iframe);
        });
    });
});