/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1530Component } from './comp-1530.component';

describe('Comp1530Component', () => {
  let component: Comp1530Component;
  let fixture: ComponentFixture<Comp1530Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1530Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1530Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
