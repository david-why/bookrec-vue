<script setup lang="ts">
import ContentComponent from '@/components/ContentComponent.vue'
import LanguageSelect from '@/components/LanguageSelect.vue'
import TitleComponent from '@/components/TitleComponent.vue'
</script>

<template>
  <TitleComponent>Grade and Lexile</TitleComponent>
  <ContentComponent class="lexile-container">
    <table class="lexile-table">
      <tr>
        <th>Grade</th>
        <th>10%</th>
        <th>25%</th>
        <th>50%</th>
        <th>75%</th>
        <th>90%</th>
      </tr>

      <tr>
        <th><RouterLink :to="{ name: 'grade', params: { grade: ['K'] } }">K</RouterLink></th>
        <td>BR460L</td>
        <td>BR310L</td>
        <td>
          <RouterLink :to="{ name: 'lexile', params: { lexile: ['BR160L'] } }">BR160L</RouterLink>
        </td>
        <td><RouterLink :to="{ name: 'lexile', params: { lexile: ['5L'] } }">5L</RouterLink></td>
        <td>
          <RouterLink :to="{ name: 'lexile', params: { lexile: ['150L'] } }">150L</RouterLink>
        </td>
      </tr>
      <tr>
        <th><RouterLink :to="{ name: 'grade', params: { grade: ['1'] } }">1</RouterLink></th>
        <td>BR230L</td>
        <td><RouterLink :to="{ name: 'lexile', params: { lexile: ['35L'] } }">35L</RouterLink></td>
        <td>
          <RouterLink :to="{ name: 'lexile', params: { lexile: ['165L'] } }">165L</RouterLink>
        </td>
        <td>
          <RouterLink :to="{ name: 'lexile', params: { lexile: ['365L'] } }">365L</RouterLink>
        </td>
        <td>
          <RouterLink :to="{ name: 'lexile', params: { lexile: ['570L'] } }">570L</RouterLink>
        </td>
      </tr>
      <tr>
        <th><RouterLink :to="{ name: 'grade', params: { grade: ['2'] } }">2</RouterLink></th>
        <td><RouterLink :to="{ name: 'lexile', params: { lexile: ['65L'] } }">65L</RouterLink></td>
        <td>
          <RouterLink :to="{ name: 'lexile', params: { lexile: ['245L'] } }">245L</RouterLink>
        </td>
        <td>
          <RouterLink :to="{ name: 'lexile', params: { lexile: ['425L'] } }">425L</RouterLink>
        </td>
        <td>
          <RouterLink :to="{ name: 'lexile', params: { lexile: ['605L'] } }">605L</RouterLink>
        </td>
        <td>
          <RouterLink :to="{ name: 'lexile', params: { lexile: ['795L'] } }">795L</RouterLink>
        </td>
      </tr>
      <tr>
        <th><RouterLink :to="{ name: 'grade', params: { grade: ['3'] } }">3</RouterLink></th>
        <td>
          <RouterLink :to="{ name: 'lexile', params: { lexile: ['315L'] } }">315L</RouterLink>
        </td>
        <td>
          <RouterLink :to="{ name: 'lexile', params: { lexile: ['480L'] } }">480L</RouterLink>
        </td>
        <td>
          <RouterLink :to="{ name: 'lexile', params: { lexile: ['645L'] } }">645L</RouterLink>
        </td>
        <td>
          <RouterLink :to="{ name: 'lexile', params: { lexile: ['810L'] } }">810L</RouterLink>
        </td>
        <td>
          <RouterLink :to="{ name: 'lexile', params: { lexile: ['985L'] } }">985L</RouterLink>
        </td>
      </tr>
      <tr>
        <th><RouterLink :to="{ name: 'grade', params: { grade: ['4'] } }">4</RouterLink></th>
        <td>
          <RouterLink :to="{ name: 'lexile', params: { lexile: ['555L'] } }">555L</RouterLink>
        </td>
        <td>
          <RouterLink :to="{ name: 'lexile', params: { lexile: ['700L'] } }">700L</RouterLink>
        </td>
        <td>
          <RouterLink :to="{ name: 'lexile', params: { lexile: ['850L'] } }">850L</RouterLink>
        </td>
        <td>
          <RouterLink :to="{ name: 'lexile', params: { lexile: ['1005L'] } }">1005L</RouterLink>
        </td>
        <td>
          <RouterLink :to="{ name: 'lexile', params: { lexile: ['1160L'] } }">1160L</RouterLink>
        </td>
      </tr>
      <tr>
        <th><RouterLink :to="{ name: 'grade', params: { grade: ['5'] } }">5</RouterLink></th>
        <td>
          <RouterLink :to="{ name: 'lexile', params: { lexile: ['650L'] } }">650L</RouterLink>
        </td>
        <td>
          <RouterLink :to="{ name: 'lexile', params: { lexile: ['795L'] } }">795L</RouterLink>
        </td>
        <td>
          <RouterLink :to="{ name: 'lexile', params: { lexile: ['950L'] } }">950L</RouterLink>
        </td>
        <td>
          <RouterLink :to="{ name: 'lexile', params: { lexile: ['1100L'] } }">1100L</RouterLink>
        </td>
        <td>
          <RouterLink :to="{ name: 'lexile', params: { lexile: ['1260L'] } }">1260L</RouterLink>
        </td>
      </tr>
      <tr>
        <th><RouterLink :to="{ name: 'grade', params: { grade: ['6'] } }">6</RouterLink></th>
        <td>
          <RouterLink :to="{ name: 'lexile', params: { lexile: ['725L'] } }">725L</RouterLink>
        </td>
        <td>
          <RouterLink :to="{ name: 'lexile', params: { lexile: ['875L'] } }">875L</RouterLink>
        </td>
        <td>
          <RouterLink :to="{ name: 'lexile', params: { lexile: ['1030L'] } }">1030L</RouterLink>
        </td>
        <td>
          <RouterLink :to="{ name: 'lexile', params: { lexile: ['1180L'] } }">1180L</RouterLink>
        </td>
        <td>
          <RouterLink :to="{ name: 'lexile', params: { lexile: ['1340L'] } }">1340L</RouterLink>
        </td>
      </tr>
      <tr>
        <th><RouterLink :to="{ name: 'grade', params: { grade: ['7'] } }">7</RouterLink></th>
        <td>
          <RouterLink :to="{ name: 'lexile', params: { lexile: ['795L'] } }">795L</RouterLink>
        </td>
        <td>
          <RouterLink :to="{ name: 'lexile', params: { lexile: ['940L'] } }">940L</RouterLink>
        </td>
        <td>
          <RouterLink :to="{ name: 'lexile', params: { lexile: ['1095L'] } }">1095L</RouterLink>
        </td>
        <td>
          <RouterLink :to="{ name: 'lexile', params: { lexile: ['1250L'] } }">1250L</RouterLink>
        </td>
        <td>
          <RouterLink :to="{ name: 'lexile', params: { lexile: ['1410L'] } }">1410L</RouterLink>
        </td>
      </tr>
      <tr>
        <th><RouterLink :to="{ name: 'grade', params: { grade: ['8'] } }">8</RouterLink></th>
        <td>
          <RouterLink :to="{ name: 'lexile', params: { lexile: ['850L'] } }">850L</RouterLink>
        </td>
        <td>
          <RouterLink :to="{ name: 'lexile', params: { lexile: ['1000L'] } }">1000L</RouterLink>
        </td>
        <td>
          <RouterLink :to="{ name: 'lexile', params: { lexile: ['1155L'] } }">1155L</RouterLink>
        </td>
        <td>
          <RouterLink :to="{ name: 'lexile', params: { lexile: ['1310L'] } }">1310L</RouterLink>
        </td>
        <td>
          <RouterLink :to="{ name: 'lexile', params: { lexile: ['1470L'] } }">1470L</RouterLink>
        </td>
      </tr>
      <tr>
        <th><RouterLink :to="{ name: 'grade', params: { grade: ['9'] } }">9</RouterLink></th>
        <td>
          <RouterLink :to="{ name: 'lexile', params: { lexile: ['900L'] } }">900L</RouterLink>
        </td>
        <td>
          <RouterLink :to="{ name: 'lexile', params: { lexile: ['1050L'] } }">1050L</RouterLink>
        </td>
        <td>
          <RouterLink :to="{ name: 'lexile', params: { lexile: ['1205L'] } }">1205L</RouterLink>
        </td>
        <td>
          <RouterLink :to="{ name: 'lexile', params: { lexile: ['1360L'] } }">1360L</RouterLink>
        </td>
        <td>
          <RouterLink :to="{ name: 'lexile', params: { lexile: ['1520L'] } }">1520L</RouterLink>
        </td>
      </tr>
      <tr>
        <th><RouterLink :to="{ name: 'grade', params: { grade: ['10'] } }">10</RouterLink></th>
        <td>
          <RouterLink :to="{ name: 'lexile', params: { lexile: ['945L'] } }">945L</RouterLink>
        </td>
        <td>
          <RouterLink :to="{ name: 'lexile', params: { lexile: ['1095L'] } }">1095L</RouterLink>
        </td>
        <td>
          <RouterLink :to="{ name: 'lexile', params: { lexile: ['1250L'] } }">1250L</RouterLink>
        </td>
        <td>
          <RouterLink :to="{ name: 'lexile', params: { lexile: ['1410L'] } }">1410L</RouterLink>
        </td>
        <td>
          <RouterLink :to="{ name: 'lexile', params: { lexile: ['1570L'] } }">1570L</RouterLink>
        </td>
      </tr>
      <tr>
        <th><RouterLink :to="{ name: 'grade', params: { grade: ['11'] } }">11</RouterLink></th>
        <td>
          <RouterLink :to="{ name: 'lexile', params: { lexile: ['990L'] } }">990L</RouterLink>
        </td>
        <td>
          <RouterLink :to="{ name: 'lexile', params: { lexile: ['1140L'] } }">1140L</RouterLink>
        </td>
        <td>
          <RouterLink :to="{ name: 'lexile', params: { lexile: ['1295L'] } }">1295L</RouterLink>
        </td>
        <td>
          <RouterLink :to="{ name: 'lexile', params: { lexile: ['1450L'] } }">1450L</RouterLink>
        </td>
        <td>
          <RouterLink :to="{ name: 'lexile', params: { lexile: ['1610L'] } }">1610L</RouterLink>
        </td>
      </tr>
      <tr>
        <th><RouterLink :to="{ name: 'grade', params: { grade: ['12'] } }">12</RouterLink></th>
        <td>
          <RouterLink :to="{ name: 'lexile', params: { lexile: ['990L'] } }">990L</RouterLink>
        </td>
        <td>
          <RouterLink :to="{ name: 'lexile', params: { lexile: ['1140L'] } }">1140L</RouterLink>
        </td>
        <td>
          <RouterLink :to="{ name: 'lexile', params: { lexile: ['1295L'] } }">1295L</RouterLink>
        </td>
        <td>
          <RouterLink :to="{ name: 'lexile', params: { lexile: ['1450L'] } }">1450L</RouterLink>
        </td>
        <td>
          <RouterLink :to="{ name: 'lexile', params: { lexile: ['1610L'] } }">1610L</RouterLink>
        </td>
      </tr>
      <tr>
        <td colspan="6"></td>
      </tr>
    </table>
    <LanguageSelect></LanguageSelect>
    <p>{{ $t('page.lexile.line1') }}</p>
    <p>{{ $t('page.lexile.line2') }}</p>
  </ContentComponent>
</template>

<style scoped>
.lexile-container {
  padding: 1em;
}
.lexile-table {
  margin: auto;
}
</style>
