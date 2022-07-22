export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "age",
    headerName: "Age",
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];
  
  //temporary data
  export const userRows = [
    {
      id: 1,
      username: "Sahand",
      img: "https://s6.uupload.ir/files/email_qtlo.png",
      status: "active",
      email: "sahand@gmail.com",
      age: 35,
    },
    {
      id: 2,
      username: "Mamad",
      img: "https://s6.uupload.ir/files/email_qtlo.png",
      email: "mamad@gmail.com",
      status: "passive",
      age: 42,
    },
    {
      id: 3,
      username: "Ali",
      img: "https://s6.uupload.ir/files/email_qtlo.png",
      email: "Ali@gmail.com",
      status: "pending",
      age: 45,
    },
    {
      id: 4,
      username: "Farzam",
      img: "https://s6.uupload.ir/files/email_qtlo.png",
      email: "4snow@gmail.com",
      status: "active",
      age: 16,
    },
    {
      id: 5,
      username: "Sajad",
      img: "https://s6.uupload.ir/files/email_qtlo.png",
      email: "sajad@gmail.com",
      status: "passive",
      age: 22,
    },
    {
      id: 6,
      username: "Edris",
      img: "https://s6.uupload.ir/files/email_qtlo.png",
      email: "Edris@gmail.com",
      status: "active",
      age: 15,
    },
    {
      id: 7,
      username: "Amin",
      img: "https://s6.uupload.ir/files/email_qtlo.png",
      email: "Amin@gmail.com",
      status: "passive",
      age: 44,
    },
    {
      id: 8,
      username: "Arash",
      img: "https://s6.uupload.ir/files/email_qtlo.png",
      email: "Arash@gmail.com",
      status: "active",
      age: 36,
    },
    {
      id: 9,
      username: "Omid",
      img: "https://s6.uupload.ir/files/email_qtlo.png",
      email: "omid@gmail.com",
      status: "pending",
      age: 65,
    },
    {
      id: 10,
      username: "Hadi",
      img: "https://s6.uupload.ir/files/email_qtlo.png",
      email: "hadi@gmail.com",
      status: "active",
      age: 65,
    },
  ];
  