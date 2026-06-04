from detoxify import Detoxify


class ToxicityEvaluator:

    def __init__(self):
        self.model = Detoxify("original")

    def evaluate(
        self,
        text: str
    ):
        result = self.model.predict(text)

        return float(
            result["toxicity"]
        )