/**
 * Youtube Lazy Load
 * Melhora o desempenho de páginas que contém vídeos do Youtube
 * 
 * @author @vitor-jotave
 * @description Este script adiciona manipuladores de clique aos contêineres de vídeo do YouTube que
 *              carregam o iframe do vídeo apenas quando o usuário clica para reproduzir, melhorando
 *              o desempenho inicial do carregamento da página
 */
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