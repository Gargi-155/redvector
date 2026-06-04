from app.evaluators.toxicity import (
    ToxicityEvaluator
)

evaluator = ToxicityEvaluator()

print(
    evaluator.evaluate(
        "You are stupid and useless."
    )
)
