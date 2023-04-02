<template>
  <TemplateCard :key="people.Number" :candidate="{...people}">
    <template v-slot:infomation>
      <div>
        <table class="table-container">
          <tbody>
            <tr> 
              <td style="color: var(--color-gray-3)">สังกัด</td>
              <td class="pl-2">{{ people.Party.Name }}</td>
            </tr>
            <tr> 
              <td style="color: var(--color-gray-3)">อายุ</td>
              <td class="pl-2">{{ getAge() }} ปี </td>
            </tr>
            <tr> 
              <td style="color: var(--color-gray-3)">การศึกษา</td>
              <td class="pl-2">{{ people.Education }}</td>
            </tr>
            <tr> 
              <td style="color: var(--color-gray-3)">อาชีพเดิม</td>
              <td class="pl-2">{{ people.ExOccupation }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </template>

    <template v-slot:linkList>
      <Link v-if="!people.PeoplePartyHistory" 
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
    people: {
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
      urlGoogle : "https://www.google.com/search?q=" + this.people.Name,
      urlTheyWork: "https://theyworkforus.wevis.info/people/" + this.people.Name.replaceAll(' ','-')
    }
  },
  methods: {
    getAge() {
      var birthday = new Date(this.people.Birthdate)
      var ageDifMs = Date.now() - birthday.getTime();
      var ageDate = new Date(ageDifMs);
      return Math.abs(ageDate.getUTCFullYear() - 1970);
    },
  }
}
</script>