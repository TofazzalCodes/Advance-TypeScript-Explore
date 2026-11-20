const wrapInArray =<T>(value: T) => {
  return [value]; 
};

const stringArr = wrapInArray<string>("ABC");
const numberArr = wrapInArray<number>(2343);

stringArr.map((item) => item.toUpperCase())
numberArr.map((num)=> num.toFixed())

interface User {
    name: string;
    role: string;

}
interface Blog {
  title: string;
  description: string;
  date: string;
}

interface ApiResponse <T> {
  data: T;
  success:boolean;
  statusCode: number;
}

type UserResponse = ApiResponse<User>;
type BlogResponse = ApiResponse<Blog>;

const userRes: UserResponse = {
    statusCode: 200,
    success: true,
    data: {
      name: "sddfd",
      role: "sfre"
    }
}