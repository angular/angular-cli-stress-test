/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1775Component } from './comp-1775.component';

describe('Comp1775Component', () => {
  let component: Comp1775Component;
  let fixture: ComponentFixture<Comp1775Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1775Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1775Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
