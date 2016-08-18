interface Window {
  devToolsExtension?: () => void;
  jwt_decode(jwt: string): any;

}
