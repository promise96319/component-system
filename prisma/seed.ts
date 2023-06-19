import { PrismaClient, Component } from '@prisma/client';

const prisma = new PrismaClient();

const components = [
  {
    category: '通用',
    components: [
      {
        description: 'Button 按钮',
        componentId: 'button',
      },
    ],
  },
  {
    category: '布局',
    components: [
      {
        description: 'Group 分组',
        componentId: 'group',
      },
    ],
  },
];

async function main() {
  const user = await prisma.user.create({
    data: {
      name: 'qt',
      email: 'qt@qingteng.cn',
      pwd: 'qt',
      role: 'ADMIN',
    },
  });

  const majorVersion = await prisma.majorVersion.create({
    data: {
      majorVersion: 3,
      createdById: user.id,
    },
  });

  for (const category of components) {
    await prisma.component.create({
      data: {
        category: category.category,
        majorVersionId: majorVersion.id,
        components: category.components,
      },
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
