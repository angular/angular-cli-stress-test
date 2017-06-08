/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2705Component } from './comp-2705.component';

describe('Comp2705Component', () => {
  let component: Comp2705Component;
  let fixture: ComponentFixture<Comp2705Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2705Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2705Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
