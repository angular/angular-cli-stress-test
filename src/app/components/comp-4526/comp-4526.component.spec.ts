/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4526Component } from './comp-4526.component';

describe('Comp4526Component', () => {
  let component: Comp4526Component;
  let fixture: ComponentFixture<Comp4526Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4526Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4526Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
