"""empty message

Revision ID: cf439ff85a58
Revises: 364112df7caf
Create Date: 2019-07-22 23:42:04.406903

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'cf439ff85a58'
down_revision = '364112df7caf'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('inventory', sa.Column('rack', sa.String(length=50), nullable=True))
    op.add_column('inventory', sa.Column('unit_code', sa.String(length=50), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('inventory', 'unit_code')
    op.drop_column('inventory', 'rack')
    # ### end Alembic commands ###