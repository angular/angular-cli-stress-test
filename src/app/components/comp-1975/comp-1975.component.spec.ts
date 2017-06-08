/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1975Component } from './comp-1975.component';

describe('Comp1975Component', () => {
  let component: Comp1975Component;
  let fixture: ComponentFixture<Comp1975Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1975Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1975Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
