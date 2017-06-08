/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1022Component } from './comp-1022.component';

describe('Comp1022Component', () => {
  let component: Comp1022Component;
  let fixture: ComponentFixture<Comp1022Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1022Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
