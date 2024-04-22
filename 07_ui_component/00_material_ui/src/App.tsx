/**
 * MUI
 * ReactのUIコンポーネントライブラリ
 * https://mui.com/
 *
 * Component Examples:
 * https://mui.com/material-ui/all-components/
 */
import React from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

/**
 * MUIメニューバーコンポーネント
 * @returns
 */
function MenuAppBar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  /**
   * アカウントメニューを開く関数
   * @param event
   */
  const openAccountMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  /**
   * アカウントメニューを閉じる関数
   */
  const closeAccountMenu = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        {/* 左サイドメニューボタン */}
        <IconButton size="large" edge="start" color="inherit" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        {/* メニューバータイトル */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          MUI Example
        </Typography>
        {/* アカウントアイコンボタン */}
        <IconButton size="large" onClick={openAccountMenu} color="inherit">
          <AccountCircle />
        </IconButton>
        {/* アカウントメニュー */}
        <Menu
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorEl)}
          onClose={closeAccountMenu}
        >
          <MenuItem onClick={closeAccountMenu}>Profile</MenuItem>
          <MenuItem onClick={closeAccountMenu}>My account</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

export default function App() {
  return (
    <Box>
      <MenuAppBar />
      <Box>コンテンツ</Box>
    </Box>
  );
}
