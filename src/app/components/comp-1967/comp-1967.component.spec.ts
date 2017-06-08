/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1967Component } from './comp-1967.component';

describe('Comp1967Component', () => {
  let component: Comp1967Component;
  let fixture: ComponentFixture<Comp1967Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1967Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1967Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
