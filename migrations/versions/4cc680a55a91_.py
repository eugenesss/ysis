"""empty message

Revision ID: 4cc680a55a91
Revises: 033357829b38
Create Date: 2019-07-20 15:28:46.012763

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import mysql

# revision identifiers, used by Alembic.
revision = '4cc680a55a91'
down_revision = '033357829b38'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('category', sa.Column('cat_name', sa.String(length=50), nullable=True))
    op.drop_column('category', 'name')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('category', sa.Column('name', mysql.VARCHAR(length=50), nullable=True))
    op.drop_column('category', 'cat_name')
    # ### end Alembic commands ###
