// Code snippet data
const codeSnippets = [
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
  