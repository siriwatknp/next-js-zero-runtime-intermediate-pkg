import Badge from "@mui/material/Badge";

export function ColorBadge() {
  return (
    <div>
      <Badge badgeContent={4} color="secondary">
        Hello
      </Badge>
      <Badge badgeContent={4} color="success">
        World
      </Badge>
    </div>
  );
}
