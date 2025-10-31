// Chờ cho toàn bộ nội dung HTML được tải xong
document.addEventListener('DOMContentLoaded', () => {

    console.log('Trang Profile đã tải xong!');

    // --- 1. XỬ LÝ UPLOAD AVATAR ---
    
    // Lấy các phần tử
    const avatarUploadInput = document.getElementById('avatar_upload');
    const mainAvatarImage = document.getElementById('main_avatar_img');
    
    // Lấy TẤT CẢ các ảnh đại diện nhỏ (sử dụng class)
    const smallAvatars = document.querySelectorAll('.avatar_small');

    // Thêm sự kiện 'change' cho input file
    avatarUploadInput.addEventListener('change', (event) => {
        // Lấy file người dùng đã chọn
        const file = event.target.files[0];

        if (file) {
            // Tạo một FileReader để đọc file
            const reader = new FileReader();

            // Định nghĩa việc cần làm khi file được đọc xong
            reader.onload = (e) => {
                const imageUrl = e.target.result;
                
                // Cập nhật ảnh avatar LỚN
                mainAvatarImage.src = imageUrl;

                // Cập nhật TẤT CẢ ảnh avatar NHỎ
                smallAvatars.forEach(avatar => {
                    avatar.src = imageUrl;
                });
            };

            // Bắt đầu đọc file
            reader.readAsDataURL(file);
        }
    });


    // --- 2. XỬ LÝ CHUYỂN TABS ---
    
    const allTabButtons = document.querySelectorAll('.tab_button');

    allTabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Xóa class 'active' khỏi tất cả các nút
            allTabButtons.forEach(btn => {
                btn.classList.remove('active');
            });

            // Thêm class 'active' cho nút vừa được nhấn
            button.classList.add('active');

            // (Bạn có thể thêm logic để ẩn/hiện nội dung tương ứng ở đây)
            // Ví dụ:
            // const tabContentId = button.dataset.tab;
            // if (tabContentId === 'posts') { ... }
        });
    });

    // --- 3. XỬ LÝ NÚT VOTE ---
    const voteButton = document.querySelector('.vote-btn');
    if (voteButton) {
        voteButton.addEventListener('click', () => {
            // Thêm/xóa class 'voted'
            voteButton.classList.toggle('voted');
        });
    }

});
