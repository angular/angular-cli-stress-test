/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1469Component } from './comp-1469.component';

describe('Comp1469Component', () => {
  let component: Comp1469Component;
  let fixture: ComponentFixture<Comp1469Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1469Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1469Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
