/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1573Component } from './comp-1573.component';

describe('Comp1573Component', () => {
  let component: Comp1573Component;
  let fixture: ComponentFixture<Comp1573Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1573Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1573Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
