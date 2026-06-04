from sqlalchemy.orm import Session

from app.database.models import Evaluation


def get_evaluations(db: Session):
    return db.query(Evaluation).all()

def get_stats(db: Session):

    evaluations = db.query(Evaluation).all()

    return {
        "total_evaluations": len(evaluations),
        "providers": len(
            set(
                e.provider
                for e in evaluations
            )
        ),
        "attack_types": len(
            set(
                e.attack_type
                for e in evaluations
            )
        ),
        "latest_evaluation":
            evaluations[-1].created_at
            if evaluations
            else None
    }

def save_evaluation(
    db: Session,
    provider: str,
    attack_type: str,
    prompt: str,
    response: str,
    toxicity_score: float = None
):
    evaluation = Evaluation(
        provider=provider,
        attack_type=attack_type,
        prompt=prompt,
        response=response,
        toxicity_score=toxicity_score
    )

    db.add(evaluation)
    db.commit()
    db.refresh(evaluation)

    return evaluation

def get_recent_evaluations(
    db: Session,
    limit: int = 10
):
    return (
        db.query(Evaluation)
        .order_by(Evaluation.id.desc())
        .limit(limit)
        .all()
    )

def get_evaluation_by_id(
    db: Session,
    evaluation_id: int
):
    return (
        db.query(Evaluation)
        .filter(
            Evaluation.id == evaluation_id
        )
        .first()
    )