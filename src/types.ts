// 2개 이상의 파일에서 쓰는 타입만 여기 모음

// App, TodoItem에서 사용
export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

// App, TodoFilter에서 사용 (리터럴 유니온)
export type Filter = "all" | "active" | "done";