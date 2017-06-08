/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1126Component } from './comp-1126.component';

describe('Comp1126Component', () => {
  let component: Comp1126Component;
  let fixture: ComponentFixture<Comp1126Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1126Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1126Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
