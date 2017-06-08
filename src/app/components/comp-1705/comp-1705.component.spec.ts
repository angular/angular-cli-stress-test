/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1705Component } from './comp-1705.component';

describe('Comp1705Component', () => {
  let component: Comp1705Component;
  let fixture: ComponentFixture<Comp1705Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1705Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1705Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
