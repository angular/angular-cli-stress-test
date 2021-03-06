/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3831Component } from './comp-3831.component';

describe('Comp3831Component', () => {
  let component: Comp3831Component;
  let fixture: ComponentFixture<Comp3831Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3831Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3831Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
