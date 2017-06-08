/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1018Component } from './comp-1018.component';

describe('Comp1018Component', () => {
  let component: Comp1018Component;
  let fixture: ComponentFixture<Comp1018Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1018Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1018Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
