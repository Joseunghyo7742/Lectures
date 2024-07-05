# Section9 프로젝트 관리앱

## 1. Form만들기

### form 속성

- `method` : 폼을 전송할 방식으로 'post' / 'get' 두 가지가 있다.
- `name` :하나의 웹 문서안에 여러 개의 폼이 있을 수 있으므로 폼을 식별하기 위해 폼의 이름을 지정한다.
- `action` : 폼을 전송할 서버의 스크립트 파일을 지정한다.
- `onsubmit` : action 속성을 활용하지 않고, onsubmit 이벤트를 활용해서 스크립트로 처리가 가능하다.
- `target` : 스크립트 파일을 현재의 창이 아닌 다른 위치에서 열리도록 지정할 수 있다.
- `autocomplete` : 폼 내부 요소의 자동 완성 기능을 사용여부를 결정합니다.

```javascript
import React from 'react';

class MyForm extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();
    // 이곳에 스크립트로 처리할 코드를 작성하세요.
    alert('Form has been submitted!');
  };

  render() {
    return (
      <form
        method="post"
        name="myForm"
        action="/submit-form"
        onSubmit={this.handleSubmit}
        target="_blank"
        autoComplete="off"
      >
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default MyForm;
```

### label 태그
해당 폼 요소에 어떤 값을 넣어야 하는지 이름을 붙이는 요소. 라벨은 꼭 명시하는게 좋고 공간이없다면 해당 입력 요소에 title 속성이라도 명시해야 함.

```javascript
<label for="id">아이디 입력</label>
<input type="text" id="id" />
```
- for과 id값이 같으면 연결된다
- label을 클릭만 해도 해당하는 폼입력 요소로 포커스가 맞춰진다

### Fieldset과 legend
<form> 요소에 연관된 요소들을 하나의 그룹으로 묶을 때 사용한다.

- 하나의 그룹으로 묶은 요소들 주변으로 박스 모양의 선을 그려준다.
- <legend> 요소를 사용하면 <filedset>요소의 캡션을 정의할 수 있다.
- 하나의 그룹으로 묶인 요소들을 속성인 disabled를 사용해 한번에 disabled 처리 가능

```javascript
import React from 'react';

class GroupedForm extends React.Component {
  state = {
    isDisabled: false,
  };

  handleDisableToggle = () => {
    this.setState((prevState) => ({
      isDisabled: !prevState.isDisabled,
    }));
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alert('Form has been submitted!');
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <fieldset disabled={this.state.isDisabled}>
          <legend>User Information</legend>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <br />
          <label>
            Email:
            <input type="email" name="email" />
          </label>
          <br />
          <label>
            Password:
            <input type="password" name="password" />
          </label>
        </fieldset>
        <br />
        <button type="submit">Submit</button>
        <button type="button" onClick={this.handleDisableToggle}>
          {this.state.isDisabled ? 'Enable Fields' : 'Disable Fields'}
        </button>
      </form>
    );
  }
}

export default GroupedForm;

```

### label태그와 input태그 사용
label태그로 input태그를 감싸는 방법과 별도로 작성한 후 for,  id로 연결하는 방법의 차이

1. label태그로 감싸는 방식
   - input이 시각적으로, 코드 구조상으로도 명확히 연결되어 접근성이 좋다. 사용자가 `label`을 클릭하면 자동으로 연결된 `input`에 포커스가 맞춰진다.
   - 이 방식은 `id`나 `for`을 사용하지 않아도 되어 코드가 간결해진다. 
   - 접근성이 좋아 스크린리더 사용자에게 유용하다.
   - 단, 스타일링이나 레이아웃 조정 시, `label`과 `input`이 밀접히 연결되어 유연성이 떨어진다. 
  
  ```javascript
      <label>
        이름:
        <input type="text" name="name" />
      </label>
  ```
2. label과 input을 별도로 작성 후 `for`과 `id` 속성으로 연결하기
  - label 요소에 for 속성을 사용하고, 이를 input 요소의 id 속성 값과 일치시켜 두 요소를 연결하는 방식이다. 이 방법은 label과 input이 물리적으로 분리되어 있어도 논리적으로 연결할 수 있게 해줍니다.
  - label과 input을 물리적으로 분리할 수 있어, 레이아웃이나 스타일링에 더 많은 유연성을 제공한다.
  - 접근성을 유지하면서도 복잡한 폼 레이아웃을 구성할 수 있다.
  - 코드가 약간 더 복잡해질 수 있으며, id 값이 유니크해야 하므로 관리해야 할 부분이 늘어난다.

> 두 방법은 각각 필요에 따라 다르지만 간단한 폼을 구성할 때는 감싸는 방법이 더 간결하고 접근성이 좋다. 반면, 레이아웃이 복잡하거나 스타일링에 유연성이 필요하다면 label과 input을 분리하고 for와 id로 연결하는 방법이 더 낫다.


### input 태그 상세
(input태그 정리)[https://tcpschool.com/html-tags/input]

## 2. 재사용 가능한 컴포넌트 만들기 팁
```javascript
import React from 'react';

const Input = ({ label, textarea, ...props }) => {
  return (
    <p>
      <label>{label}</label>
      {textarea ? <textarea {...props} /> : <input {...props} />}
    </p>
  );
};

export default Input;
```
> 객체 스프레드를 사용하면 어떤 속성이 오든 커스텀하여 컴포넌트를 재사용 할 수 있다. 


```javascript
import { useState } from 'react';
import Sidebar from './components/Sidebar';
import NewProject from './components/NewProject';
import NoProjectSelected from './components/NoProjectSelected';

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });
  function handleStartAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }
  let content;
  if (projectsState.selectedProjectId === null) {
    content = <NewProject />;
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }
  return (
    <main className="flex h-screen gap-8 my-8">
      <Sidebar onStartAddProject={handleStartAddProject} />
      {content}
    </main>
  );
}

export default App;

```
- content를 선언하여 분기문에 따라 렌더링할 컴포넌트를 나누어주고 있다.
- 개인적으론 return문 안에서 &&를 사용해 쓰는게 더 깔끔해보인다.

## 배운점
- App.js 에서 `setState` 함수를 직접 props로 넘겨주지 않고, setState를 가지고 `handle`함수를 만들어 그 함수를 전달해주어 의미를 분명히 한다. 만약 setState를 넘기고 자식 컴포넌트에서 이를 정의한다면 로직을 파악하기 위해 depth를 들어가야 하기 때문이다. 
``` javascript
import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

const App = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <ChildComponent onIncrement={handleIncrement} />
    </div>
  );
};
```

- ref 를 사용하여 `input type date`도 적용가능하다. 단 value를 고정값으로 해놓으면 변경을 주어도 반영되지 않는다.
  ```javascript
  import React, { useRef } from 'react';

  const DateInput = () => {
    const dateRef = useRef(null);

    const handleChange = () => {
      alert(`Selected date: ${dateRef.current.value}`);
    };

  return (
    <div>
      <input type="date" ref={dateRef} onChange={handleChange} />
      <button onClick={handleChange}>Show Date</button>
    </div>
  );
  };

  export default DateInput;

  ```