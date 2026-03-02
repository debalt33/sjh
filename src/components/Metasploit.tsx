import { Card, CardHeader, CardTitle, CardContent } from "shadcn/ui/card";
import { Button } from "shadcn/ui/button";
import { useState } from "react";
import { lucide } from "lucide-react";

export default function Metasploit() {
  const [output, setOutput] = useState<string>("");
  return (
    <Card className="p-4 rounded-lg shadow-md">
      <CardHeader>
        <CardTitle>Metasploit</CardTitle>
      </CardHeader>
      <CardContent>
        <Button onClick={() => setOutput("Metasploit launched")}>Run</Button>
        <pre className="mt-2">{output}</pre>
      </CardContent>
    </Card>
  );
}