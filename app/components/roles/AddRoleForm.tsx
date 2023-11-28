import UI from "@material-tailwind/react";
import { useEffect, useState } from "react";

const {
  Button,
  Spinner,
  Typography,
  Input,
} = UI;


interface AddRoleFormProps {
  onAdd(roleName: string): void;
  isSubmitting?: boolean;
  created?: boolean;
  error?: string
}

export function AddRoleForm({ onAdd, isSubmitting, error, created = false }: AddRoleFormProps) {

  const [roleName, setRoleName] = useState('');

  useEffect(() => {
    if (created) {
      setRoleName('');
    }
  }, [created])

  return (
    <div className="flex flex-col gap-2 p-4 mb-4 -mx-4 shadow border-b border-blue-gray-100 bg-blue-gray-50/50">
      <Typography variant="h4" color="blue-gray">
        Add new role
      </Typography>
      <div className="flex gap-2 items-center">
        <Input
          crossOrigin
          label="Role name"
          size="lg"
          value={roleName}
          onChange={e => setRoleName(e.target.value)}
          error={!!error}
        />
        <Button onClick={() => onAdd(roleName)} variant="gradient" className="whitespace-nowrap flex items-center justify-center gap-2" disabled={!roleName || roleName.length < 5 || isSubmitting}>
          {isSubmitting && <Spinner />}
          Add
        </Button>
      </div>
      {error && <Typography variant="small" color="red" className="my-0">
        {error}
      </Typography>}
    </div>
  );
}