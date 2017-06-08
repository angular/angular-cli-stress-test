/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1371Component } from './comp-1371.component';

describe('Comp1371Component', () => {
  let component: Comp1371Component;
  let fixture: ComponentFixture<Comp1371Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1371Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1371Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
