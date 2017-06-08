/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1835Component } from './comp-1835.component';

describe('Comp1835Component', () => {
  let component: Comp1835Component;
  let fixture: ComponentFixture<Comp1835Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1835Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1835Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
