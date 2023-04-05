<template>
  <TemplateCard :key="person.Number" :candidate="{...person}">
    <template v-slot:infomation>
      <div>
        <table class="table-container">
          <tbody>
            <tr > 
              <th class="col1">สังกัด</th>
              <td class="pl-2">{{ person.Party.Name }}</td>
            </tr>
            <tr> 
              <th class="col1">อายุ</th>
              <td class="pl-2">{{ getAge() }} ปี </td>
            </tr>
            <tr> 
              <th class="col1">การศึกษา</th>
              <td class="pl-2">{{ person.Education }}</td>
            </tr>
            <tr> 
              <th class="col1">อาชีพเดิม</th>
              <td class="pl-2">{{ person.ExOccupation }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </template>

    <template v-slot:linkList>
      <Link v-if="!person.PeoplePartyHistory" 
      type="google"
      :link= urlGoogle
      />

      <Link v-else 
      type="portfolio"
      :link= urlTheyWork
      />
    </template>
  </TemplateCard>     
</template>

<script>
import TemplateCard from '~/components/candidateCard/TemplateCard.vue'
import Link from '~/components/candidateCard/Link.vue'
export default{
  props: {
    person: {
      type: Object,
      default: {}
    }
  },
  components: {
    TemplateCard,
    Link
  },
  data() {
    return {
      urlGoogle : "https://www.google.com/search?q=" + this.person.Name,
      urlTheyWork: "https://theyworkforus.wevis.info/people/" + this.person.Name.replaceAll(' ','-')
    }
  },
  methods: {
    getAge() {
      var birthday = new Date(this.person.Birthdate)
      var ageDifMs = Date.now() - birthday.getTime();
      var ageDate = new Date(ageDifMs);
      return Math.abs(ageDate.getUTCFullYear() - 1970);
    },
  }
}
</script>
<style scoped>
.col1{
  font-weight: normal;
  color: var(--color-gray-3);
  text-align: start;
  vertical-align: top;
  white-space:nowrap;
}
</style>