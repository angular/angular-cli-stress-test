/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4072Component } from './comp-4072.component';

describe('Comp4072Component', () => {
  let component: Comp4072Component;
  let fixture: ComponentFixture<Comp4072Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4072Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4072Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
