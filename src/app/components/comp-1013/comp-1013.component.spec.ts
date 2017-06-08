/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1013Component } from './comp-1013.component';

describe('Comp1013Component', () => {
  let component: Comp1013Component;
  let fixture: ComponentFixture<Comp1013Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1013Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1013Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
