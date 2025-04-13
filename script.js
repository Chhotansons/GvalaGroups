document.addEventListener('DOMContentLoaded', () => {
    const toggleProfileButton = document.getElementById('toggle-profile');
    const profileSection = document.getElementById('profile-section');

    // Toggle Profile Section visibility
    toggleProfileButton.addEventListener('click', () => {
        profileSection.classList.toggle('visible'); // Add or remove 'visible' class
    });

    const profilePhoto = document.getElementById('profile-photo');
    const uploadAvatar = document.getElementById('upload-avatar');

    // Load profile photo from localStorage
    const savedPhoto = localStorage.getItem('profilePhoto');
    if (savedPhoto) {
        profilePhoto.src = savedPhoto;
    }

    // Handle avatar upload
    uploadAvatar.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                profilePhoto.src = e.target.result;

                // Save photo to localStorage
                localStorage.setItem('profilePhoto', e.target.result);
            };
            reader.readAsDataURL(file);
        }
    });
});
