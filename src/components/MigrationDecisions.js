import React, { useState } from 'react';
import { FiDatabase, FiLayers, FiCloud } from 'react-icons/fi';
import migrationDecisionData from '../data/migrationDecisionData';
import PageHeader from './common/PageHeader';

const Chip = ({ children }) => (
  <span className="inline-block text-xs bg-blue-50 text-blue-700 border border-blue-200 rounded px-2 py-0.5 mr-1 mb-1">
    {children}
  </span>
);

const Section = ({ title, children }) => (
  <div>
    <h4 className="text-sm font-semibold text-gray-800 mb-2">{title}</h4>
    {children}
  </div>
);

const DestinationCard = ({ dest, badges }) => {
  const Icon = dest.id === 'databricks' ? FiLayers : dest.id === 'snowflake' ? FiCloud : FiDatabase;
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <Icon className="text-blue-600" />
          <div className="text-base font-semibold text-gray-900">{dest.label}</div>
        </div>
        <div className="hidden md:flex flex-wrap justify-end max-w-[60%]">
          {badges?.map((b, i) => (
            <Chip key={i}>{b}</Chip>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 gap-3">
        <Section title="When it fits">
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            {dest.fitSignals.map((it, idx) => <li key={idx}>{it}</li>)}
          </ul>
        </Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <Section title="Pros">
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              {dest.pros.map((it, idx) => <li key={idx}>{it}</li>)}
            </ul>
          </Section>
          <Section title="Cons">
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              {dest.cons.map((it, idx) => <li key={idx}>{it}</li>)}
            </ul>
          </Section>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <Section title={`Complexity: ${dest.complexity}`}>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              {dest.complexityNotes.map((it, idx) => <li key={idx}>{it}</li>)}
            </ul>
          </Section>
          <Section title="Operating model">
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              {dest.operatingModel.map((it, idx) => <li key={idx}>{it}</li>)}
            </ul>
          </Section>
        </div>
        <Section title="Cost model (qualitative)">
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            {dest.costModel.map((it, idx) => <li key={idx}>{it}</li>)}
          </ul>
        </Section>
      </div>
    </div>
  );
};

export default function MigrationDecisions() {
  const [includeFabric, setIncludeFabric] = useState(true);
  const [activeSource, setActiveSource] = useState(migrationDecisionData.sources[0].id);
  const [env, setEnv] = useState({ powerBI: true, kafka: true, dsOnDatabricks: true });

  const sources = migrationDecisionData.sources;
  const source = sources.find(s => s.id === activeSource);
  const destinations = source.destinations.filter(d => includeFabric ? true : d.id !== 'fabric');

  const badgesFor = (destId) => {
    const b = [];
    if (env.powerBI) {
      if (destId === 'fabric') b.push('Power BI native');
      if (destId === 'snowflake') b.push('Power BI connector');
      if (destId === 'databricks') b.push('Direct Lake/SQL endpoints');
    }
    if (env.kafka) {
      if (destId === 'databricks') b.push('Kafka/Delta streaming');
      if (destId === 'snowflake') b.push('Snowpipe Streaming');
      if (destId === 'fabric') b.push('Event Hubs/Kafka endpoint');
    }
    if (env.dsOnDatabricks) {
      if (destId === 'databricks') b.push('Data science native');
      if (destId === 'snowflake') b.push('Snowpark ML');
      if (destId === 'fabric') b.push('Fabric ML (evolving)');
    }
    return b;
  };

  return (
    <div>
      <PageHeader
        title="Migration Decisions"
        subtitle="Clear pros/cons and fit signals for moving from SingleStore or SQL Server to Databricks, Snowflake, or Azure Fabric."
      />

      {/* Controls bar */}
      <div className="bg-white rounded-xl border border-gray-200 p-3 mb-5 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div className="inline-flex rounded-lg border border-gray-200 overflow-hidden">
          {sources.map(s => (
            <button
              key={s.id}
              onClick={() => setActiveSource(s.id)}
              className={`px-4 py-2 text-sm font-medium ${activeSource === s.id ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
            >
              {s.label}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-2 text-sm">
          <label className="inline-flex items-center gap-2">
            <input type="checkbox" checked={env.powerBI} onChange={e => setEnv(v => ({ ...v, powerBI: e.target.checked }))} />
            <span>Power BI</span>
          </label>
          <label className="inline-flex items-center gap-2">
            <input type="checkbox" checked={env.kafka} onChange={e => setEnv(v => ({ ...v, kafka: e.target.checked }))} />
            <span>Kafka</span>
          </label>
          <label className="inline-flex items-center gap-2">
            <input type="checkbox" checked={env.dsOnDatabricks} onChange={e => setEnv(v => ({ ...v, dsOnDatabricks: e.target.checked }))} />
            <span>Data science on Databricks</span>
          </label>
          <span className="mx-2 h-5 w-px bg-gray-200 hidden md:inline-block" />
          <label className="inline-flex items-center gap-2">
            <input type="checkbox" checked={includeFabric} onChange={e => setIncludeFabric(e.target.checked)} />
            <span>Show Azure Fabric</span>
          </label>
        </div>
      </div>

      {/* Destination columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {destinations.map(d => (
          <DestinationCard key={d.id} dest={d} badges={badgesFor(d.id)} />
        ))}
      </div>

      <div className="mt-6 text-xs text-gray-500">
        Tip: Keep transactional/OLTP apps on fit-for-purpose stores. Validate specifics (SLA, quotas, regional features) in your cloud tenant.
      </div>
    </div>
  );
}
