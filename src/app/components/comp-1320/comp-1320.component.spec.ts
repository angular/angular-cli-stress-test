/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1320Component } from './comp-1320.component';

describe('Comp1320Component', () => {
  let component: Comp1320Component;
  let fixture: ComponentFixture<Comp1320Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1320Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1320Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
