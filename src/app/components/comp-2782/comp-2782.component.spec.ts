/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2782Component } from './comp-2782.component';

describe('Comp2782Component', () => {
  let component: Comp2782Component;
  let fixture: ComponentFixture<Comp2782Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2782Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2782Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
