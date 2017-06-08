/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1174Component } from './comp-1174.component';

describe('Comp1174Component', () => {
  let component: Comp1174Component;
  let fixture: ComponentFixture<Comp1174Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1174Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1174Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
