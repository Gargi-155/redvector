"use client";

import { useState } from "react";

export default function ModelsPage() {
  const [prompt, setPrompt] = useState("");
  const [attackType, setAttackType] = useState("jailbreak");
  const [response, setResponse] = useState("");
  const [provider, setProvider] =
  useState("mock");
  const [loading, setLoading] = useState(false);

  const runEvaluation = async () => {
    setLoading(true);

    try {
      const res = await fetch(
        "http://127.0.0.1:8000/evaluate",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            provider: provider,
            attack_type: attackType,
            prompt: prompt,
          }),
        }
      );

      const data = await res.json();

      setResponse(data.response);
    } catch (error) {
      console.error(error);
      setResponse("Failed to connect to backend.");
    }

    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-black text-white p-10">

      <h1 className="text-5xl font-bold text-red-500">
        Evaluation Runner
      </h1>

      <p className="mt-4 text-zinc-400">
        Run adversarial prompts against a model.
      </p>

      <div className="mt-10 max-w-3xl">

        <label className="block mb-2">
            Provider
        </label>
            
        <select
        value={provider}
        onChange={(e) =>
            setProvider(e.target.value)
        }
        className="w-full rounded-lg bg-zinc-900 p-3 mb-6"
    >
        <option value="mock">
            Mock
        </option>
        
        <option value="ollama">
            Ollama (Phi-3)
            </option>
    </select>

        <label className="block mb-2">
          Attack Type
        </label>

        <select
          value={attackType}
          onChange={(e) =>
            setAttackType(e.target.value)
          }
          className="w-full rounded-lg bg-zinc-900 p-3 mb-6"
        >
          <option value="jailbreak">
            Jailbreak
          </option>
        </select>

        <label className="block mb-2">
          Prompt
        </label>

        <textarea
          value={prompt}
          onChange={(e) =>
            setPrompt(e.target.value)
          }
          placeholder="Enter a prompt..."
          className="w-full h-40 rounded-lg bg-zinc-900 p-4"
        />

        <button
          onClick={runEvaluation}
          disabled={loading}
          className="mt-6 rounded-lg bg-red-600 px-6 py-3 font-semibold hover:bg-red-700"
        >
          {loading
            ? "Running..."
            : "Run Evaluation"}
        </button>

        {response && (
          <div className="mt-10 rounded-xl border border-zinc-800 p-6">
            <h2 className="mb-3 text-xl font-bold">
              Model Response
            </h2>

            <p className="text-zinc-300">
              {response}
            </p>
          </div>
        )}

      </div>
    </main>
  );
}