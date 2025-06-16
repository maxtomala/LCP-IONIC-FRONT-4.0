import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChatGeneralPage } from './chat-general.page';

describe('ChatGeneralPage', () => {
  let component: ChatGeneralPage;
  let fixture: ComponentFixture<ChatGeneralPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatGeneralPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
