// Code snippet data
const codeSnippets = [
  {
    title: "Library",
    category: "Object-oriented Programming",
    code: // BookDetails.java
    `public class BookDetails
    {
       private int bookNo;
       private String title;
       private String author;
       private String category;
       
       public BookDetails(int bookNo, String title, String author, String category)
       {
          this.bookNo = bookNo;
          this.title = title;
          this.author = author;
          this.category = category;
       }
    
       public void setBookNo(int bookNo)
       {
          this.bookNo = bookNo;
       }
    
       public void setTitle(String title)
       {
          this.title = title;
       }
    
       public void setAuthor(String author)
       {
          this.author = author;
       }
    
       public void category(String category)
       {
          this.category = category;
       }
    
       public int geBookNo()
       {
          return this.bookNo;
       }
    
       public String getTitle()
       {
          return this.title;
       }
    
       public String getAuthor()
       {
          return this.author;
       }
    
       public String getCategory()
       {
          return this.category;
       }
    
       public String toString()
       {
          return String.format("%-20s%d%n%-20s%s%n%-20s%s%n%-20s%s", "Book Number: ", this.bookNo, "Title: ", this.title, "Author: ", this.author, "Category: ", this.category);
       }
    }
    
    // BooksIssued.java
    public class BooksIssued
    {
       private BookDetails bookDetails;
       private Date borrowDate;
       private Date dueDate;
       private Date returnDate;
       private int fine;
       
       public BooksIssued(BookDetails bookDetails, Date borrowDate, Date dueDate, Date returnDate, int fine)
       {
          this.bookDetails = bookDetails;
          this.borrowDate = borrowDate;
          this.dueDate = dueDate;
          this.returnDate = returnDate;
          this.fine = fine;
       }
       
       public void setBookDetails(BookDetails bookDetails)
       {
          this.bookDetails = bookDetails;
       }
    
       public void setBorrowDate(Date borrowDate)
       {
          this.borrowDate = borrowDate;
       }
    
       public void setDueDate(Date dueDate)
       {
          this.dueDate = dueDate;
       }
    
       public void setReturnDate(Date returnDate)
       {
          this.returnDate = returnDate;
       }
    
       public BookDetails getBookDetails()
       {
          return this.bookDetails;
       }
    
       public Date getBorrowDate()
       {
          return this.borrowDate;
       }
    
       public Date getDueDate()
       {
          return this.dueDate;
       }
    
       public Date getReturnDate()
       {
          return this.returnDate;
       }
    
       public int getFine()
       {
          return this.fine;
       }
    
       public String toString()
       {
          return String.format("%s%n%-20s%s%n%-20s%s%n%-20s%s%n%-20s%d%n", bookDetails, "Borrow Date:", borrowDate, "Due Date:", dueDate, "Return Date:", returnDate, "Fine:", fine);
       }
    }
    
    // BorrowerDetails.java
    public class BorrowerDetails
    {
       private String idNo;
       private String name;
       private String address;
       private Date dob;
       private boolean memberStatus;
     
       public BorrowerDetails(String idNo, String name, String address, Date dob, boolean memberStatus)
       {
          this.idNo = idNo;
          this.name = name;
          this.address = address;
          this.dob = dob;
          this.memberStatus = memberStatus;
       }
     
       public String getIdNo()
       {
          return this.idNo;
       }
     
       public String getName()
       {
          return this.name;
       }
     
       public String getAddress()
       {
          return this.address;
       }
     
       public Date getDob()
       {
          return this.dob;
       }
     
       public boolean getMemberStatus()
       {
          return this.memberStatus;
       }
     
       public void setIdNo(String idNo)
       {
          this.idNo = idNo;
       }
     
       public void setName(String name)
       {
          this.name = name;
       }
     
       public void setAddress(String address)
       {
          this.address = address;
       }
     
       public void setDob(Date dob)
       {
          this.dob = dob;
       }
     
       public void setMemberStatus(boolean memberStatus)
       {
          this.memberStatus = memberStatus;
       }
     
       public String toString()
       {
          return String.format("%-20s%s%n%-20s%s%n%-20s%s%n%-20s%s%n%-20s%b%n", "ID Number:", idNo, "Name:", name, "Address:", address, "Date of Birth:", dob, "Member Status:", memberStatus);
       }
    }
    
    // Date.java
    public class Date
    {
       private int day;
       private int month;
       private int year;
    
       public Date(int day, int month, int year)
       {
          if (day > 0 && day <= 31)
          {
             this.day = day;
          }
          
          if (month > 0 && month <= 12)
          {
             this.month = month;
          }
    
          this.year = year;
       }
    
       public int getDay()
       {
          return this.day;
       }
    
       public int getMonth()
       {
          return this.month;
       }
    
       public int getYear()
       {
          return this.year;
       }
    
       public void setDay(int day)
       {
          if (day > 0 && day <= 31)
          {
             this.day = day;
          }
       }
    
       public void setMonth(int month)
       {
          if (month > 0 && month <= 12)
          {
             this.month = month;
          }
    
       }
    
       public void setYear(int month)
       {
          this.year = month;
       }
    
       public String toString()
       {
          return String.format("%d/%d/%d", month, day, year);
       }
    }
    
    // LibrarianDetails.java
    public class LibrarianDetails {
       private String idNo;
       private String name;
       private String address;
       private Date dob;
       private String jobTitle;
       private int salary;
       private String email;
     
       public LibrarianDetails(String idNo, String name, String address, Date dob, String jobTitle, int salary, String email)
       {
          this.idNo = idNo;
          this.name = name;
          this.address = address;
          this.dob = dob;
          this.jobTitle = jobTitle;
          this.salary = salary;
          this.email = email;
       }
     
       public String getIdNo()
       {
          return this.idNo;
       }
     
       public String getName()
       {
          return this.name;
       }
     
       public String getAddress()
       {
          return this.address;
       }
     
       public Date getDob()
       {
          return this.dob;
       }
     
       public String getJobTitle()
       {
          return this.jobTitle;
       }
     
       public int getSalary()
       {
          return this.salary;
       }
     
       public String getEmail()
       {
          return this.email;
       }
     
       public void setIdNo(String idNo)
       {
          this.idNo = idNo;
       }
     
       public void setName(String name)
       {
          this.name = name;
       }
     
       public void setAddress(String address)
       {
          this.address = address;
       }
     
       public void setDob(Date dob)
       {
          this.dob = dob;
       }
     
       public void setJobTitle(String jobTitle)
       {
          this.jobTitle = jobTitle;
       }
     
       public void setSalary(int salary)
       {
          this.salary = salary;
       }
     
       public void setEmail(String email)
       {
          this.email = email;
       }
     
       public String toString()
       {
          return String.format("%-20s%s%n%-20s%s%n%-20s%s%n%-20s%s%n%-20s%s%n%-20s%d%n%-20s%s%n", "ID No:", this.idNo, "Name:", this.name, "Address:", this.address, "Date of Birth:", this.dob, "Job Title:", this.jobTitle, "Salary:", this.salary, "Email:", this.email);
       }
    }
    
    // Library.java
    public class Library
    {
       public String libraryName;
       public String contactNumber;
       public String address;
       public BorrowerDetails borrower;
       public LibrarianDetails librarian;
       public BooksIssued booksIssued;
     
       public Library(String libraryName, String contactNumber, String address, BorrowerDetails borrower, LibrarianDetails librarian, BooksIssued booksIssued)
       {
          this.libraryName = libraryName;
          this.contactNumber = contactNumber;
          this.address = address;
          this.borrower = borrower;
          this.librarian = librarian;
          this.booksIssued = booksIssued;
       }
     
       public String getLibraryName()
       {
          return this.libraryName;
       }
     
       public String getContactNumber()
       {
          return this.contactNumber;
       }
     
       public String getAddress()
       {
          return this.address;
       }
     
       public BorrowerDetails getBorrower()
       {
          return this.borrower;
       }
     
       public LibrarianDetails getLibrarian()
       {
          return this.librarian;
       }
     
       public BooksIssued getBooksIssued()
       {
          return this.booksIssued;
       }
     
       public void setLibraryName(String libraryName)
       {
          this.libraryName = libraryName;
       }
     
       public void setContactNumber(String contactNumber)
       {
          this.contactNumber = contactNumber;
       }
     
       public void setAddress(String address)
       {
          this.address = address;
       }
     
       public void setBorrower(BorrowerDetails borrower)
       {
          this.borrower = borrower;
       }
     
       public void setLibrarian(LibrarianDetails librarian)
       {
          this.librarian = librarian;
       }
     
       public void setBooksIssued(BooksIssued booksIssued)
       {
          this.booksIssued = booksIssued;
       }
     
       public String toString()
       {
          return String.format("%s%n%-20s%s%n%-20s%s%n%-20s%s%n%n%s%n%s%n%n%s%n%s%n%n%s%n%s%n", "----------Library Details----------", "Library Name:", this.libraryName, "Contact Number: ", this.contactNumber, "Address: ", this.address, "----------Borrower Details----------", this.borrower, "----------Librarian Details----------", this.librarian, "----------Books Issued----------", this.booksIssued);
       }
    }
    
    // LibraryTest.java
    public class LibraryTest
    {
        public static void main(String[] args)
        {
          Date borrowerDob = new Date(12, 10, 2002);
          BorrowerDetails borrower1 = new BorrowerDetails("ID-541", "John", "Area 51", borrowerDob, true);
          
          Date librarianDob = new Date(12, 10, 2002);
          LibrarianDetails librarian1 = new LibrarianDetails("ID-001", "Doe", "Area 51", librarianDob, "Librarian", 10000, "email@example.com");
          
          BookDetails bookDetails = new BookDetails(13, "Kindness", "Alex", "Fiction");
          Date borrowDate = new Date(9, 1, 2020);
          Date dueDate = new Date(9, 10, 2021);
          Date returnDate = new Date(18, 4, 2020);
          BooksIssued book1 = new BooksIssued(bookDetails, borrowDate, dueDate, returnDate, 0);
          
          Library library = new Library("Guiding Light", "+92 321 1234567", "Area 51", borrower1, librarian1, book1);
          
          System.out.println(library);
        }
     }`
    
  },
    {
      title: "Variables and Data Types",
      category: "variables-data-types",
      code: `public class Main {
    public static void main(String[] args) {
      int age = 30;
      double height = 1.75;
      boolean isStudent = true;
      String name = "John Doe";
    }
  }`
    },
    {
      title: "Operators and Control Structures",
      category: "operators-control-structures",
      code: `public class Main {
    public static void main(String[] args) {
      int x = 10;
      int y = 5;
      int result = x + y;
      
      if (result > 10) {
        System.out.println("Result is greater than 10");
      } else {
        System.out.println("Result is less than or equal to 10");
      }
    }
  }`
    },
    {
      title: "Functions and Methods",
      category: "functions-methods",
      code: `public class Main {
    public static int add(int a, int b) {
      return a + b;
    }
  
    public static void main(String[] args) {
      int sum = add(5, 3);
      System.out.println("The sum is: " + sum);
    }
  }`
    },
    {
      title: "Arrays and Collections",
      category: "arrays-collections",
      code: `public class Main {
    public static void main(String[] args) {
      int[] numbers = {1, 2, 3, 4, 5};
      
      for (int num : numbers) {
        System.out.println(num);
      }
      
      List<String> names = new ArrayList<>();
      names.add("Alice");
      names.add("Bob");
      names.add("Charlie");
      
      for (String name : names) {
        System.out.println(name);
      }
    }
  }`
    },
    {
      title: "Object-Oriented Programming",
      category: "oop",
      code: `public class Person {
    private String name;
    private int age;
  
    public Person(String name, int age) {
      this.name = name;
      this.age = age;
    }
  
    public void introduce() {
      System.out.println("Hello, my name is " + name + " and I am " + age + " years old.");
    }
  
    public static void main(String[] args) {
      Person john = new Person("John", 30);
      john.introduce();
    }
  }`
    }
  ];
  
  // Get DOM elements
  const codeSnippetContainer = document.querySelector('.code-snippet-container');
  const searchInput = document.getElementById('search-input');
  const searchBtn = document.getElementById('search-btn');
  const filterSelect = document.getElementById('filter-select');
  
  // Render code snippets
  function renderCodeSnippets(snippets) {
    codeSnippetContainer.innerHTML = '';
  
    snippets.forEach(snippet => {
      const codeSnippetElement = document.createElement('div');
      codeSnippetElement.classList.add('code-snippet');
  
      codeSnippetElement.innerHTML = `
        <h3>${snippet.title}</h3>
        <pre><code class="language-java">${snippet.code.trim()}</code></pre>
        <button class="copy-btn">Copy to Clipboard</button>
      `;
  
      const copyBtn = codeSnippetElement.querySelector('.copy-btn');
      copyBtn.addEventListener('click', () => {
        const codeElement = codeSnippetElement.querySelector('code');
        navigator.clipboard.writeText(codeElement.textContent.trim());
        alert('Code snippet copied to clipboard!');
      });
  
      codeSnippetContainer.appendChild(codeSnippetElement);
    });
  
    Prism.highlightAll();
  }
  
  // Handle search and filtering
  searchBtn.addEventListener('click', () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredSnippets = codeSnippets.filter(snippet => {
      return snippet.title.toLowerCase().includes(searchTerm) || snippet.code.toLowerCase().includes(searchTerm);
    });
  
    renderCodeSnippets(filteredSnippets);
  });
  
  filterSelect.addEventListener('change', () => {
    const selectedCategory = filterSelect.value;
    const filteredSnippets = selectedCategory
      ? codeSnippets.filter(snippet => snippet.category === selectedCategory)
      : codeSnippets;
  
    renderCodeSnippets(filteredSnippets);
  });
  
  // Initial render
  renderCodeSnippets(codeSnippets);
  
