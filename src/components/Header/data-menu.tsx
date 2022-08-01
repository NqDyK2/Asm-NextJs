export const MenuList = [
    { id: 1, label: "Trang chủ", path: "/" },
    { id: 2, label: "Phim", path: "/film",children:{
        id: 1, path:"/film/:id"
    }},

]