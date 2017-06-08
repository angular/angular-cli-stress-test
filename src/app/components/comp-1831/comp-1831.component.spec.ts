/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1831Component } from './comp-1831.component';

describe('Comp1831Component', () => {
  let component: Comp1831Component;
  let fixture: ComponentFixture<Comp1831Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1831Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1831Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
