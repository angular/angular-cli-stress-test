/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1970Component } from './comp-1970.component';

describe('Comp1970Component', () => {
  let component: Comp1970Component;
  let fixture: ComponentFixture<Comp1970Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1970Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1970Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
