import UI from "@material-tailwind/react";
import { useState } from "react";

const {
  Button,
  Spinner,
  Typography,
  Input,
} = UI;


interface AddRoleFormProps {
  onAdd(roleName: string): void;
  isSubmitting?: boolean
}

export function AddRoleForm({ onAdd, isSubmitting }: AddRoleFormProps) {

  const [roleName, setRoleName] = useState('');

  return (
    <div className="flex flex-col gap-4 p-4 mb-4 -mx-4 shadow border-b border-blue-gray-100 bg-blue-gray-50/50">
      <Typography variant="h4" color="blue-gray">
        Add new role
      </Typography>
      <div className="flex gap-2 items-center">
        <Input crossOrigin label="Role name" size="lg" value={roleName} onChange={e => setRoleName(e.target.value)} />
        <Button onClick={() => onAdd(roleName)} variant="gradient" className="whitespace-nowrap flex items-center justify-center gap-2" disabled={!roleName || roleName.length < 5 || isSubmitting}>
          {isSubmitting && <Spinner />}
          Add
        </Button>
      </div>
    </div>
  );
}