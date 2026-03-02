import { Card, CardHeader, CardTitle, CardContent } from "shadcn/ui/card";
import { Button } from "shadcn/ui/button";
import { useState } from "react";

export default function Shodan() {
  const [output, setOutput] = useState<string>("");
  return (
    <Card className="p-4 rounded-lg shadow-md">
      <CardHeader>
        <CardTitle>Shodan</CardTitle>
      </CardHeader>
      <CardContent>
        <Button onClick={() => setOutput("Shodan launched")}>Run</Button>
        <pre className="mt-2">{output}</pre>
      </CardContent>
    </Card>
  );
}