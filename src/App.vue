<template>
  <v-app>
    <v-card>
      <v-layout>
        <v-navigation-drawer
          expand-on-hover
          rail
        >
          <v-list>
            <v-list-item
              prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
              title="The Batman"
              subtitle="Bruce-NotWayne@gmailcom"
            ></v-list-item>
          </v-list>

          <v-divider></v-divider>

          <v-list density="compact" nav>
            <router-link to="/">
              <v-list-item prepend-icon="mdi-pencil-outline" title="Home" value="myfiles"></v-list-item>
            </router-link>
            <router-link to="/about">
              <v-list-item prepend-icon="mdi-account-multiple" title="Shingle Posts" value="shared"></v-list-item>
            </router-link>
            
            
            <v-list-item prepend-icon="mdi-star" title="Starred" value="starred"></v-list-item>
          </v-list>
        </v-navigation-drawer>

        <v-main>
          <Suspense>
            <router-view></router-view>
          </Suspense>
        </v-main>
      </v-layout>
    </v-card>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
}
</script>
