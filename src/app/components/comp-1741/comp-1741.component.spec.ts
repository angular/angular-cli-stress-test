/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1741Component } from './comp-1741.component';

describe('Comp1741Component', () => {
  let component: Comp1741Component;
  let fixture: ComponentFixture<Comp1741Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1741Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1741Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
