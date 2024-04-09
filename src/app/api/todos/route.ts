import { NextRequest, NextResponse } from "next/server";

const dummyTodos = [
	{ id: 1, task: "Practice Next.js", completed: false },
	{ id: 2, task: "Practice jQuery", completed: true },
	{ id: 3, task: "Practice JavaScript", completed: false },
];

export async function GET(request: Request) {
	try {
		return NextResponse.json(dummyTodos);
	} catch (error) {
		return NextResponse.json("Internal Server Error", { status: 500 });
	}
}

export async function POST(request: NextRequest) {
	try {
		const formData = await request.formData();
		const taskToAdd = formData.get("newTask")?.toString();

		dummyTodos.push({
			id: dummyTodos.length + 1,
			task: taskToAdd || "Dummy Task",
			completed: false,
		});

		return NextResponse.json("Todo Item Added Successfully", { status: 200 });
	} catch (error) {
		return NextResponse.json("Internal Server Error", { status: 500 });
	}
}

// export async function DELETE() {}
