import { PlusIcon } from "@heroicons/react/24/outline";
import { UserGroupIcon } from "@heroicons/react/24/solid";
import UI from "@material-tailwind/react";
import { IRole } from "types/role.types";

const {
  Typography,
  Button,
} = UI;

const TABLE_HEAD = ["Name", "Users Count"];

interface RolesListProps {
  roles: IRole[]
}

export default function RolesList({ roles = [] }: RolesListProps) {

  return (
    <table className="mt-4 w-full min-w-max table-auto text-left">
      <thead>
        <tr>
          {TABLE_HEAD.map((head) => (
            <th
              key={head}
              className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
            >
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal leading-none opacity-70"
              >
                {head}
              </Typography>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {roles.length === 0 && <tr>
          <td colSpan={TABLE_HEAD.length}>
            <div className="flex p-4 justify-center">
              <Button variant="gradient" className="flex items-center gap-3">
                <PlusIcon className="h-4 w-4" />
                Add Role
              </Button>
            </div>
          </td>
        </tr>}
        {roles.map(
          ({ name, id, _count }, index) => {
            const usersCount = _count?.users || 0;
            const isLast = index === roles.length - 1;
            const classes = isLast
              ? "p-4"
              : "p-4 border-b border-blue-gray-50";

            return (
              <tr key={name}>
                <td className={classes}>
                  <div className="flex items-center gap-3">
                    <div className="flex flex-col">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {name}
                      </Typography>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal opacity-70"
                      >
                        {id}
                      </Typography>
                    </div>
                  </div>
                </td>
                <td className={classes}>
                  <div className="flex">
                    <Button variant="gradient" className="flex items-center gap-3">
                      <UserGroupIcon className="h-4 w-4" />
                      {usersCount} User{usersCount > 1 ? 's' : ''}
                    </Button>
                  </div>
                </td>
              </tr>
            );
          },
        )}
      </tbody>
    </table>
  );
}