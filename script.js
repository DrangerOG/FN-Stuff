        // S'assurer que les liens supplémentaires sont masqués au chargement de la page
        document.addEventListener('DOMContentLoaded', function() {
            var moreLinks = document.querySelectorAll('.more-links');
            moreLinks.forEach(function(link) {
                link.style.display = 'none';
            });
        });

        document.getElementById('toggleButton').addEventListener('click', function() {
            var moreLinks = document.querySelectorAll('.more-links');
            moreLinks.forEach(function(link) {
                if (link.style.display === 'none' || link.style.display === '') {
                    link.style.display = 'flex';
                } else {
                    link.style.display = 'none';
                }
            });
            
            if (this.textContent === 'Afficher Plus') {
                this.textContent = 'Afficher Moins';
            } else {
                this.textContent = 'Afficher Plus';
            }
        });