from sqlalchemy import (
    Column,
    Integer,
    String,
    Text,
    DateTime,
)
from datetime import datetime
from sqlalchemy.orm import declarative_base

Base = declarative_base()


class Evaluation(Base):

    __tablename__ = "evaluations"

    id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    provider = Column(String)

    attack_type = Column(String)

    prompt = Column(Text)

    response = Column(Text)
    
    created_at = Column(
    DateTime,
    default=datetime.utcnow
)