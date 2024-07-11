import React, { useState } from 'react'
import { Collapse, InputNumber,Tag,Switch } from 'antd';
import { CloseCircleOutlined, YoutubeOutlined } from '@ant-design/icons';



export default function Settings({settings,setSettings}) {
  const { Panel } = Collapse;
  const tags = [];


  const searchTagHandler = (e) => {
    const text = e.target.value
    if (e.key === 'Enter' && e.target.value.trim()) {
      setSettings((prevSettings) => ({
        ...prevSettings,
        containsWord: [...prevSettings.containsWord, text],
      }));
        e.target.value = '';
    }
  };

  const removeTagHandler = (tag) => {
    const filteredTags = settings.containsWord.filter((_tag) => tag !== _tag);
    setSettings((prevSettings) => ({
      ...prevSettings,
      containsWord: filteredTags,
    }));
  };

  


  return (
    <div className="settings-container">
      <Collapse>
        <Panel header="Ayarlar" key="1">
          <div className="settings-wrapper">
            <div className="tags-wrapper">
              {settings.containsWord.map((tag, index) => (
                <Tag
                  key={index}
                  closeIcon={<CloseCircleOutlined />}
                  onClose={() => removeTagHandler(tag)}
                >
                  {tag}
                </Tag>
              ))}
            </div>
            <div className="contains-word">
              <label>Kelimeyi eklemek için lütfen `enter` tuşuna basınız</label>
              <div className="input-wrapper">
                <input
                  placeholder="Aranan kelimeler"
                  onKeyDown={(e) => searchTagHandler(e)}
                />
              </div>
            </div>
            <div className="number-settings-wraper">
              <div className="number-input">
                <InputNumber
                  min={1}
                  max={1000}
                  value={settings.winnerCount}
                  onChange={(value) =>
                    setSettings({ ...settings, winnerCount: value })
                  }
                />
                <label>Kazanan Sayısı</label>
              </div>
              <div className="number-input">
                <InputNumber
                  min={0}
                  max={1000}
                  value={settings.spareCount}
                  onChange={(value) =>
                    setSettings({ ...settings, spareCount: value })
                  }
                />
                <label>Yedek Sayısı</label>
              </div>
            </div>
            <div className="switch-buttons">
              <div className="button-wrapper">
                <Switch
                  value={settings.uniqueUsers}
                  onChange={(checked) =>
                    setSettings({ ...settings, uniqueUsers: checked })
                  }
                />
                <label>Her Kullanıcıyı Bir Kere Say</label>
              </div>
              <div className="button-wrapper">
                <Switch
                  value={settings.uniqueCommands}
                  disabled={settings.uniqueUsers}
                  onChange={(checked) =>
                    setSettings({ ...settings, uniqueCommands: checked })
                  }
                />
                <label>Her Yorumu Bir Kere Say</label>
              </div>
            </div>
          </div>
        </Panel>
      </Collapse>
    </div>
  );
}
