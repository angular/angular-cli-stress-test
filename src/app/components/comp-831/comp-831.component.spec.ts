/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp831Component } from './comp-831.component';

describe('Comp831Component', () => {
  let component: Comp831Component;
  let fixture: ComponentFixture<Comp831Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp831Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp831Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
