/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1289Component } from './comp-1289.component';

describe('Comp1289Component', () => {
  let component: Comp1289Component;
  let fixture: ComponentFixture<Comp1289Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1289Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1289Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
