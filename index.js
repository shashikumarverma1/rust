fn main() {

    let my_string = "abcd";
       println!("{}", is_pelindrome(my_string));
        println!("{}", reverce_string(my_string));
        
   }
   check pelindrome
   fn is_pelindrome(s: &str) -> bool {
       let mut str = String::new();
        for c in s.chars() {
           str.insert_str(0 , &c.to_string());
           // println!("{}", c);
       }
       // println!("{}", str);
       if s==str {
           return true
       }else{
           return false
       }
       
   }
   reverce string
   fn reverce_string(s: &str) -> String {
       let mut str = String::new();
        for c in s.chars() {
           str.insert_str(0 , &c.to_string());
           // println!("{}", c);
       }
       // println!("{}", str);
       return str
   }
   is prime problem
   fn is_prime(n: u32) -> bool {
       if n <= 1 {
           return false;
       }
       for i in 2..=n / 2 {
           if n % i == 0 {
               return false;
           }
       }
       true
   }