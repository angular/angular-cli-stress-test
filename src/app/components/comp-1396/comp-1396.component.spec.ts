/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1396Component } from './comp-1396.component';

describe('Comp1396Component', () => {
  let component: Comp1396Component;
  let fixture: ComponentFixture<Comp1396Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1396Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1396Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
