/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1680Component } from './comp-1680.component';

describe('Comp1680Component', () => {
  let component: Comp1680Component;
  let fixture: ComponentFixture<Comp1680Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1680Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1680Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
