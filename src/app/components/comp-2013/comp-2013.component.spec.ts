/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2013Component } from './comp-2013.component';

describe('Comp2013Component', () => {
  let component: Comp2013Component;
  let fixture: ComponentFixture<Comp2013Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2013Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2013Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
