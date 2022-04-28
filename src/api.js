let API_Link = "https://assets.breatheco.de/apis/fake/todos/user/Minimage"

export async function getTodos() {
    const response = await fetch(
        API_Link,
    );
    const payload = await response.json();
    return payload;
}

export async function updateTodos (todos) {
    await fetch (
        API_Link,
        {
            method:'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(todos),
        }
    )
}