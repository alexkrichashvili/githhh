import React from 'react';
import { SafeAreaView, Text } from 'react-native';

export default function DetailsScreen({ props }) {
     const {
          full_name,
          description,
          open_issues_count,
          language,
     } = props.route.params.item;
     return;
     <SafeAreaView>
          <Text>{'name' + full_name}</Text>;<Text>{'language' + language}</Text>
          ;<Text>{'description' + description}</Text>;
          <Text>{'open_issues_count' + open_issues_count}</Text>;
     </SafeAreaView>;
}
