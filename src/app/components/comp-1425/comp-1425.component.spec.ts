/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1425Component } from './comp-1425.component';

describe('Comp1425Component', () => {
  let component: Comp1425Component;
  let fixture: ComponentFixture<Comp1425Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1425Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1425Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
