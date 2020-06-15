import React from 'react';

export function withProps(WrappedComponent: any, props: any) {
  return class extends React.Component<any, any> {
    public render() {
      return <WrappedComponent {...props} />;
    }
  };
}
